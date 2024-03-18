import { targetTimeZone } from 'src/site-config/site-data';
import { readable, derived } from 'svelte/store';

const updateFrequencyMs = 1000;

// source: https://stackoverflow.com/a/74377652
function getTimeZoneOffsetHour(date: Date, timeZone: string) {
  const referenceLocale = 'en-US';
  const localizedTime = new Date(
    date.toLocaleString(referenceLocale, { timeZone }),
  );
  const utcTime = new Date(
    date.toLocaleString(referenceLocale, { timeZone: 'UTC' }),
  );
  return Math.round((localizedTime.getTime() - utcTime.getTime()) / 60000) / 60;
}

/**
 * get all necessary data for calculating difference between two time zones
 *
 * time: datetime object
 * targetTimeZone: time zone adjusted to hard-coded location
 * localTimeZone: time zone adjusted to client location
 *
 * ideal example: `5:32 (3h ahead)` where `5:32` is local (client) time and `3h` is the offset
 * calculated using local and target time zones.
 */
function getTimeZoneOffsetRequisites() {
  const time = readable(new Date(), (set) => {
    set(new Date());
    const interval = setInterval(() => {
      set(new Date());
    }, updateFrequencyMs);

    return () => clearInterval(interval);
  });
  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return { time, localTimeZone, targetTimeZone };
}

interface TimeZoneOffsetMeasurement {
  timeZoneOffsetHour: number;
  targetTime: string;
}

/**
 * measure time zone difference
 */
function measureTimeZoneOffset({
  time,
  targetTimeZone,
  localTimeZone,
}: {
  time: Date;
  targetTimeZone: string;
  localTimeZone: string;
}): TimeZoneOffsetMeasurement {
  const targetOffset = getTimeZoneOffsetHour(time, targetTimeZone);
  const localOffset = getTimeZoneOffsetHour(time, localTimeZone);
  const timeZoneOffsetHour = targetOffset - localOffset;
  const targetTime = time.toLocaleTimeString(undefined, {
    timeZone: targetTimeZone,
  });

  return { timeZoneOffsetHour, targetTime };
}

/**
 * manage offset calculation and return formattable result
 */
export function getTimeZoneOffset() {
  const { time, targetTimeZone, localTimeZone } = getTimeZoneOffsetRequisites();
  const timeZoneOffsetMeasurement = derived(time, ($time) =>
    measureTimeZoneOffset({ time: $time, targetTimeZone, localTimeZone }),
  );

  return {
    offsetMeasurement: timeZoneOffsetMeasurement,
    targetTimeZone,
    localTimeZone,
    time,
  };
}

export enum OffsetState {
  SameTimeZone = 0,
  Ahead = 1,
  Behind = 2,
}

export function determineTimeZoneOffsetState(
  timeZoneOffsetHour: number,
): OffsetState {
  if (timeZoneOffsetHour === 0) {
    return OffsetState.SameTimeZone;
  }

  return timeZoneOffsetHour < 0 ? OffsetState.Ahead : OffsetState.Behind;
}
