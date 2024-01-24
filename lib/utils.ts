import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stripHrefProtocol(href: string) {
  return href
    .split(/[a-z]+:(\/\/)?/g)
    .slice(2)
    .join('');
}
