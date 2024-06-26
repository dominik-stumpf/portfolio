export const siteData = {
  title: 'Dominik Stumpf',
  maintainerName: 'Dominik Stumpf',
  maintainerEmail: 's.dominik.work@gmail.com',
  description:
    'Fullstack web developer, publisher, typographer, video game maker and nearly a scientist.',
  link: 'https://dominikstumpf.com',
  splashImageAbsolutePath:
    'https://dominikstumpf.com/images/homepage-splash.png',
} as const;

export const targetTimeZone = 'Europe/Budapest';

export const routes = {
  about: '/',
  weblogs: '/weblogs',
  resume: '/resume',
  projects: '/projects',
} as const satisfies Record<string, string>;

export const links = {
  github: 'https://github.com/dominik-stumpf',
  nvimRepo: 'https://github.com/dominik-stumpf/nvim',
  aocRepo: 'https://github.com/dominik-stumpf/advent-of-code',
  portfolioRepo: 'https://github.com/dominik-stumpf/portfolio',
  portfolio: siteData.link,
  linkedin: 'https://linkedin.com/in/dominik-stumpf',
  codesandbox: 'https://codesandbox.io/u/dominik-stumpf',
  codewars: 'https://codewars.com/users/sdomi',
  postPaper: 'https://post-paper.vercel.app',
  codepen: 'https://codepen.io/dominik-stumpf',
  email: `mailto:${siteData.maintainerEmail}`,
} as const;
