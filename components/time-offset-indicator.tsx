'use client';

import { useTimeOffset } from '@/hooks/use-time-offset';
import { cn } from '@/lib/utils';

export function TimeOffsetIndicator({ className }: { className?: string }) {
  const { timeZoneOffset, targetTime } = useTimeOffset();

  if (timeZoneOffset === null || targetTime === null) {
    return;
  }

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      <span className="font-mono font-bold">{targetTime}</span>
      <span>- {timeZoneOffset}</span>
    </div>
  );
}
