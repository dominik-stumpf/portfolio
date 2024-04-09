<script lang="ts">
import '$lib/styles/globals.css';
import Footer from 'src/lib/components/Footer.svelte';
import PageMargin from 'src/lib/components/PageMargin.svelte';
import Separator from 'src/lib/components/Separator.svelte';
import { siteData } from 'src/site-config/site-data';
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="alternate"
    type="application/rss+xml"
    title="RSS feed"
    href="/api/feed.xml"
  />
  <link rel="canonical" href={siteData.link} />
  <link rel="author" href={siteData.link} />
  <meta charset="utf-8" />
  <meta
    name="google-site-verification"
    content="VSU4j-HwrTFTdEKECQOMKDBmWSdo9nQmUZWjdbEn_Uo"
  />

  <meta name="application-name" content={siteData.title} />
  <meta name="author" content={siteData.maintainerName} />
  <meta name="creator" content={siteData.maintainerName} />

  <meta
    name="theme-color"
    media="(prefers-color-scheme: dark)"
    content="#000000"
  />
  <meta
    name="theme-color"
    media="(prefers-color-scheme: light)"
    content="#ffffff"
  />
  <meta name="color-scheme" content="dark light" />
  <link rel="manifest" href="/manifest.webmanifest" />
  <link rel="icon" type="image/x-icon" href="/images/icons/favicon.ico" />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="/images/icons/favicon-16x16.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="/images/icons/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="48x48"
    href="/images/icons/favicon-48x48.png"
  />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="theme-color" content="#fff" />
  <meta name="application-name" content="Dominik Stumpf" />
  <link
    rel="apple-touch-icon"
    sizes="57x57"
    href="/images/icons/apple-touch-icon-57x57.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="60x60"
    href="/images/icons/apple-touch-icon-60x60.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="72x72"
    href="/images/icons/apple-touch-icon-72x72.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="76x76"
    href="/images/icons/apple-touch-icon-76x76.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="114x114"
    href="/images/icons/apple-touch-icon-114x114.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="120x120"
    href="/images/icons/apple-touch-icon-120x120.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="144x144"
    href="/images/icons/apple-touch-icon-144x144.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="152x152"
    href="/images/icons/apple-touch-icon-152x152.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="167x167"
    href="/images/icons/apple-touch-icon-167x167.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/images/icons/apple-touch-icon-180x180.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="1024x1024"
    href="/images/icons/apple-touch-icon-1024x1024.png"
  />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta
    name="apple-mobile-web-app-status-bar-style"
    content="black-translucent"
  />
  <meta name="apple-mobile-web-app-title" content="Dominik Stumpf" />
</svelte:head>

<PageMargin verticalMargin>
  <div class="max-w-prose mx-auto">
    <slot />
    <Separator />
    <Footer />
  </div>
</PageMargin>
