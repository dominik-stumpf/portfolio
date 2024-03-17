import type { Node } from 'unist';
import type { VFile } from 'vfile';
import remarkFrontmatter from 'remark-frontmatter';
import { unified } from 'unified';
import { matter } from 'vfile-matter';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';

export function parseYamlMatter() {
  return (tree: Node, file: VFile) => {
    matter(file);
  };
}

export async function retrieveFrontmatter(md: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkFrontmatter)
    .use(parseYamlMatter)
    .process(md);

  return file.data.matter;
}
