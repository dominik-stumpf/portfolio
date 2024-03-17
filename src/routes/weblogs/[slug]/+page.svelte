<script>
import '$lib/styles/gruvbox-light.css';
import '$lib/styles/gruvbox-dark.css';
export let data;
</script>

<article class="prose dark:prose-invert lg:prose-lg prose-pre:bg-inherit">
  <h1>{data.metadata.title}</h1>
  <p>{data.metadata.date}</p>
  {@html data.content}
</article>
