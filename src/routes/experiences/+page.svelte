<script>
import Prose from 'src/lib/components/Prose.svelte';
import Navbar from 'src/lib/components/Navbar.svelte';
import TypographicText from 'src/lib/components/TypographicText.svelte';
import { siteData } from 'src/site-config/site-data';
</script>

<svelte:head>
  <title>Experiences</title>
</svelte:head>

<header>
  <Navbar />
</header>
<Prose>
  <TypographicText>
    <h1>
      <i>Dominik Stumpf</i> --
      <span class="text-muted-foreground font-normal">Software engineer</span>
    </h1>
    <h2>Web related</h2>
    <p>
      Javascript (+Typescript) user for more than 2 years, experienced in
      writing responsive CSS and sematic HTML. I can make progressive webapps
      that support printing, is accessible and typographically correct. The
      following list is
      <strong>my web stack</strong>, common technologies I have used:
    </p>
    <ul>
      <li>CSS framework: Tailwindcss</li>
      <li>Component framework: React, Svelte</li>
      <li>App framework: NextJS 13+, Sveltekit</li>
      <li>Testing framework: Jest, Storybook</li>
      <li>
        <abbr title="Backend as a service">BaaS</abbr>: Supabase (PostgreSQL)
      </li>
    </ul>
    <p>
      Beyond the web, I have experience with <i>Python</i>, networking and
      GNU/Linux. I'm an avid learner when it comes to programming. I entertain
      the idea of
      <em>knowing my tools</em>, consequently improving myself and my workspace.
    </p>
    <h2>Interests</h2>
    <p>
      Game development, computer graphics, computer science, Rust programming
      language, typography, accessibility
    </p>
    <p>
      <em>
        Above claims are substantiated by my contributions located on Github.
      </em>
    </p>
    <blockquote>
      Note: This file is a printed version of my homepage
      <a href={siteData.link}>{new URL(siteData.link).host}</a>, where you can
      find up to date additional information about me and my works. This file
      was generated at {new Date().toUTCString()}
    </blockquote>
  </TypographicText>
</Prose>
