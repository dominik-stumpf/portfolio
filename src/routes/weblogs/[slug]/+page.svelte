<script>
import '$lib/styles/gruvbox-dark.css';
import '$lib/styles/gruvbox-light.css';
import { applyTypographicBase } from '$lib/utils/apply-typographic-base';
import Prose from 'src/lib/components/Prose.svelte';
export let data;
</script>

<svelte:head>
  <link
    href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
    rel="stylesheet"
  />
</svelte:head>

<Prose>
  <h1>{applyTypographicBase(data.metadata.title)}</h1>
  <p>{data.metadata.date}</p>
  {@html data.content}
</Prose>
