<script>
import Header from 'src/lib/components/Header.svelte';
import Navbar from 'src/lib/components/Navbar.svelte';
import Prose from 'src/lib/components/Prose.svelte';
export let data;
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<Header>
  <Navbar />
</Header>
<main>
  <Prose>
    <div class="not-prose whitespace-pre font-mono overflow-auto text-sm">
      {data.wipMessage}
    </div>
  </Prose>
</main>
