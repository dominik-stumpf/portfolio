<script lang="ts">
import ExternalLink from '$lib/components/ExternalLink.svelte';
import Prose from 'src/lib/components/Prose.svelte';
import { links, routes } from 'src/site-config/site-data';
</script>

<Prose>
  <h1>Introduction</h1>
  <p class="lead">
    Hello! I'm Dominik Stumpf, a fullstack web developer, video game maker and
    almost a scientist.
  </p>
  <p>
    I am the creator of
    <ExternalLink href={links.postPaper}>PostPaper</ExternalLink>, a posting
    platform prototype. In my freetime I love fiddling around with
    <a href="/">computer graphics</a> and game development that usually involves
    Rust and math. Recently started writing tech related
    <a href={routes.weblogs}>blogs here</a>.
  </p>
</Prose>

