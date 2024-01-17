import { Codewars } from '@/components/icons';
import { TimeOffsetIndicator } from '@/components/time-offset-indicator';
import { links, webStack } from '@/site-data';
import { Codesandbox, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const platformLinks = [
  {
    href: 'mailto:s.dominik.work@gmail.com',
    name: 'Email',
    Icon: Mail,
    username: 's.dominik.work@gmail.com',
  },
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
          Note: This is a printed version of my portfolio you can find on{' '}
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
          These are the technologies I have worked with so far, have experience
          with:
        </p>
        <ul>
          {webStack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

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
          for good measure. I also enjoy{' '}
          <em>learning the smart programming language: Rust.</em>
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
        <hr />
        <footer>
          <h2>Contact information</h2>
          <p>
            Our timezone situation: <TimeOffsetIndicator />
          </p>
          <address className="">
            <p>Written by Dominik Stumpf, you can contact me through:</p>
            <ul className="not-prose space-y-4">
              {platformLinks.map(({ name, href, username, Icon }) => (
                <li>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground underline"
                  >
                    <Icon className="size-5" />
                    <span>{username}</span>
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
// <div className="grid sm:grid-cols-2 gap-4">
// 	{platformLinks.map(({ name, href, username, Icon }) => (
// 		<li key={name}>
// 			<Link
// 				key={name}
// 				href={href}
// 				target="_blank"
// 				rel="noopener noreferrer"
// 				className="flex flex-wrap items-center gap-4 overflow-hidden rounded border p-4 px-8 bg-background"
// 			>
// 				<Icon className="dark:stroke-white stroke-black" />
// 				<div className="flex min-w-0 flex-col whitespace-nowrap leading-snug">
// 					<div className="font-bold">{username}</div>
// 					<div className="text-muted-foreground">{name}</div>
// 				</div>
// 			</Link>
// 		</li>
// 	))}
// </div>
