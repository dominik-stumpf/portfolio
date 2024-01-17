import { Codewars } from '@/components/icons';
import { TimeOffsetIndicator } from '@/components/time-offset-indicator';
import { links, webStack } from '@/site-data';
import { Codesandbox, Copyright, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const platformLinks = [
  {
    href: 'https://github.com/dominik-stumpf',
    name: 'Github',
    Icon: Github,
    username: 'dominik-stumpf',
  },
  {
    href: 'https://linkedin.com/in/dominik-stumpf',
    name: 'LinkedIn',
    Icon: Linkedin,
    username: 'in/dominik-stumpf',
  },
  {
    href: 'https://codesandbox.io/u/dominik-stumpf',
    name: 'CodeSandbox',
    Icon: Codesandbox,
    username: 'u/dominik-stumpf',
  },
  {
    href: 'https://codewars.com/users/sdomi',
    name: 'Codewars',
    Icon: Codewars,
    username: 'users/sdomi',
  },
];

function stripHrefProtocol(href: string) {
  return href
    .split(/[a-z]+:(\/\/)?/g)
    .slice(1)
    .join('');
}

export default function LandingPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center overflow-hidden px-3 py-16 saturate-0 sm:px-4 md:px-6 lg:px-8 lg:py-24">
      <article className="prose prose-neutral w-full max-w-prose dark:prose-invert lg:prose-lg print:prose-sm prose-h1:mb-2 prose-blockquote:rounded prose-blockquote:border-border prose-code:before:content-none prose-code:after:content-none prose-pre:rounded prose-pre:border prose-pre:bg-background prose-pre:text-foreground prose-img:rounded prose-img:border prose-video:rounded prose-video:border">
        <header>
          <h1>Dominik Stumpf</h1>
          <div className="mb-8 lg:mb-10">
            Software Engineer & Talented Individual
          </div>
        </header>
        <blockquote className="-mt-4 hidden print:block">
          Note: This is a printed version of my portfolio website and some of
          it's content has been redacted. You can find it on{' '}
          <Link
            href={links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>dominikstumpf.com</code>
          </Link>
          <br />
          This file was generated at {new Date().toUTCString()}
        </blockquote>
        <p className="lead">
          Hi! I am a self-taught computer nerd who has an evergrowing interest
          in the realm of software engineering, however{' '}
          <strong>focuses on web development</strong> when it comes to working
          for others.
        </p>
        <h2>Let's paint a picture</h2>
        <p>
          I started as a hobbists, learning Python, hacking my way through
          terminals, doing goofy stuff. Later it became more serious and I
          gained interest in fields like game development, back-end, front-end
          and graphics programming.
        </p>
        <p>
          Nowadays I create side projects like this{' '}
          <Link
            href={links.postPaper}
            target="_blank"
            rel="noopener noreferrer"
          >
            posting platform prototype
          </Link>{' '}
          or the{' '}
          <Link
            href={links.portfolioRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            portfolio
          </Link>{' '}
          you are looking at
        </p>
        <h2>My web stack</h2>
        <p>
          These are the technologies I have worked with so far, they are my
          daily drivers, my toolbox:
        </p>
        <ul>
          {webStack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <blockquote>
          <p>
            I Write React code, familiarize myself with the ecosystem. Reason
            being not because I like it, but because of the industry demand. I
            do have some negative opinion about JSX, virtual DOM and how the
            framework is. That said, I am open for alternatives.
          </p>
        </blockquote>
        <h2>Beyond the web</h2>
        <figure className="print:hidden">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="notebook with algorithms in it"
            height={1920}
            width={1080}
          />
          <figcaption>
            Lil' pocket notebook of mine when struggling trough the algorithms.
          </figcaption>
        </figure>
        <p>
          When I’m not making websites though, I like to learn new tricks for my
          linux and{' '}
          <Link href={links.nvimRepo} target="_blank" rel="noopener noreferrer">
            neovim setup
          </Link>
          , help out elves at{' '}
          <Link href={links.aocRepo} target="_blank" rel="noopener noreferrer">
            advent of code
          </Link>{' '}
          and sometimes do{' '}
          <Link href={links.codewars} target="_blank" rel="noopener noreferrer">
            codewars
          </Link>{' '}
          for good measure. I also <em>enjoy learning</em> the smart programming
          language: <i>Rust</i>.
        </p>
        <figure className="print:hidden">
          <video
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
            poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
            autoPlay
            loop
            muted
            className="w-full"
          />
          <figcaption>
            Pathfinder terminal visualization I made to aid myself in an Advent
            of Code problem.
          </figcaption>
        </figure>
        <h2>Bullet of facts & motivation</h2>
        <p>
          I have collected a number of bullets for describing what I do, what I
          do not do and information about this page.
        </p>
        <h3>Features of this portfolio:</h3>

        <ul>
          <li>
            <p>
              <Link href="/dominik-stumpf-resume-a4.pdf" target="_blank">
                Printable.
              </Link>
            </p>
            <p>
              Hit <kbd>Ctrl</kbd> + <kbd>P</kbd> to try. Enable light mode
              before that if you value the ink.
            </p>
          </li>
          <li>Accessible.</li>
          <li>Responsive.</li>
          <li>Fast. Reaaally fast. - No mobile killer 60fps noise for you!</li>
          <li>
            <p>Fabulous UX.</p>
            <p>
              Legible text that is typographically correct (pleasant to read). I
              consider myself a practicioner of typography and I am fascinated
              by the visual of mere static text.
            </p>
          </li>
          <li>Lightweight - I keep my bits, and you keep your money.</li>
          <li>
            <p>SEO, LCP, FCP, PWA - I got them all.</p>
            <p>
              On Chrome hit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> or{' '}
              <kbd>F12</kbd> and run lighthouse to see for yourself.
            </p>
          </li>
        </ul>
        <p>
          Expect these from me. You can find additional information in more
          detail in the{' '}
          <Link
            href={links.portfolioRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>README.md</code>
          </Link>{' '}
          file.
        </p>
        <h3>What I do:</h3>
        <ul>
          <li>Code for fun. Like this piece of magic.</li>
          <li>
            Continue learning anything that makes me excited. <i>*wink*</i>
          </li>
        </ul>
        <h3>What I am not willing to do:</h3>
        <ul>
          <li>
            <strong>Write unsafe or untyped JavaScript code</strong>, TypeScript
            is the way to go.
          </li>
          <li>
            Touch anything{' '}
            <abbr title="Internet Explorer" className="">
              IE
            </abbr>{' '}
            related. I don't even know what that is, <em>nor should you</em>.
          </li>
          <li>
            Designing a whole page all by myself. It is a limitation: I am just
            simply not cut out for it. I do components and logic.
          </li>
          <li>
            Hold you up any longer. <i>*paintbrush drop*</i>
          </li>
        </ul>
        <hr />
        <footer>
          <h2>Contact information</h2>
          <TimeOffsetIndicator />
          <address className="">
            <p>
              This portfolio was written by{' '}
              <Copyright className="inline size-4" /> Dominik Stumpf. You can
              contact me directly through{' '}
              <Link href={links.email}>{stripHrefProtocol(links.email)}</Link>{' '}
              or you may also find me on other platforms:
            </p>
            <ul className="not-prose flex flex-wrap gap-6">
              {platformLinks.map(({ href, Icon, name }) => (
                <li>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                  >
                    <Icon />
                  </Link>
                </li>
              ))}
            </ul>
          </address>
        </footer>
      </article>
    </main>
  );
}
