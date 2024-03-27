<script>
import { page } from '$app/stores';
import Prose from '$lib/components/Prose.svelte';
import '$lib/styles/gruvbox-dark.css';
import '$lib/styles/gruvbox-light.css';
import { formatWeblogDate } from '$lib/utils/format-weblog-date';
import Header from 'src/lib/components/Header.svelte';
import Separator from 'src/lib/components/Separator.svelte';
import { applyTypographicBase } from 'src/lib/utils/apply-typographic-base';
import { routes } from 'src/site-config/site-data';

export let data;
</script>

<svelte:head>
  <link
    href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
    rel="preload stylesheet"
    as="style"
  />
  <title>{data.metadata.title}</title>
  <meta name="description" content={data.metadata.lead} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={$page.url.toString()} />
  <meta property="og:title" content={data.metadata.title} />
  <meta property="og:description" content={data.metadata.lead} />
  <meta name="twitter:title" content={data.metadata.title} />
  <meta name="twitter:description" content={data.metadata.lead} />
  {#if data.metadata.keyphrases}
    <meta name="keywords" content={data.metadata.keyphrases.join(",")} />
  {/if}
  <link
    as="fetch"
    href={`/api/read/${data.id}`}
    crossorigin="anonymous"
    rel="preload"
  />
</svelte:head>

<Header>
  <nav class="flex gap-2 font-mono sm:items-center flex-col sm:flex-row">
    <a href={routes.weblogs}
      ><span class="text-muted-foreground">&lt;-</span> I&rsquo;ll be back</a
    >
  </nav>
</Header>
<Prose>
  <h1 style:margin-bottom="0" class="text-pretty hyphens-auto">
    {applyTypographicBase(data.metadata.title)}
  </h1>
  <p class="lead">{applyTypographicBase(data.metadata.lead)}</p>
  <div class="not-prose font-mono text-sm text-muted-foreground">
    <time datetime={data.metadata.publishedAt.toISOString()}
      >Published {formatWeblogDate(data.metadata.publishedAt)}</time
    >
    /
    <span>{data.readingTimeStats.text}</span>
  </div>
  <Separator />
  {@html data.content}
</Prose>

<style>
  :global(h1 a, h2 a, h3 a, h4 a, h5 a, h6 a) {
    font-family: var(--font-sans);
    text-transform: none;
    font-size: unset;
  }

  @media (prefers-color-scheme: dark) {
    :global(
        h1 a::after,
        h2 a::after,
        h3 a::after,
        h4 a::after,
        h5 a::after,
        h6 a::after
      ) {
      filter: invert(1);
    }
  }

  :global(
      h1 a:hover::after,
      h2 a:hover::after,
      h3 a:hover::after,
      h4 a:hover::after,
      h5 a:hover::after,
      h6 a:hover::after
    ) {
    visibility: visible;
  }

  :global(
      h1 a::after,
      h2 a::after,
      h3 a::after,
      h4 a::after,
      h5 a::after,
      h6 a::after
    ) {
    content: "";
    display: inline-block;
    visibility: hidden;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpbmsiPjxwYXRoIGQ9Ik0xMCAxM2E1IDUgMCAwIDAgNy41NC41NGwzLTNhNSA1IDAgMCAwLTcuMDctNy4wN2wtMS43MiAxLjcxIi8+PHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIi8+PC9zdmc+)
      no-repeat center;
    width: 24px;
    height: 24px;
    aspect-ratio: 1;
    margin-left: 8px;
  }
</style>
