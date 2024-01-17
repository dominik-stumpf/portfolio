import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function PageMargin({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8',
        className,
      )}
    >
      {children}
    </div>
  );
}
