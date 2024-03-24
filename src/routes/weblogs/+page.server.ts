import type { ServerLoadEvent } from '@sveltejs/kit';
import type { Weblogs } from 'src/routes/api/weblogs/+server';

export async function load({ url, fetch }: ServerLoadEvent) {
  const weblogs = (await (
    await fetch(`${url.origin}/api/weblogs`)
  ).json()) as Weblogs;
  return { weblogs };
}
