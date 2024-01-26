'use client';

import '@/styles/animations.css';
import { Slot } from '@radix-ui/react-slot';
import type { ReactNode, MouseEvent } from 'react';

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
  function flash(event: MouseEvent) {
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
    <Slot onClick={flash} className="inline-block whitespace-pre">
      {children}
    </Slot>
  );
}
