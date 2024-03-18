<script lang="ts">
import ExternalLink from '$lib/components/ExternalLink.svelte';
import { platformLinks } from 'src/site-config/platform-links';
import { links } from 'src/site-config/site-data';
import {
  getTimeZoneOffset,
  determineTimeZoneOffsetState,
  OffsetState,
} from '$lib/utils/time-zone-offset';

let offset = getTimeZoneOffset();
$: offsetMeasurement = offset.offsetMeasurement;
$: time = offset.time;
$: offsetHour = Math.abs($offsetMeasurement.timeZoneOffsetHour);
$: offsetState = determineTimeZoneOffsetState(
  $offsetMeasurement.timeZoneOffsetHour,
);
$: offsetMessageMap = new Map([
  [OffsetState.SameTimeZone, 'in same time zone'],
  [OffsetState.Behind, `${offsetHour}h behind`],
  [OffsetState.Ahead, `${offsetHour}h ahead`],
]);
</script>

<footer class="mt-8 flex flex-wrap flex-col gap-2 justify-between">
  <div class="flex gap-4">
    {#each platformLinks as link}
      <ExternalLink href={link.href}>{link.name}</ExternalLink>
    {/each}
    <a href={links.email}>Email</a>
  </div>
  <span class="space-x-1">
    <time
      class="font-mono font-thin text-base"
      dateTime={$time.toISOString()}
      title="Local time"
    >
      {$offsetMeasurement.targetTime},
    </time>
    <span
      title={`Time zone difference between ${offset.targetTimeZone} and
${offset.localTimeZone}`}>{offsetMessageMap.get(offsetState)}</span
    >
  </span>
</footer>
