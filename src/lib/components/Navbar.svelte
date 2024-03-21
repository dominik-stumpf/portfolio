<script lang="ts">
import { page } from '$app/stores';
import { routes } from 'src/site-config/site-data';

const navlinks = [
  { href: routes.about, name: 'about' },
  { href: routes.weblogs, name: 'weblogs' },
  { href: routes.projects, name: 'projects' },
  { href: routes.resume, name: 'resume' },
] as const;
</script>

<nav
  class="mb-8 flex gap-2 font-mono sm:items-center flex-col sm:flex-row
  print:hidden"
>
  {#each navlinks as navlink, index}
    <a
      href={navlink.href}
      data-active={$page.url.pathname === navlink.href}
      class="data-[active=true]:opacity-60
      data-[active=true]:pointer-events-none data-[active=true]:font-extralight"
      >{navlink.name}</a
    >
    {#if index !== navlinks.length - 1}
      <span class="select-none text-muted-foreground hidden sm:block">:</span>
    {/if}
  {/each}
</nav>
