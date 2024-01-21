import { TimeOffsetIndicator } from '@/components/time-offset-indicator';
import { links, webStack } from '@/site-data';
import notebookImage from '@/public/images/notebook.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { platformLinks } from './platformLinks';

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
          <div className="mb-8 text-xl font-extralight lowercase tracking-tight lg:mb-10 lg:text-2xl">
            software engineer & talented individual
          </div>
        </header>
        <blockquote className="-mt-4 hidden print:block">
          Note: This is a printed version of my portfolio website and some of
          its content has been redacted. You can find the full version on{' '}
          <Link
            href={links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
          >
            dominikstumpf.com
          </Link>
          <br />
          This file was generated at {new Date().toUTCString()}
        </blockquote>
        <p className="lead">
          Hi! I am a self-taught computer nerd who enjoys{' '}
          <strong>making websites for the internet</strong>, creating{' '}
          <i>silly things</i>, and learning new technologies by the day.
        </p>
        <h2>Let's paint a picture</h2>
        <p>
          Driven by curiosity, I started programming as a hobbyist, learning
          Python, hacking my way through terminals, doing goofy stuff. I soon
          became hooked on the concepts I learned and the{' '}
          <strong>near endless possibilities</strong> computers deliver.
        </p>
        <p>
          As time went on this hobby along with me became more serious, and I
          gained interest in fields like game development, back-end, front-end
          and graphics programming.
        </p>
        <p>
          Nowadays, I create projects like this{' '}
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
          you are looking at. Moreover, I am all-in for open source, as such
          most of the work I do is available on my{' '}
          <Link href={links.github} target="_blank" rel="noopener noreferrer">
            Github
          </Link>{' '}
          for anyone. <i>*cheer*</i>
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
            I am familiar with React the most, however, I am open to
            alternatives like SolidJS or Svelte when it comes to it.
          </p>
        </blockquote>
        <hr />
        <h2>Beyond the web</h2>
        <p>
          When I’m not making websites though, I like to learn new tricks for my
          Linux and{' '}
          <Link href={links.nvimRepo} target="_blank" rel="noopener noreferrer">
            Neovim setup
          </Link>
          , help out elves at{' '}
          <Link href={links.aocRepo} target="_blank" rel="noopener noreferrer">
            Advent of Code
          </Link>{' '}
          and sometimes do{' '}
          <Link href={links.codewars} target="_blank" rel="noopener noreferrer">
            Codewars
          </Link>{' '}
          for good measure. I also <em>enjoy learning</em> the smart programming
          language: Rust.
        </p>
        <figure className="print:hidden">
          <Image
            src={notebookImage}
            placeholder="blur"
            alt="notebook with math and algorithms in it"
            sizes="40vw, (min-width: 768px) 768px"
          />
          <figcaption>
            Lil' pocket notebook of mine when struggling through the algorithms.
            No clue what is in there. ¯\_( ͡❛ ͜ʖ ͡❛)_/¯
          </figcaption>
        </figure>
        <figure className="print:hidden">
          <video autoPlay loop muted className="w-full" playsInline>
            <source src="/videos/aoc-visualizer-avc.mp4" type="video/mp4" />
          </video>
          <figcaption>
            Pathfinder terminal visualization I made to aid myself in an Advent
            of Code problem.
          </figcaption>
        </figure>
        <h2>Features of this portfolio:</h2>
        <p>
          Here are several bullets to give you an idea of how I can make a nice
          web experience.
        </p>
        <ul>
          <li>
            <p>
              <strong>
                <Link href="/dominik-stumpf-resume-a4.pdf" target="_blank">
                  Printable.
                </Link>
              </strong>
            </p>
            <p>
              Note how some content appear and graphic sections disappear. Hit{' '}
              <kbd>Ctrl</kbd> + <kbd>P</kbd> to try. Enable light mode before
              that if you value the ink.
            </p>
          </li>
          <li>
            <p>
              <strong>Accessible & responsive.</strong>
            </p>
            <p>
              I realize it is just text, but hey, that is a{' '}
              <strong>benefit of simplicity</strong>. I use{' '}
              <Link
                href="https://www.radix-ui.com/primitives"
                target="_blank"
                rel="noopener noreferrer"
              >
                Radix UI
              </Link>{' '}
              to ensure that interactive parts are accessible across platforms
              and to keep my sanity by avoiding writing <em>very tedious</em>{' '}
              logic.
            </p>
          </li>
          <li>
            <p>
              <strong>Lightweight & fast.</strong>
            </p>
            <p>
              No mobile killer 60 FPS noise for you! Image and video assets are{' '}
              <Link
                href={links.portfolioRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <em>properly optimized</em>
              </Link>{' '}
              for web usage.
            </p>
            <p>
              I keep my bits, and you keep your money.{' '}
              <i>*cellular data cheer*</i>
            </p>
          </li>
          <li>
            <p>
              <strong>Code quality assurance.</strong>
            </p>
            <p>
              I use{' '}
              <Link
                href="https://www.conventionalcommits.org/en/v1.0.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                conventional commits
              </Link>{' '}
              for structural history, pre-commit hooks with strict linter and a
              formatter to stay consistent.
            </p>
          </li>
          <li>
            <p>
              <strong>Fabulous UX.</strong>
            </p>
            <p>
              Legible text that is typographically correct (pleasant to read).
            </p>
          </li>
          <li>
            <p>
              <strong>SEO, LCP, FCP, PWA - I got them all.</strong>
            </p>
            <p>
              On Chrome hit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> or{' '}
              <kbd>F12</kbd> and on the Lighthouse tab click "Analyze page load"
              to see for yourself.
            </p>
          </li>
        </ul>
        <p>
          You can find additional information in more detail in the project
          repo's{' '}
          <Link
            href={links.portfolioRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>README.md</code>
          </Link>
          .
        </p>
        <h2>What I do:</h2>
        <ul>
          <li>Code for fun. Like this piece of magic.</li>

          <li>
            Continue learning <em>anything</em> that makes me excited.
          </li>
        </ul>
        <h2>What I am not willing to do:</h2>
        <ul>
          <li>
            <strong>Write unsafe or untyped JavaScript code</strong>, TypeScript
            is the way to go.
          </li>
          <li>
            Touch anything <abbr>IE</abbr> related. I don't even know what that
            is, <em>nor should you</em>.
          </li>
          <li>
            Designing a whole page all by myself. It is a limitation: I am just
            simply not cut out for it. I do components and logic.
          </li>
          <li>
            Hold you up any longer. <i>*paintbrush drop*</i>
          </li>
        </ul>
        <pre>
          <code>
            {`
 _______________________________________
/ Hope is a good breakfast, but it is a \\
| bad supper.                           |
|                                       |
\\ -- Francis Bacon                      /
 ---------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`}
          </code>
        </pre>
        <hr />
        <footer>
          <h2>Contact information</h2>
          <TimeOffsetIndicator />
          <address className="">
            <p>
              This portfolio was written by Dominik Stumpf. You can contact me
              directly through{' '}
              <Link href={links.email}>{stripHrefProtocol(links.email)}</Link>,
              or you may also find me on other platforms:
            </p>
            <ul className="not-prose flex flex-wrap gap-6">
              {platformLinks.map(({ href, Icon, name }) => (
                <li key={name}>
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
