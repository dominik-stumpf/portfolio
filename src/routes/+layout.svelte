<script lang="ts">
import ExternalLink from '$lib/components/ExternalLink.svelte';
import '$lib/styles/globals.css';
import Separator from 'src/lib/components/Separator.svelte';
import { platformLinks } from 'src/site-config/platform-links';
import { links } from 'src/site-config/site-data';
</script>

<div class="max-w-prose px-3 py-16 sm:px-4 md:px-6 lg:px-8 lg:py-24 mx-auto">
  <nav class="mb-8 flex gap-4">
    <a href="/">about</a>
    <a href="/experiences">experiences</a>
    <a href="/projects">projects</a>
    <a href="/weblog">weblog</a>
  </nav>
  <main>
    <slot />
  </main>
  <Separator />
  <footer class="mt-8 flex justify-between">
    <div class="flex gap-4">
      {#each platformLinks as link}
        <ExternalLink href={link.href}>{link.name}</ExternalLink>
      {/each}
      <a href={links.email}>Email</a>
    </div>
    <i>Dominik Stumpf</i>
  </footer>
</div>
