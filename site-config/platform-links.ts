import { Codewars } from '@/components/icons';
import { links } from './site-data';
import { Codesandbox, Github, Linkedin } from 'lucide-react';

export const platformLinks = [
  {
    href: links.linkedin,
    name: 'LinkedIn',
    Icon: Linkedin,
    username: 'in/dominik-stumpf',
  },
  {
    href: links.github,
    name: 'Github',
    Icon: Github,
    username: 'dominik-stumpf',
  },
  {
    href: links.codesandbox,
    name: 'CodeSandbox',
    Icon: Codesandbox,
    username: 'u/dominik-stumpf',
  },
  {
    href: links.codewars,
    name: 'Codewars',
    Icon: Codewars,
    username: 'users/sdomi',
  },
];
