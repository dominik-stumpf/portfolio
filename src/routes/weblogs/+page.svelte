<script lang="ts">
import Navbar from '$lib/components/Navbar.svelte';
import Prose from '$lib/components/Prose.svelte';
import { formatToCompactNumber } from '$lib/utils/format-to-compact-number';
import { formatWeblogDate } from '$lib/utils/format-weblog-date';
import { MousePointerClick } from 'lucide-svelte';
import ExternalLink from 'src/lib/components/ExternalLink.svelte';
import Header from 'src/lib/components/Header.svelte';
import TypographicText from 'src/lib/components/TypographicText.svelte';
import { links } from 'src/site-config/site-data';
import { onMount } from 'svelte';

type Views = { id: string; views: number };
export let data;
let views: undefined | Views[];
$: validIds = data.weblogs.map(({ id }) => id);

async function fetchViews() {
  const payload = Object.entries(data.weblogs).map(([_, value]) => value.id);

  const response = await fetch('/api/views', {
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  views = (await response.json()) as Views[];
  views = views.filter(({ id }) => validIds.includes(id));
}

onMount(() => {
  fetchViews();
});
</script>

<svelte:head>
  <title>Weblogs</title>
</svelte:head>

<Header>
  <Navbar />
</Header>
<Prose>
  <TypographicText>
    <p>
      Technical guides, articles about my floating thoughts while I make
      software or just sharing my experience on various technologies.
    </p>
    <main class="flex flex-col gap-6 py-4">
      {#each data.weblogs as weblog}
        <a href={weblog.path}>
          <section
            class="border-border border p-6 rounded bg-card normal-case
        font-serif"
          >
            <h3 style:margin="0">{weblog.metadata.title}</h3>
            <p class="line-clamp-2 not-prose mt-3 text-dimmed-foreground">
              {weblog.metadata.lead}
            </p>
            <div
              class="font-mono text-xs text-muted-foreground mt-3 flex
              flex-wrap items-center gap-2"
            >
              <time
                datetime={new Date(weblog.metadata.publishedAt).toISOString()}
                >{formatWeblogDate(weblog.metadata.publishedAt)}</time
              >
              /
              <span>{weblog.readTimeResults.text}</span>
              {#if weblog.metadata.keyphrases}
                ::
                {#each weblog.metadata.keyphrases.slice(0, 2) ?? [] as keyword}
                  <code>{keyword}</code>
                {/each}
              {/if}
              {#if views !== undefined}
                ::
                <span
                  class="inline-flex items-center gap-1"
                  title={`${views.find(({ id }) => id === weblog.id)?.views} Unique views`}
                >
                  <MousePointerClick class="size-4 text-dimmed-foreground" />
                  {formatToCompactNumber(
                    // @ts-expect-error ids are validated already
                    views.find(({ id }) => id === weblog.id).views,
                  )}</span
                >
              {/if}
            </div>
          </section>
        </a>
      {/each}
    </main>
    <blockquote>
      Note: All entries, assets are version controlled. To see version history,
      refer to the <ExternalLink
        href={new URL(
          `portfolio/tree/main/static/weblogs-md`,
          links.portfolioRepo,
        ).toString()}>page's repository.</ExternalLink
      >
    </blockquote>
  </TypographicText>
</Prose>
