import remarkFrontmatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';
import type { Node } from 'unist';
import type { VFile } from 'vfile';
import { matter } from 'vfile-matter';

export function parseYamlMatter() {
  return (_tree: Node, file: VFile) => {
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
