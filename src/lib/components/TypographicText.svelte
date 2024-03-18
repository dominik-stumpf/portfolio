<script lang="ts">
import { onMount } from 'svelte';
import { applyTypographicBase } from '$lib/utils/apply-typographic-base';

function applyTypographyToTextNodes(node: Node) {
  if (node.nodeType === Node.TEXT_NODE && !isInPreOrCode(node.parentNode)) {
    const textNode = node as Text;

    if (typeof textNode.textContent === 'string') {
      textNode.textContent = applyTypographicBase(textNode.textContent);
    }
  } else if (node.childNodes && node.childNodes.length > 0) {
    for (let i = 0; i < node.childNodes.length; i++) {
      applyTypographyToTextNodes(node.childNodes[i]);
    }
  }
}

function isInPreOrCode(parent: Node | null): boolean {
  if (!parent) return false;
  if (parent.nodeName === 'PRE' || parent.nodeName === 'CODE') return true;
  return isInPreOrCode(parent.parentNode);
}

let wrapperRef: HTMLDivElement | null = null;

onMount(() => {
  if (wrapperRef) {
    for (let i = 0; i < wrapperRef.childNodes.length; i++) {
      applyTypographyToTextNodes(wrapperRef.childNodes[i]);
    }
  }
});
</script>

<div bind:this={wrapperRef}>
  <slot />
</div>
