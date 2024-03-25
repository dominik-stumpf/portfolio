import { supabase } from '$lib/supabase-client';
import type { RequestHandler } from '@sveltejs/kit';
import { extractIdFromMdPath } from 'src/routes/api/weblogs/get-markdown-weblogs';

const weblogFiles = import.meta.glob('/static/weblogs-md/*.md', {
  query: '?raw',
});

const weblogIds = Object.entries(weblogFiles).map(([path]) =>
  extractIdFromMdPath(path),
);

export const GET: RequestHandler = async ({ params: { slug: id } }) => {
  if (id === undefined) {
    return new Response(undefined, {
      status: 400,
    });
  }

  if (!weblogIds.includes(id)) {
    console.error("File doesn't exist with id", id);
    return new Response(undefined, {
      status: 400,
    });
  }

  const { error: upsertError } = await supabase
    .from('weblogs')
    .upsert([{ id }]);

  const { error: incrementError } = await supabase.rpc('increment', {
    row_id: id,
  });

  if (upsertError) {
    console.error(upsertError);
  }
  if (incrementError) {
    console.error(incrementError);
  }

  return new Response(undefined, {
    status: 200,
  });
};
