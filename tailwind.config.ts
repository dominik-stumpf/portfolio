import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
// const rem = (px: number) => `${round(px / 16)}rem`;
const em = (px: number, base: number) => `${round(px / base)}em`;

const hexToRgb = (hex: string) => {
  let _hex = hex.replace('#', '');
  _hex = _hex.length === 3 ? _hex.replace(/./g, '$&$&') : _hex;
  const r = Number.parseInt(_hex.substring(0, 2), 16);
  const g = Number.parseInt(_hex.substring(2, 4), 16);
  const b = Number.parseInt(_hex.substring(4, 6), 16);
  return `${r} ${g} ${b}`;
};

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)'],
        'sans-serif': ['var(--font-sans-serif)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'dimmed-foreground': 'hsl(var(--dimmed-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      typography: (_theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              fontWeight: 'inherit',
            },
            'a:hover': {
              opacity: '0.8',
            },
            pre: {
              color: 'unset',
              backgroundColor: 'hsl(var(--card))',
              overflowX: 'auto',
              fontWeight: '400',
              border: '1px solid hsl(var(--border))',
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              fontWeight: 'inherit',
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
            },
            blockquote: {
              fontWeight: 'inherit',
              fontStyle: 'italic',
              color: 'var(--tw-prose-quotes)',
              borderLeftWidth: '0.25rem',
              borderLeftColor: 'var(--tw-prose-quote-borders)',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:last-of-type::after': {
              content: '',
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },

            code: {
              // color: 'var(--tw-prose-code)',
              color: 'hsl(var(--card-foreground))',
              fontWeight: '400',
              border: '1px solid hsl(var(--border))',
              borderBottomWidth: '2px',
              borderRadius: 'var(--radius)',
              padding: '2px 5px',
              backgroundColor: 'hsl(var(--card))',
            },
          },
        },

        xl: {
          css: [
            {
              'pre code': {
                fontSize: em(18, 20),
              },
              code: {
                fontSize: em(15, 20),
              },
            },
          ],
        },
        custom: {
          css: {
            '--tw-prose-body': colors.neutral[700],
            '--tw-prose-headings': colors.neutral[900],
            '--tw-prose-lead': colors.neutral[600],
            '--tw-prose-links': colors.neutral[900],
            '--tw-prose-bold': colors.neutral[900],
            '--tw-prose-counters': colors.neutral[500],
            '--tw-prose-bullets': colors.neutral[300],
            '--tw-prose-hr': colors.neutral[200],
            '--tw-prose-quotes': colors.neutral[900],
            '--tw-prose-quote-borders': colors.neutral[200],
            '--tw-prose-captions': colors.neutral[500],
            '--tw-prose-kbd': colors.neutral[900],
            '--tw-prose-kbd-shadows': hexToRgb(colors.neutral[900]),
            '--tw-prose-code': colors.neutral[900],
            '--tw-prose-pre-code': colors.neutral[200],
            '--tw-prose-pre-bg': colors.neutral[800],
            '--tw-prose-th-borders': colors.neutral[300],
            '--tw-prose-td-borders': colors.neutral[200],
            '--tw-prose-invert-body': colors.neutral[300],
            '--tw-prose-invert-headings': colors.white,
            '--tw-prose-invert-lead': colors.neutral[400],
            '--tw-prose-invert-links': colors.white,
            '--tw-prose-invert-bold': colors.white,
            '--tw-prose-invert-counters': colors.neutral[400],
            '--tw-prose-invert-bullets': colors.neutral[600],
            '--tw-prose-invert-hr': colors.neutral[700],
            '--tw-prose-invert-quotes': colors.neutral[100],
            '--tw-prose-invert-quote-borders': colors.neutral[700],
            '--tw-prose-invert-captions': colors.neutral[400],
            '--tw-prose-invert-kbd': colors.white,
            '--tw-prose-invert-kbd-shadows': hexToRgb(colors.white),
            '--tw-prose-invert-code': colors.white,
            '--tw-prose-invert-pre-code': colors.neutral[300],
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': colors.neutral[600],
            '--tw-prose-invert-td-borders': colors.neutral[700],
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
