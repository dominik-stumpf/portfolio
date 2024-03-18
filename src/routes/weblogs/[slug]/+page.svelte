<script>
import '$lib/styles/gruvbox-light.css';
import '$lib/styles/gruvbox-dark.css';
import { applyTypographicBase } from '$lib/utils/apply-typographic-base';
export let data;
</script>

<svelte:head>
  <link
    href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
    rel="stylesheet"
  />
</svelte:head>

<article
  class="prose w-full break-words dark:prose-invert lg:prose-xl
  prose-pre:p-0 prose-table:block prose-table:overflow-auto prose-a:no-underline
  prose-a:font-bold lg:prose-pre:text-base"
>
  <h1>{applyTypographicBase(data.metadata.title)}</h1>
  <p>{data.metadata.date}</p>
  {@html data.content}
</article>

