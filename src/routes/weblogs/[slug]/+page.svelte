<script>
import '$lib/styles/gruvbox-dark.css';
import '$lib/styles/gruvbox-light.css';
import Prose from '$lib/components/Prose.svelte';
import TypographicText from '$lib/components/TypographicText.svelte';
import { page } from '$app/stores';

export let data;
</script>

<svelte:head>
  <link
    href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
    rel="stylesheet"
  />
  <title>{data.metadata.title}</title>
  <meta name="description" content={data.metadata.lead} />
  <meta property="og:type" content="weblog" />
  <meta property="og:url" content={$page.url.toString()} />
  <meta property="og:title" content={data.metadata.title} />
  <meta property="og:description" content={data.metadata.lead} />
  <meta name="twitter:title" content={data.metadata.title} />
  <meta name="twitter:description" content={data.metadata.lead} />
</svelte:head>

<Prose>
  <TypographicText>
    <h1 style:margin-bottom="0">{data.metadata.title}</h1>
    <div class="not-prose mt-2 mb-8 py-2 font-mono text-base font-light">
      <time datetime={data.metadata.publishedAt.toISOString()}
        >{data.metadata.publishedAt.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}</time
      >
      -
      <span>{data.readingTimeStats.text}</span>
    </div>
  </TypographicText>
  {@html data.content}
</Prose>
