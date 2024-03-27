<script>
import ExternalLink from 'src/lib/components/ExternalLink.svelte';
import Header from 'src/lib/components/Header.svelte';
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

<Header>
  <Navbar />
</Header>
<main>
  <Prose>
    <TypographicText>
      <h1>
        <i>Dominik Stumpf</i> --
        <span class="text-muted-foreground font-normal">Software engineer</span>
      </h1>
      <h2>Web related</h2>
      <p>
        Javascript (+Typescript) user for more than 3 years, experienced in
        writing responsive CSS and semantic HTML. I can make progressive webapps
        that support printing, is accessible and typographically correct. The
        following list is
        <strong>my web stack</strong>, common technologies and tools I use:
      </p>
      <ul>
        <li>TailwindCSS -> CSS framework</li>
        <li>React, Svelte -> Component framework</li>
        <li>NextJS 13+, Sveltekit -> App framework</li>
        <li>Jest, Storybook -> Testing framework</li>
        <li>Supabase (PostgreSQL) -> Backend as a service</li>
        <li>Zustand -> State management</li>
        <li>Postman -> API platform</li>
        <li>Figma -> UI design tool</li>
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
