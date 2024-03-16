import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
export const csr = dev;
export const prerender = true;

export async function load({ params }: { params: { slug: string } }) {
  try {
    const weblog = await import(`../../../lib/weblogs/${params.slug}.md`);
    const { title, date } = weblog.metadata;
    const content = weblog.default;

    return {
      content,
      title,
      date,
    };
  } catch {
    error(404, 'Weblog not found.');
  }
}
