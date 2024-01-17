'use client';

import { useTimeOffset } from '@/hooks/use-time-offset';

export function TimeOffsetIndicator() {
  const { timeZoneOffset, targetTime } = useTimeOffset();

  if (timeZoneOffset === null || targetTime === null) {
    return;
  }

  return (
    <div className="print:hidden">
      <div>Our time situation:</div>
      <time className="font-mono font-bold" dateTime={targetTime}>
        {targetTime}
      </time>
      <span> - {timeZoneOffset}</span>
    </div>
  );
}
