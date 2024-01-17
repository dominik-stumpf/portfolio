import { LenisWrapper } from '@/components/lenis-wrapper';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Work_Sans } from 'next/font/google';

const FontSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const FontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: 'variable',
});

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'portfolio',
  description: "Dominik Stumpf's personal portfoio.",
  applicationName: 'portfolio',
  manifest: '/manifest.webmanifest',
  robots: {
    follow: true,
    index: true,
  },
  icons: { icon: '/favicon.svg', apple: '/assets/icons/icon-128x128.png' },
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
      </body>
    </html>
  );
}
