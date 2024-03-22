---
title: "Switching to Svelte"
publishedAt: 2024-03-22 09:33:00
lead: '"Taking the first step is hard, but it can be greatly rewarding." -- Said by a React dev'
keywords: ["web frameworks", "personal opinion", "svelte"]
---

After about two years of using react I decided to swich it down and try something else out. I feel like we already are full of takes why react is suboptimal, so I decided to spare you from that.

Instead I thought I would just share my _first impressions_ on Svelte, SvelteKit and my experience on taking this leap. Maybe you are on the other side preparing to do the same.

## First goal

My first goal with the switch was remaking my homepage (the page you are likely on) which would showcase me as a programmer and host my articles.

For this all I need a **static site generator (SSG)** because the only important content I want to serve would reside in my source code and I want all my clients to receive the same. I wrote _"important"_ because it would be also nice to have some dynamic content optionally as well later.

Svelte was proven to be effective for this job. It's minimal, provides a wide set of tools by default and as it later turns out it is easy to work with.

## The Svelte tutorial

First place I ended up was the brilliant svelte interactive tutorial that taught me the basics, I didn't go through them all, just enough so that I had a general idea how I can make things roll.

While dashing through the documents I was presented with so many amazing design choices I just couldn't stop smiling from excitement.

> What do you mean you can have a component without a function?!

```html
<h1>Hello world!</h1>
```

The first apparent thing was how close Svelte stands to vanilla JS and doesn't have large abstractions -- It looks like if I was just writing HTML. I guess benefit of not having a virtual DOM.

Svelte solves state management by having a built in state management module which is a bliss to someone who have seen the _horrors of piling up boilerplates._

Moving on, I was introduced to SvelteKit a metaframework for Svelte **by Svelte**, similar to NextJS (framework I use with react) because as I found out they inspired each other.

My reaction:

![feels good meme](/images/feels-good-meme.png)

---

## Writing Svelte for real

Okay lads. I got the basics. With full of confidence time to pull up my editor and start making a website.

It was easy to start. After setup, I got into a flow state, basically I was just writing my markup in HTML and style in the form of Tailwindcss.

Importing components and getting it to work with typescript posed some problems. The Svelte creators made a convenient VSC\*de extension providing inferred type safety between your `+page.ts` (loader) and `+page.svelte` (route endpoint), advertising ["Zero-effort type safety"](https://svelte.dev/blog/zero-config-type-safety).

It sound real great... But for someone as elevated as me who uses Neovim as a daily driver, I can't afford to touch my mouse every few seconds so I guess I will just type them out myself _duh_.

```ts
import type { ServerLoadEvent } from "@sveltejs/kit";
import type { Weblogs } from "src/routes/api/weblogs/+server";

// The loader responsible for this article right here.
export const load = async ({ url, fetch }: ServerLoadEvent) => {
  const weblogs = (await (
    await fetch(`${url.origin}/api/weblogs`)
  ).json()) as Weblogs;

  return { weblogs };
};
```

Be that as it may, my formatter, linter, treesitter, LSP didn't work as expected but that is something I signed up for when I devoted myself to be a Vim enthusiast. You know what they say -

> "Once you go Vim, you can never go back."

Back to business, as a NextJS user I found that weird that there was no equivalent to `"use client"` directive (to my best knowledge), that would mark the component to be client side rendered, instead Svelte provides three magical variables, namely `prerender`, `csr`, `ssr`. When exported they tell SvelteKit what to do, not with the component-, but with the route.

It kind of makes sense, and I think it's easier to grasp for beginners than the NextJS approach where it's harder to decide what is client or server component as they can be nested in and out.

## Final thoughts

I find that with Svelte it's much easier to use other javascript libraries, I don't need to write wrappers to manage state changes like in react every time. As a final result take a look at the network tab in devtools for this weblog. What you should see is **ZERO JAVASCRIPT** in file listing which is something I am quite proud of. Not something that can be done with React that serves it's smallest **`~143kB`** of code every time.

> React is old and maybe it's time for us to move on. `react-hooks/exhaustive-deps`? Madness.

I had a lof of fun creating this website in Svelte and writing this blog as well. And yeah even the image zoom is entirely CSS and HTML. Thanks for reading, Stranger from the internet!
