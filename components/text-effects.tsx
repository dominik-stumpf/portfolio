'use client';

import '@/styles/animations.css';
import type { ReactNode, MouseEvent, KeyboardEvent } from 'react';

export function WavyText({ children }: { children: string }) {
  return (
    <span>
      {[...children].map((char, i) => (
        <span
          key={i}
          className="inline-block whitespace-pre motion-safe:animate-float print:animate-none"
          style={{
            animationDelay: `${-i * 0.1}s`,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

export function FlashText({ children }: { children: ReactNode }) {
  function flash(event: MouseEvent | KeyboardEvent) {
    event.currentTarget.animate(
      {
        color: [`hsl(${Math.random() * 360}deg 90% 60%)`, 'inherit'],
        transform: ['scale(1.05)', 'scale(1)'],
      },
      {
        duration: 512,
        iterations: 1,
      },
    );
  }
  return (
    <span
      onClick={flash}
      onKeyDown={flash}
      className="inline-block whitespace-pre"
    >
      {children}
    </span>
  );
}
