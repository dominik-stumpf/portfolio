<script lang="ts">
import ExternalLink from '$lib/components/ExternalLink.svelte';
import Navbar from 'src/lib/components/Navbar.svelte';
import Prose from 'src/lib/components/Prose.svelte';
import TypographicText from 'src/lib/components/TypographicText.svelte';
import { links, routes, siteData } from 'src/site-config/site-data';
</script>

<svelte:head>
  <title>{siteData.maintainerName}</title>
</svelte:head>

<header>
  <Navbar />
</header>
<Prose>
  <TypographicText>
    <h2>
      Fullstack web developer, publisher, typographer, video game maker and
      nearly a scientist.
    </h2>
    <p>
      Hello! I'm Dominik Stumpf, software enginner based in Hungary, I'm the
      creator of
      <ExternalLink href={links.postPaper}>PostPaper</ExternalLink>, a Rust
      <abbr title="WebAssembly">WASM</abbr>
      and Vim motion driven posting platform prototype. In my freetime I love fiddling
      around with computer graphics and <strong>game development</strong> that
      usually involves Rust and math. Besides that, not to brag or anything, but
      I use Arch Linux btw and Neovim btw. I write tech related
      <a href={routes.weblogs}>blogs here</a>.
    </p>
    <p>
      When making websites my ideology is keeping things simple and snappy. I
      always put user experience and accessibilty ahead of the aesthetics.
    </p>
    <small>
      <p>
        This page was made with Svelte, Tailwindcss, powered by the unified.js
        collective, using the <i>Vollkorn</i>,
        <i>JetBrains Mono</i>
        typefaces and <i>Lucide</i> icons. Props to them!
      </p>
    </small>
  </TypographicText>
</Prose>
