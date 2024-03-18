<script lang="ts">
import { page } from '$app/stores';
import { routes } from 'src/site-config/site-data';

const navlinks = [
  { href: routes.about, name: 'about' },
  { href: routes.experiences, name: 'experiences' },
  { href: routes.projects, name: 'projects' },
  { href: routes.weblogs, name: 'weblogs' },
] as const;
</script>

<nav class="mb-8 flex gap-4 font-mono">
  {#each navlinks as navlink, index}
    <a href={navlink.href} class:selected={$page.url.pathname === navlink.href}
      >{navlink.name}</a
    >
    {#if index !== navlinks.length - 1}
      <span class="select-none">.</span>
    {/if}
  {/each}
</nav>

<style>
  .selected {
    opacity: 0.6;
    pointer-events: none;
    font-weight: 200;
  }
</style>
