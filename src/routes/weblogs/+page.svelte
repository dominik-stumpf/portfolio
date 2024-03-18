<script lang="ts">
import Prose from 'src/lib/components/Prose.svelte';

export let data: { weblogs: object[] };
</script>

<Prose>
  <h1>Publishing</h1>
  <p class="lead">
    Technical articles about my thought processes when I make projects.
  </p>
  <div class="flex flex-col gap-6 py-4">
    {#each data.weblogs as weblog}
      <a class="border-border border-b-2" href={weblog.path}
        >{weblog.metadata.title}
      </a>
    {/each}
  </div>
</Prose>
