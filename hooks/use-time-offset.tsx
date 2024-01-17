import { useEffect, useState, useMemo } from 'react';
import { targetTimeZone } from '@/site-data';

const updateFrequencyMs = 1000;
// const targetTimezone = "Asia/Tokyo";

// source: https://stackoverflow.com/a/74377652
function getTimeZoneOffsetHour(date: Date, timeZone: string) {
  const localizedTime = new Date(date.toLocaleString('en-US', { timeZone }));
  const utcTime = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
  return (
    Math.round((localizedTime.getTime() - utcTime.getTime()) / (60 * 1000)) / 60
  );
}

export function useTimeOffset() {
  const [time, setTime] = useState<Date | null>(null);
  const [localTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone,
  );

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setTime(new Date());
    }, updateFrequencyMs);

    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  const targetTime = useMemo(
    () =>
      time?.toLocaleTimeString(undefined, {
        timeZone: targetTimeZone,
      }),
    [time],
  );

  const timeZoneOffset = useMemo(() => {
    if (!time) {
      return time;
    }
    const targetOffset = getTimeZoneOffsetHour(time, targetTimeZone);
    const localOffset = getTimeZoneOffsetHour(time, localTimeZone);
    const offset = targetOffset - localOffset;
    if (offset === 0) {
      return 'same time zone';
    }
    return `${Math.abs(offset)}h ${offset < 0 ? 'ahead' : 'behind'}`;
  }, [time, localTimeZone]);

  return { targetTime, timeZoneOffset };
}
