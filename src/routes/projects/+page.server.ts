import { think } from 'cowsay';

export const csr = true;
export const ssr = false;
export const prerender = false;

export function load() {
  const text =
    Math.random() < 0.05
      ? "Oh. I'm not farming you or anything. ¯\\_(ツ)_/¯"
      : 'Under construction... Check back later, pal!';
  const wipMessage = think({
    r: true,
    w: true,
    text,
  });

  return { wipMessage };
}
