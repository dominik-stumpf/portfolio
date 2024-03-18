<script lang="ts">
import '$lib/styles/globals.css';
import Footer from 'src/lib/components/Footer.svelte';
import Navbar from 'src/lib/components/Navbar.svelte';
import Separator from 'src/lib/components/Separator.svelte';
</script>

<div
  class="max-w-prose text-lg px-3 py-16 sm:px-4 md:px-6 lg:px-8 lg:py-24 mx-auto"
>
  <header>
    <Navbar />
  </header>
  <main>
    <slot />
  </main>
  <Separator />
  <Footer />
</div>
