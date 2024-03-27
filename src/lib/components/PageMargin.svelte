<script lang="ts">
import { resolveClass } from '$lib/utils/resolve-class';
let className = '';
export { className as class };
export let verticalMargin = false;
</script>

<div
  class={resolveClass(
    "mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8",
    verticalMargin && "py-8 lg:py-16",
    className,
  )}
>
  <slot />
</div>
