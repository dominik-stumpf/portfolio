import { json } from '@sveltejs/kit';
import { getMarkdownWeblogs } from './get-markdown-weblogs';

type ExtractFromPromise<T> = T extends Promise<infer U> ? U : T;
export type Weblogs = ExtractFromPromise<ReturnType<typeof getMarkdownWeblogs>>;

export const GET = async () => {
  const weblogs = await getMarkdownWeblogs();

  const sortedWeblogs = weblogs.sort((a, b) => {
    return b.metadata.publishedAt.valueOf() - a.metadata.publishedAt.valueOf();
  });

  return json(sortedWeblogs);
};
