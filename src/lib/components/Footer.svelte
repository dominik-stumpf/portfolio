<script lang="ts">
import ExternalLink from '$lib/components/ExternalLink.svelte';
import { platformLinks } from 'src/site-config/platform-links';
import { links } from 'src/site-config/site-data';
</script>

<footer class="mt-8 flex justify-between">
  <div class="flex gap-4">
    {#each platformLinks as link}
      <ExternalLink href={link.href}>{link.name}</ExternalLink>
    {/each}
    <a href={links.email}>Email</a>
  </div>
</footer>
