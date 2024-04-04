---
title: "Javascript in Markdown. Is it any good?"
publishedAt: 2024-04-04 09:15:00
lead: "Javascript is everywhere. We do this to enhance our Markdown, but is it really an enchancement?"
keyphrases: ["MDX", "trends", "discussion"]
---

![pouring Javascript out of a teapot](/images/javascript-is-everwhere.png)

I just recently rewrote my homepage in Svelte where I host my articles...

_Hi!_

...And I had to make the decision to either use an existing Markdown parser library called mdsvex or write my own setup from scratch.

> A little sidenote: at the time I already had experience with the unifiedJS ecosystem and it was well within my reach to hook in a parser.

So the real question was really;

Do I want Javascript in my Markdown or not? It's something I haven't found a debate on. So let's discuss it then.

## About Markdown

Firstly I would like to go back in time to 2004 and revisit what Markdown was meant to be and what it is today.

> "Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)."[^what-is-markdown]  
> -- John Gruber, Original creator of Markdown.

That is right. It's way easier to write Markdown than HTML. No indentation, no attributes, no cascading elements. It is the markup _anyone_ can read and write with ease. It's like TOML for JSON configs.

Since then Markdown has evolved, gained popularity among writers and programmers and it has been standardized by [CommonMark](https://spec.commonmark.org). Other extensions have been written for it, most notably [Github Flavored Markdown](https://github.github.com/gfm) (GFM), we use all the time when writing `README.md` files for our repos.

Later JSX became popular; an XML like syntax extension for Javascript. And with that around 2018[^mdxjs-first-capture] Markdown parser adaptations with JSX extension became a thing. It is popular among programmers to this day, with at the time of writing the [MDXJS](https://github.com/mdx-js/mdx) repo having ~340k dependents.

Here is a list of benefits and drawbacks of having Javascript and Markdown colocated in a file according to me:

## The benefits

- Dynamic content generation. This goes for styles as well. Allow for import and export of variables making your documents less hard coded.

- Rich interactivity by external components or by utilizing Javascript on HTML elements inside the document.

- Component reusability. The Markdown can blend in well with the rest of the design system.

## The drawbacks

- If `import` happens, the document will become something called a collaborator, a thing that requires dependencies to function. -- The Markdown file is **no longer stand-alone.**

- You need to have programming and Javascript knowledge to be able to fully understand the document. -- This is against the original philosophy of Markdown.

- Harder to determine at first glance which is "runtime code", and which is just fenced code block. = +Mental overhead.

---

By leveraging the benefits and drawbacks I have made the decision to not use Javascript in any of my Markdown...

## So why no JS?

Here is my thought process. Ready for the take? If I need dynamic content, rich interactivity, component imports **I can just do all that in plain HTML and JS.**

It works every time, and there is no ambiguity what is Markdown or Javascript.

The Markdown gets parsed down to HTML anyway. No?

I sometimes do need more control in my Markdown, like specifying attributes for for an element. I just nest HTML in markdown.\*

> \*With GFM nesting HTML is rarely needed.

Sure ambiguity comes up, but if I keep it to a minimum, it isn't a problem. If it becomes one, I just turn back to plain HTML.

Github uses HTML in Markdown, even CommonMark does. Nesting HTML is fine as long as you trust the author.

## Reinforcing my point

I really believe it's not worth it. After reading the features of [MDXJS](https://mdxjs.com) and thinking about them, I found that the disadvantages outweigh the advantages. The quotes were retrieved from their landing page.

> "Powerful: MDX blends markdown and JSX syntax to fit perfectly in JSX-based projects"

**1. Argument:**

````md
<!-- an MDX document -->

# A Markdown heading 1

Let's see how this escalates.

<div style={{backgroundColor: 'salmon', padding: '32px 16px'}}>
  Javascript in Markdown that is actually nested with HTML.
</div>

```jsx
const hashtagNoAmbiguity =
  "Javascript that is in Markdown code fence that is actually nested with HTML.";

<div
  style={{
    color: "silver",
    margin: "50dvw",
    display: "flex",
    flexDirection: "column",
  }}
>
  <div style={{ color: "blanchedalmond" }}>{hashtagNoAmbiguity}</div>
  <div>{`${hashtagNoAmbiguity} All this is in string template literals to spice things up.`}</div>
</div>;
```
````

> "Everything is a component: Use existing components in your MDX and import other MDX files as components"

**2. Argument:** Debatable advantage, since the same can be done with JSX without the problems of argument 1.

> "Customizable: Decide which component is rendered for each markdown construct `({h1: MyHeading})`"

**3. Argument:** Great advantage. If it does not touch the Markdown, nothing to argue against. This is a good abstraction to have in your project.

> "Markdown-based: The simplicity and elegance of markdown remains, you use JSX only when you want to"

**4. Argument:** When we use JSX, our Markdown will no longer remain simple. See first argument.

> "Blazingly blazing fast: MDX has no runtime, all compilation occurs during the build stage"

**5. Argument:** If we are talking about static site, the speed shouldn't really matter as it is a simple computation, only to be done once per build. Either way it's not as fast as JSX without the overhead of parsing Markdown to HTML.

Even in strong disagreement, I would like to mention I don't mean any harm or offense to the contributors of MDXJS.

## My Gains

Hundred years later when the foretold Skynet takes over the world, the people in the resistance won't have time _or npm for that matter_ to build my outdated repo, but guess what. **They still will be able to read my articles.** Isn't that cool?

## Final words

I would love to see more discussions about this topic or arguments against my points that would shift my mind and the statements in this piece of work along with it.

**My mind:** No Javascript where it doesn't belong, keep things simple, avoid the overheads and stay close to the standards!

[^what-is-markdown]: [Markdown introduction](https://daringfireball.net/projects/markdown) - Daring Fireball. [archived version](https://web.archive.org/web/20040402182332/http://daringfireball.net/projects/markdown), stated first at `2004-04-02`.
[^mdxjs-first-capture]: [archived source](https://web.archive.org/web/20181025171803/https://mdxjs.com/) of the first capture of MDXJS at `2018-10-25`.
