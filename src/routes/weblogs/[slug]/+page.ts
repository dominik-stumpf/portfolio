import { error } from '@sveltejs/kit';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { parseYamlMatter } from '$lib/unified-utils/retrieve-frontmatter';
import rehypeHighlight from 'rehype-highlight';

export async function load({ params }: { params: { slug: string } }) {
  try {
    const weblog = await import(`../../../lib/weblogs/${params.slug}.md?raw`);
    const file = await unified()
      .use(remarkParse)
      .use(remarkFrontmatter, ['yaml'])
      .use(parseYamlMatter)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(weblog.default);

    return {
      content: file.value,
      metadata: file.data.matter,
    };
  } catch {
    error(404, 'Weblog not found.');
  }
}
