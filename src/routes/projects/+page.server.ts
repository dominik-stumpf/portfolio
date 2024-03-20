import { think } from 'cowsay';

export function load() {
  const wipMessage = think({
    r: true,
    w: true,
    text: 'Under construction... Check back later, pal!',
  });

  return { wipMessage };
}
