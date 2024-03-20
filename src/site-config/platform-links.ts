// import { Codesandbox, Github, Linkedin } from 'lucide-svelte';
import { links } from './site-data';

export const platformLinks = [
  {
    href: links.linkedin,
    name: 'LinkedIn',
    // Icon: Linkedin,
  },
  {
    href: links.github,
    name: 'GitHub',
    // Icon: Github,
  },
  {
    href: links.codesandbox,
    name: 'CodeSandbox',
    // Icon: Codesandbox,
  },
  // {
  //   href: links.codewars,
  //   name: 'Codewars',
  //   Icon: X,
  // },
] as const;
