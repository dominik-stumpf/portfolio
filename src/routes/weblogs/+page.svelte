<script lang="ts">
import Prose from '$lib/components/Prose.svelte';
import Navbar from '$lib/components/Navbar.svelte';
import { formatWeblogDate } from '$lib/utils/format-weblog-date';
import TypographicText from 'src/lib/components/TypographicText.svelte';
import { ArrowUpRight } from 'lucide-svelte';

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
          <div class="flex gap-1">
            <h3 style:margin="0">{weblog.metadata.title}</h3>
            <ArrowUpRight class="size-5 text-muted-foreground" />
          </div>
          <div class="font-mono text-sm text-muted-foreground pt-1">
            <time datetime={new Date(weblog.metadata.publishedAt).toISOString()}
              >{formatWeblogDate(weblog.metadata.publishedAt)}</time
            >
            /
            <span>{weblog.readTimeResults.text}</span>
          </div>
        </a>
      {/each}
    </div>
  </TypographicText>
</Prose>
