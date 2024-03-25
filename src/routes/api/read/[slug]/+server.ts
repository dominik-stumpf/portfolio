import type { RequestHandler } from '@sveltejs/kit';
import { supabase } from '$lib/supabase-client';
import { accessSync, constants } from 'node:fs';
import { resolve } from 'node:path';

export const GET: RequestHandler = async ({ params: { slug: id } }) => {
  const weblogPath = resolve('static', 'weblogs-md', `${id}.md`);
  try {
    accessSync(weblogPath, constants.F_OK);
  } catch {
    console.error("File doesn't exist at path", weblogPath);
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
