import readingTime from 'reading-time';
import { retrieveFrontmatter } from 'src/lib/utils/retrieve-frontmatter';
import { weblogMetadataSchema } from 'src/lib/validators/weblog';
import { routes } from 'src/site-config/site-data';

export async function getMarkdownWeblogs() {
  const weblogFiles = import.meta.glob('/static/weblogs-md/*.md', {
    query: '?raw',
  });
  const weblogEntries = Object.entries(weblogFiles);

  const weblogs = await Promise.all(
    weblogEntries.map(async ([fullPath, resolver]) => {
      const md = await resolver();

      if (
        typeof md !== 'object' ||
        md === null ||
        !('default' in md) ||
        typeof md.default !== 'string'
      ) {
        throw new Error(`Failed to resolve markdown file at ${fullPath}`);
      }

      const frontmatter = await retrieveFrontmatter(md.default);
      const metadata = weblogMetadataSchema.parse(frontmatter);
      const end = fullPath.lastIndexOf('.');
      const start = fullPath.lastIndexOf('/', end);
      if (start === -1 || end === -1) {
        throw new Error('Failed to parse weblog routes.');
      }
      const path = `${routes.weblogs}/${fullPath.slice(start + 1, end)}`;
      return {
        metadata,
        readTimeResults: readingTime(md.default),
        path,
      };
    }),
  );

  return weblogs;
}
