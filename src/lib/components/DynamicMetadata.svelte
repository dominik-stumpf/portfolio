<script>
import { siteData } from 'src/site-config/site-data';
</script>

<svelte:head>
  <meta name="description" content={siteData.description} />

  <meta itemprop="name" content={siteData.title} />
  <meta itemprop="description" content={siteData.description} />
  <meta itemprop="image" content={siteData.splashImageAbsolutePath} />

  <meta property="og:url" content={siteData.link} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={siteData.title} />
  <meta property="og:description" content={siteData.description} />
  <meta property="og:image" content={siteData.splashImageAbsolutePath} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={siteData.title} />
  <meta name="twitter:description" content={siteData.description} />
  <meta name="twitter:image" content={siteData.splashImageAbsolutePath} />
</svelte:head>
