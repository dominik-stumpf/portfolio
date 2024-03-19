<script>
import '$lib/styles/gruvbox-dark.css';
import '$lib/styles/gruvbox-light.css';
import { applyTypographicBase } from '$lib/utils/apply-typographic-base';
import Prose from 'src/lib/components/Prose.svelte';
export let data;
</script>

<svelte:head>
  <link
    href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
    rel="stylesheet"
  />
</svelte:head>

<Prose>
  <h1>{applyTypographicBase(data.metadata.title)}</h1>
  <p>{data.metadata.date}</p>
  {@html data.content}
</Prose>

<style>
  :global(.icon-link)::after {
    position: relative;
    content: "#";
    color: violet;
  }
  :global(h1 a, h2 a, h3 a, h4 a, h5 a, h6 a) {
    font-family: var(--font-sans);
    text-transform: none;
    font-size: unset;
  }

  @media (prefers-color-scheme: dark) {
    :global(
        h1 a::after,
        h2 a::after,
        h3 a::after,
        h4 a::after,
        h5 a::after,
        h6 a::after
      ) {
      filter: invert(1);
    }
  }

  :global(
      h1 a:hover::after,
      h2 a:hover::after,
      h3 a:hover::after,
      h4 a:hover::after,
      h5 a:hover::after,
      h6 a:hover::after
    ) {
    visibility: visible;
  }

  :global(
      h1 a::after,
      h2 a::after,
      h3 a::after,
      h4 a::after,
      h5 a::after,
      h6 a::after
    ) {
    content: "";
    display: inline-block;
    visibility: hidden;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpbmsiPjxwYXRoIGQ9Ik0xMCAxM2E1IDUgMCAwIDAgNy41NC41NGwzLTNhNSA1IDAgMCAwLTcuMDctNy4wN2wtMS43MiAxLjcxIi8+PHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIi8+PC9zdmc+)
      no-repeat center;
    width: 24px;
    height: 24px;
    aspect-ratio: 1;
    margin-left: 8px;
  }
</style>
