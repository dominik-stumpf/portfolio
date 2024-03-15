import { json } from '@sveltejs/kit';
import { routes } from 'src/site-config/site-data';

async function fetchMarkdownWeblogs() {
  const weblogFiles = import.meta.glob('/src/lib/weblogs/*.md');
  const weblogEntries = Object.entries(weblogFiles);

  const weblogs = await Promise.all(
    weblogEntries.map(async ([fullPath, resolver]) => {
      // TODO: validate using zod.
      // @ts-ignore;
      const { metadata } = await resolver();
      const end = fullPath.lastIndexOf('.');
      const start = fullPath.lastIndexOf('/', end);
      if (start === -1 || end === -1) {
        throw new Error('Failed to parse weblog routes.');
      }
      const path = `${routes.weblogs}/${fullPath.slice(start + 1, end)}`;

      return {
        metadata,
        path,
      };
    }),
  );

  return weblogs;
}

export const GET = async () => {
  const weblogs = await fetchMarkdownWeblogs();

  const sortedWeblogs = weblogs.sort((a, b) => {
    // @ts-ignore
    return new Date(b.metadata.date) - new Date(a.metadata.date);
  });

  return json(sortedWeblogs);
};
