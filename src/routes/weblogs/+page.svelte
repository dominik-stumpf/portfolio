<script lang="ts">
import Navbar from '$lib/components/Navbar.svelte';
import Prose from '$lib/components/Prose.svelte';
import { formatWeblogDate } from '$lib/utils/format-weblog-date';
import ExternalLink from 'src/lib/components/ExternalLink.svelte';
import TypographicText from 'src/lib/components/TypographicText.svelte';
import { links } from 'src/site-config/site-data';

export let data;
</script>

<svelte:head>
  <title>Weblogs</title>
</svelte:head>

<header>
  <Navbar />
</header>
<Prose>
  <TypographicText>
    <p>
      Technical guides, articles about my floating thoughts while I make
      software or just sharing my experience on various technologies.
    </p>
    <div class="flex flex-col gap-6 py-4">
      {#each data.weblogs as weblog}
        <a
          class="border-border border p-4 rounded bg-card normal-case
        font-serif"
          href={weblog.path}
        >
          <h3 style:margin="0">{weblog.metadata.title}</h3>
          <p class="line-clamp-2 not-prose mt-3 text-muted-foreground">
            {weblog.metadata.lead}
          </p>
          <div class="font-mono text-sm text-muted-foreground pt-3">
            <time datetime={new Date(weblog.metadata.publishedAt).toISOString()}
              >{formatWeblogDate(weblog.metadata.publishedAt)}</time
            >
            /
            <span>{weblog.readTimeResults.text}</span>
            /
            <span class="space-x-2">
              {#each weblog.metadata.keywords?.slice(0, 2) ?? [] as keyword}
                <code class="inline-block">{keyword}</code>
              {/each}
            </span>
          </div>
        </a>
      {/each}
    </div>
    <blockquote>
      Note: All entries, assets are version controlled. To see version history,
      refer to the <ExternalLink
        href={new URL(
          `tree/main/static/weblogs-md`,
          links.portfolioRepo,
        ).toString()}>page's repository.</ExternalLink
      >
    </blockquote>
  </TypographicText>
</Prose>
