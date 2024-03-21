---
title: "How to avoid page load CLS caused by unloaded font"
publishedAt: 2024-03-21 07:25:00
lead: "Even the smallest but noticeable Cumulative Layout Shift (CLS) can distract the user and cause bad experience. For that I have prepared a solution."
---

Remember that small **or large** flicker that can happen on some sites when fonts are not yet cached and the system font is used?

<figure>
  <video src="/videos/cls-without-preload-no-throttle.mp4" autoplay loop muted playsinline controls></video>
  <figcaption>
    Large flickering on first page load
  </figcaption>
</figure>

_yikes_

I do remember and if you are the perfectionist like me, then you know we must do something about that.

---

## The solution

What you ideally want to achieve is to initiate your font request before your css, which can be just a single line inside your `<head>` tag in the html.

```html
<link
  rel="preload"
  href="important-font.woff2"
  as="font"
  crossorigin=""
  type="font/woff2"
/>
```

This tells the browser that you prioritize this font, and after this just create your `@font-face` declaration like you normally would in your css:

```css
@font-face {
  font-family: "important font";
  font-display: swap; /* use swap always */
  font-style: normal;
  font-weight: 400 900;
  src: url(important-font.woff2) format("woff2-variations");
}
```

After this you should be good to go.

> Good to know: This delays your css and as a result your First Contentful Paint (FCP) by a negligible amount. Your layout shifts won't actually disappear, but should become unnoticeable under normal conditions, which is our goal here.

## Edge case

<figure>
  <video src="/videos/cls-with-preload-throttled.mp4" muted playsinline controls></video>
<figcaption>
Network conditions can in fact still cause the shift.
</figcaption>
</figure>

Shift occurs and the only way to fix this is to stall our page by font file load. We definitely **don't** want that (browsers know this of course), just start to load them a bit earlier like this.

<figure>
  <img src="/images/cls-waterfall-with-preload.png" alt="devtools waterfall with preload"/>
<figcaption>
Resource load with preload
</figcaption>
</figure>

<figure>
  <img src="/images/cls-waterfall-without-preload.png" alt="devtools waterfall without preload"/>
<figcaption>
Resource load without preload, note the difference in delay
</figcaption>
</figure>

As there is nothing we can do about slower networks, we are forced to let this case pass...

## General tips

- Use `.woff2` format, better compression.
- Prefer variable fonts as they are smaller in size.
- Obvious, but only download fonts you really use. Generally you don't need more than one.
- **Don't overdo your preload requests.** Use for only fonts that cause the shift. Remember the more request you have, the more time it takes to process those.
- If you are using Google Fonts, there is a good alternative called [fontsource](https://fontsource.org). Much clearer UI with better namings for font files, CDN and fonts bundled as packages.
- Careful when relying on external font dependency resolutions. You don't know what they are placing in your css until you look at them. Meaning they can just clutter you with unnecessary `@font-face` declarations anytime.

## Personal case

The flicker was exceptionally large, since I used the relative length `ch` as my page max width boundary which yields really diverse widths depending on the typefaces used.

I just switched from NextJS to SvelteKit, that automatically had done this preload for me as it has a built-in abstraction layer for fonts. This website is written in Svelte and applies this solution you can [check here](https://github.com/dominik-stumpf/portfolio). _This solution works regardless of framework._
