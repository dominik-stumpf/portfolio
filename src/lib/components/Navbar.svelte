<script lang="ts">
import { page } from '$app/stores';
import { routes } from 'src/site-config/site-data';
import PageMargin from './PageMargin.svelte';

const navlinks = [
  { href: routes.about, name: 'about' },
  { href: routes.weblogs, name: 'weblogs' },
  { href: routes.projects, name: 'projects' },
  { href: routes.resume, name: 'résumé' },
] as const;
</script>

<div class="absolute inset-x-0 h-96 top-0 overflow-hidden -z-50" aria-hidden>
  <PageMargin class="h-full">
    <div class="font-serif max-w-prose mx-auto">
      <div
        class="font-mono text-foreground/5 capitalize text-[clamp(190px,8vw,250px)]
          font-extrabold relative -top-8 sm:top-0 w-full tracking-tight"
      >
        {navlinks.find(({ href }) => href === $page.url.pathname)?.name}
      </div>
    </div>
  </PageMargin>
</div>
<nav class="text-center grid grid-cols-2 whitespace-pre">
  {#each navlinks as navlink}
    {@const isActive = $page.url.pathname === navlink.href}
    <a
      href={navlink.href}
      data-active={isActive}
      aria-disabled={isActive}
      tabindex={isActive ? -1 : 0}
      class="data-[active=true]:opacity-60
      data-[active=true]:pointer-events-none data-[active=true]:font-extralight
      px-6 py-3 hover:border hover:-m-px rounded border-border"
    >
      <span class="text-muted-foreground">(</span>{navlink.name}<span
        class="text-muted-foreground">)</span
      >
    </a>
  {/each}
</nav>
