<script>
import '$lib/styles/gruvbox-dark.css';
import '$lib/styles/gruvbox-light.css';
import Prose from '$lib/components/Prose.svelte';
import TypographicText from '$lib/components/TypographicText.svelte';
import Separator from 'src/lib/components/Separator.svelte';
export let data;
</script>

<svelte:head>
  <link
    href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
    rel="stylesheet"
  />
</svelte:head>

<Prose>
  <TypographicText>
    <h1 style:margin-bottom="0">{data.metadata.title}</h1>
    <div class="flex not-prose mt-2 mb-8 py-2 font-mono text-base font-light">
      <time>{data.metadata.date}</time>,&nbsp;
      <span>{data.readingTimeStats.text}</span>
    </div>
  </TypographicText>
  {@html data.content}
</Prose>
