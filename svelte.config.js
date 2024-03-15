import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],

  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    }),
  ],
  kit: {
    adapter: adapter(),
    alias: {
      'src/*': 'src/*',
    },
  },
};

export default config;
