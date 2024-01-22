import { LenisWrapper } from '@/components/lenis-wrapper';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Work_Sans } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const FontSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const FontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: 'variable',
});

export const metadata: Metadata = {
  title: 'Dominik Stumpf',
  description: 'Minimalist personal portfolio.',
  applicationName: 'Dominik Stumpf - Portfolio',
  icons: {
    icon: '/favicon.svg',
    apple: '/images/icons/icon-128x128.png',
    shortcut: '/images/icons/icon-72x72.png',
  },
  keywords: ['portfolio', 'resume', 'article'],
  creator: 'Dominik Stumpf',
  authors: [
    {
      name: 'Dominik Stumpf',
      url: 'https://dominikstumpf.com',
    },
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="VSU4j-HwrTFTdEKECQOMKDBmWSdo9nQmUZWjdbEn_Uo"
        />
      </head>
      <body
        className={cn([
          'min-h-full bg-background font-sans text-foreground antialiased accent-primary selection:bg-foreground selection:text-background',
          FontMono.variable,
          FontSans.variable,
        ])}
      >
        <ThemeProvider>
          <LenisWrapper>{children}</LenisWrapper>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
