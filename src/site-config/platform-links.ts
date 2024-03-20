// import { Codesandbox, Github, Linkedin } from 'lucide-svelte';
import { links } from './site-data';

export const platformLinks = [
  {
    href: links.linkedin,
    name: 'LinkedIn',
    // Icon: Linkedin,
    username: 'in/dominik-stumpf',
  },
  {
    href: links.github,
    name: 'GitHub',
    // Icon: Github,
    username: 'dominik-stumpf',
  },
  {
    href: links.codesandbox,
    name: 'CodeSandbox',
    // Icon: Codesandbox,
    username: 'u/dominik-stumpf',
  },
  // {
  //   href: links.codewars,
  //   name: 'Codewars',
  //   Icon: X,
  //   username: 'users/sdomi',
  // },
] as const;
