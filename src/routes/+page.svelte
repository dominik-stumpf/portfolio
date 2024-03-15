<script lang="ts">
import ExternalLink from '$lib/components/ExternalLink.svelte';
import { links, routes } from 'src/site-config/site-data';
</script>

<article class="prose lg:prose-lg dark:prose-invert">
  <h1>
    I'm Dominik Stumpf, a fullstack web developer, video game maker and almost a
    scientist.
  </h1>
  <p>
    I am the creator of
    <ExternalLink href={links.postPaper}>PostPaper</ExternalLink>, a posting
    platform prototype. In my freetime I love fiddling around with
    <a href="/">computer graphics</a> and game development that usually involves
    Rust and math. Recently started writing
    <a href={routes.weblog}>blogs here</a>
    about tech. You can find most of the work I do on
    <ExternalLink href={links.github}>my GitHub</ExternalLink>. <i>*cheers*</i>
  </p>
</article>
