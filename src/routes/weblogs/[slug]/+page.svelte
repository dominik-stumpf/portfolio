<script>
import '$lib/styles/gruvbox-dark.css';
import '$lib/styles/gruvbox-light.css';
export let data;
</script>

<article class="prose dark:prose-invert lg:prose-lg">
  <!-- <h1>{data.title}</h1> -->
  <!-- <p>{data.date}</p> -->
  {@html data.content}
  <!-- <svelte:component this={data.content} /> -->
  <!-- <data.content /> -->
</article>
