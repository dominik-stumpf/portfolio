import { parseYamlMatter } from '$lib/utils/retrieve-frontmatter';
import { error } from '@sveltejs/kit';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkTextr from 'remark-textr';
import { applyTypographicBase } from 'src/lib/utils/apply-typographic-base';
import { unified } from 'unified';
import readingTime from 'reading-time';
import { weblogMetadataSchema } from 'src/lib/validators/weblog';
import type { ServerLoadEvent } from '@sveltejs/kit';

const textrPlugins = [applyTypographicBase];

export const csr = false;
export const prerender = true;

export async function load({ params }: ServerLoadEvent) {
  try {
    const weblog = await import(
      `../../../lib/weblogs-md/${params.slug}.md?raw`
    );
    const readingTimeStats = readingTime(weblog.default);

    const file = await unified()
      .use(remarkParse)
      .use(parseYamlMatter)
      .use(remarkFrontmatter, ['yaml'])
      .use(remarkGfm)
      .use(remarkMath)
      .use(remarkGemoji)
      .use(remarkTextr, { options: { locale: 'en-us' }, plugins: textrPlugins })
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
      .process(weblog.default);

    const metadata = weblogMetadataSchema.parse(file.data.matter);

    return {
      content: file.value,
      metadata,
      readingTimeStats,
    };
  } catch {
    error(404, 'Weblog not found.');
  }
}
