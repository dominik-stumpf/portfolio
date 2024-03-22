<script>
import ExternalLink from 'src/lib/components/ExternalLink.svelte';
import Navbar from 'src/lib/components/Navbar.svelte';
import Prose from 'src/lib/components/Prose.svelte';
import TypographicText from 'src/lib/components/TypographicText.svelte';
import { platformLinks } from 'src/site-config/platform-links';
import { links, siteData } from 'src/site-config/site-data';

const contactLinks = [{ name: 'Email', href: links.email }, ...platformLinks];
</script>

<svelte:head>
  <title>Resume</title>
</svelte:head>

<header>
  <Navbar />
</header>
<main>
  <Prose>
    <TypographicText>
      <h1>
        <i>Dominik Stumpf</i> --
        <span class="text-muted-foreground font-normal">Software engineer</span>
      </h1>
      <h2>Web related</h2>
      <p>
        Javascript (+Typescript) user for more than 2 years, experienced in
        writing responsive CSS and semantic, search engine indexable HTML. I can
        make progressive webapps that support printing, is accessible and
        typographically correct. The following list is
        <strong>my web stack</strong>, common technologies I have used:
      </p>
      <ul>
        <li>CSS framework: Tailwindcss</li>
        <li>Component framework: React, Svelte</li>
        <li>App framework: NextJS 13+, Sveltekit</li>
        <li>Testing framework: Jest, Storybook</li>
        <li>Backend as a service: Supabase (PostgreSQL)</li>
        <li>State management: Zustand</li>
      </ul>
      <h2>Beyond the web</h2>
      <p>
        I have experience with <i>Python</i>, networking and GNU/Linux. I'm an
        avid learner when it comes to programming. I entertain the idea of
        <em>knowing my tools</em>, consequently improving myself and my
        workspace.
      </p>
      <h2>Interests</h2>
      <p>
        Game development, computer graphics, computer science, Rust programming
        language, typography, accessibility
      </p>
      <div>
        <h2>Contact links</h2>
        <div class="flex flex-col">
          {#each contactLinks as contactLink}
            <div>
              {contactLink.name}:
              <ExternalLink href={contactLink.href}
                >{new URL(contactLink.href).hostname +
                  new URL(contactLink.href).pathname}</ExternalLink
              >
            </div>
          {/each}
        </div>
      </div>
      <p>
        <em>
          The above claims are substantiated by my contributions located on
          Github.
        </em>
      </p>
      <blockquote class="hidden print:block">
        Note: This file is a printed version of my homepage
        <ExternalLink href={siteData.link}
          >{new URL(siteData.link).host}</ExternalLink
        >, where you can find up to date additional information about me and my
        works. This file was generated at {new Date().toUTCString()}
      </blockquote>
    </TypographicText>
  </Prose>
</main>
