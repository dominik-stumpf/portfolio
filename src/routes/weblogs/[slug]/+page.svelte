<script>
import '$lib/styles/gruvbox-light.css';
import '$lib/styles/gruvbox-dark.css';
export let data;
</script>

<svelte:head>
  <link
    href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
    rel="stylesheet"
  />
</svelte:head>

<article
  class="prose w-full max-w-prose break-words dark:prose-invert lg:prose-lg prose-pre:p-0 prose-table:block prose-table:overflow-auto"
>
  <h1>{data.metadata.title}</h1>
  <p>{data.metadata.date}</p>
  {@html data.content}
</article>
