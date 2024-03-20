<script lang="ts">
import Prose from 'src/lib/components/Prose.svelte';
import Navbar from 'src/lib/components/Navbar.svelte';

export let data;
</script>

<svelte:head>
  <title>Weblogs</title>
</svelte:head>

<header>
  <Navbar />
</header>
<Prose>
  <p>Technical articles about my thought processes when I make projects.</p>
  <div class="flex flex-col gap-6 py-4">
    {#each data.weblogs as weblog}
      <a class="border-border border p-4 rounded" href={weblog.path}
        >{weblog.metadata.title}
      </a>
    {/each}
  </div>
</Prose>
