// @ts-ignore
export const load = async ({ url, fetch }) => {
  const weblogs = await (await fetch(`${url.origin}/api/weblogs`)).json();
  return { weblogs };
};
