import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function Paragraph({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'text-foreground-dim font-sans text-lg leading-relaxed',
        className,
      )}
    >
      {children}
    </p>
  );
}
