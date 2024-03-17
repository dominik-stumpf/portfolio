import { error } from '@sveltejs/kit';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { parseYamlMatter } from '$lib/unified-utils/retrieve-frontmatter';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkTextr from 'remark-textr';
import remarkGemoji from 'remark-gemoji';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
// @ts-ignore
import base from 'typographic-base';

const textrPlugins = [base];

export async function load({ params }: { params: { slug: string } }) {
  try {
    const weblog = await import(`../../../lib/weblogs/${params.slug}.md?raw`);
    const file = await unified()
      .use(remarkParse)
      .use(parseYamlMatter)
      .use(remarkFrontmatter, ['yaml'])
      .use(remarkGfm)
      .use(remarkMath)
      .use(remarkGemoji)
      .use(remarkRehype)
      .use(rehypeKatex)
      .use(rehypeHighlight)
      .use(rehypeExternalLinks, {
        rel: ['noreferrer noopener'],
        target: '_blank',
      })
      .use(rehypeStringify)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
      .use(remarkTextr, { options: { locale: 'en-us' }, plugins: textrPlugins })
      .process(weblog.default);

    return {
      content: file.value,
      metadata: file.data.matter,
    };
  } catch {
    error(404, 'Weblog not found.');
  }
}
