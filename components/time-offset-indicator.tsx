'use client';

import { useTimeOffset } from '@/hooks/use-time-offset';
import { cn } from '@/lib/utils';

export function TimeOffsetIndicator({ className }: { className?: string }) {
  const { timeZoneOffset, targetTime } = useTimeOffset();

  if (timeZoneOffset === null || targetTime === null) {
    return;
  }

  return (
    <p className="print:hidden">
      Our time situation:
      <div className={cn('flex flex-wrap gap-2', className)}>
        <time className="font-mono font-bold" dateTime={targetTime}>
          {targetTime}
        </time>
        <span>- {timeZoneOffset}</span>
      </div>
    </p>
  );
}
