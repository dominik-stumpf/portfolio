<script lang="ts">
import '$lib/styles/globals.css';
import Footer from 'src/lib/components/Footer.svelte';
// import Navbar from "src/lib/components/Navbar.svelte";
import Separator from 'src/lib/components/Separator.svelte';
import { siteData } from 'src/site-config/site-data';
</script>

<svelte:head>
  <link rel="icon" href="/favicon.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="alternate"
    type="application/rss+xml"
    title="RSS feed"
    href="/api/feed"
  />
  <link rel="canonical" href={siteData.link} />
  <meta charset="utf-8" /><meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />
  <meta
    name="google-site-verification"
    content="VSU4j-HwrTFTdEKECQOMKDBmWSdo9nQmUZWjdbEn_Uo"
  />
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
  <title>{siteData.title}</title>
  <meta name="description" content={siteData.description} />
  <meta name="application-name" content={siteData.title} />
  <link rel="author" href={siteData.link} />
  <meta name="author" content={siteData.maintainerName} />
  <meta name="keywords" content="resume,weblogs,programming" />
  <meta name="creator" content={siteData.maintainerName} />
  <meta property="og:url" content={siteData.link} />
  <meta property="og:type" content="website" />
  <!-- <link rel="manifest" href="/manifest.webmanifest" /> -->
  <!-- <link rel="shortcut icon" href="/images/icons/icon-72x72.png" /> -->
  <!-- <link rel="apple-touch-icon" href="/images/icons/icon-128x128.png" /> -->
</svelte:head>

<div
  class="max-w-prose text-lg px-3 py-16 sm:px-4 md:px-6 lg:px-8 lg:py-24 mx-auto"
>
  <!-- <header> -->
  <!--   <Navbar /> -->
  <!-- </header> -->
  <main>
    <slot />
  </main>
  <Separator />
  <Footer />
</div>
