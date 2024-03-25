import { json, type RequestHandler } from '@sveltejs/kit';
import { supabaseAnon } from '$lib/supabase-client';
import z from 'zod';

export const POST: RequestHandler = async ({ request }) => {
  let ids;
  try {
    ids = z
      .string()
      .array()
      .parse(await request.json());
  } catch {
    return new Response('Failed to parse request body.', {
      status: 400,
    });
  }

  const { data, error } = await supabaseAnon
    .from('weblogs')
    .select('id,views')
    .in('id', [ids]);

  if (error) {
    return new Response(error.message, {
      status: Number(error.code),
    });
  }

  return json(data);
};
