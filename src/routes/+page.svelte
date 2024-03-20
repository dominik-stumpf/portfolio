<script lang="ts">
import ExternalLink from '$lib/components/ExternalLink.svelte';
import Prose from 'src/lib/components/Prose.svelte';
import TypographicText from 'src/lib/components/TypographicText.svelte';
import { links, routes, siteData } from 'src/site-config/site-data';
import Navbar from 'src/lib/components/Navbar.svelte';
</script>

<svelte:head>
  <title>{siteData.maintainerName}</title>
</svelte:head>

<header>
  <Navbar />
</header>
<Prose>
  <TypographicText>
    <p>
      Hello! I'm Dominik Stumpf, a fullstack web developer, video game maker and
      almost a scientist.
    </p>
    <p>
      I am the creator of
      <ExternalLink href={links.postPaper}>PostPaper</ExternalLink>, a posting
      platform prototype. In my freetime I love fiddling around with
      <a href="/">computer graphics</a> and game development that usually
      involves Rust and math. Recently started writing tech related
      <a href={routes.weblogs}>blogs here</a>.
    </p>
  </TypographicText>
</Prose>
