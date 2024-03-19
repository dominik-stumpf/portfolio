import remarkFrontmatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';
import type { Node } from 'unist';
import type { VFile } from 'vfile';
import yaml from 'js-yaml';

function matter(file: VFile) {
  const regex = /^---(?:\r?\n|\r)(?:([\s\S]*?)(?:\r?\n|\r))?---(?:\r?\n|\r|$)/;
  let doc = String(file);

  const match = regex.exec(doc);
  if (match) {
    file.data.matter = yaml.load(match[1]);
  } else {
    file.data.matter = {};
  }
}

export function parseYamlMatter() {
  return (_: Node, file: VFile) => {
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
