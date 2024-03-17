import { error } from '@sveltejs/kit';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import yaml from 'js-yaml';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import type { Nodes as MdastNodes } from 'mdast';

function parseFrontmatter() {
  return (tree: MdastNodes) => {
    visit(tree, (...[node, _index, _parent]) => {
      if (node.type === 'yaml') {
        console.log(yaml.load(node.value));
      }
    });
  };
}

export async function load({ params }: { params: { slug: string } }) {
  try {
    console.log('loading', params.slug);
    const weblog = await import(`../../../lib/weblogs/${params.slug}.md?raw`);

    // console.log(weblog);

    // const { title, date } = weblog.metadata;

    const content = await unified()
      .use(remarkParse)
      .use(remarkFrontmatter, ['yaml'])
      .use(parseFrontmatter)
      // .use(() => {
      //   return (tree) => {
      //     console.dir(tree);
      //   }
      // })
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(weblog.default);

    console.log(content);

    return {
      content,
      // title,
      // date,
    };
  } catch {
    error(404, 'Weblog not found.');
  }
}
