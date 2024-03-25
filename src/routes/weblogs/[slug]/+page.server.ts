import { dev } from '$app/environment';
import { parseYamlMatter } from '$lib/utils/retrieve-frontmatter';
import { error } from '@sveltejs/kit';
import type { ServerLoadEvent } from '@sveltejs/kit';
// import { toString as nlcstToString } from 'nlcst-to-string'
import abbrs from 'case-police/dict/abbreviates.json';
import brands from 'case-police/dict/brands.json';
import general from 'case-police/dict/general.json';
import products from 'case-police/dict/products.json';
import softwares from 'case-police/dict/softwares.json';
import dictionaryEn from 'dictionary-en';
import type { Nodes as HastNodes, Root as HastRoot } from 'hast';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkRetext from 'remark-retext';
import remarkTextr from 'remark-textr';
import retextEnglish from 'retext-english';
import retextIndefiniteArticle from 'retext-indefinite-article';
import retextKeywords from 'retext-keywords';
import retextPos from 'retext-pos';
import retextReadability from 'retext-readability';
import retextSpell from 'retext-spell';
import { applyTypographicBase } from 'src/lib/utils/apply-typographic-base';
import { weblogMetadataSchema } from 'src/lib/validators/weblog';
import { unified } from 'unified';
import { type BuildVisitor, CONTINUE, visit } from 'unist-util-visit';
import { reporter } from 'vfile-reporter';

const casePoliceDictionary = Object.entries({
  ...abbrs,
  ...brands,
  ...general,
  ...products,
  ...softwares,
})
  .map(([key]) => key)
  .join('\n');

export const csr = dev;
export const prerender = true;

type HastVisitor = BuildVisitor<HastRoot>;

function rehypeMakeImagesInteractable() {
  function transform(...[node, _index, _parent]: Parameters<HastVisitor>) {
    if (node.type !== 'element') return CONTINUE;

    if (node.tagName === 'img') {
      node.properties.tabindex = '0';
      node.properties.draggable = 'false';
    }
  }

  return (hast: HastNodes) => {
    visit(hast, transform);
  };
}

export async function load({ params }: ServerLoadEvent) {
  try {
    const weblog = await import(
      `../../../../static/weblogs-md/${params.slug}.md?raw`
    );
    const personalDictionary = (await import('./personal-dictionary?raw'))
      .default;
    const readTimeResults = readingTime(weblog.default);
    const file = await unified()
      .use(remarkParse)
      .use(
        remarkRetext,
        // @ts-ignore
        dev &&
          unified()
            .use(retextEnglish)
            .use(retextReadability)
            .use(retextSpell, {
              dictionary: dictionaryEn,
              personal: `${casePoliceDictionary}\n${personalDictionary}`,
            })
            .use(retextIndefiniteArticle)
            .use(retextPos)
            .use(retextKeywords),
      )
      .use(parseYamlMatter)
      .use(remarkFrontmatter, ['yaml'])
      .use(remarkGfm)
      .use(remarkMath)
      .use(remarkGemoji)
      .use(remarkTextr, {
        options: { locale: 'en-us' },
        plugins: [applyTypographicBase],
      })
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeMakeImagesInteractable)
      .use(rehypeKatex)
      .use(rehypeHighlight)
      .use(rehypeExternalLinks, {
        rel: ['noreferrer noopener'],
        target: '_blank',
      })
      .use(rehypeStringify)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
      .process(weblog.default);

    if (dev) {
      // console.log('keywords:\n');
      //
      // if (file.data.keywords) {
      //   for (const keyword of file.data.keywords) {
      //     console.log(nlcstToString(keyword.matches[0].node))
      //   }
      // }
      //
      // console.log('\nkeyphrases:\n');
      //
      // if (file.data.keyphrases) {
      //   for (const phrase of file.data.keyphrases) {
      //     console.log(nlcstToString(phrase.matches[0].nodes))
      //   }
      // }

      console.warn(reporter(file));
    }

    const metadata = weblogMetadataSchema.parse(file.data.matter);

    return {
      content: file.value,
      metadata,
      readingTimeStats: readTimeResults,
      id: params.slug,
    };
  } catch {
    error(404, 'Weblog not found.');
  }
}
