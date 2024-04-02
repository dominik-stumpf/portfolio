<script lang="ts">
import { browser } from '$app/environment';
import ExternalLink from '$lib/components/ExternalLink.svelte';
import {
  OffsetState,
  determineTimeZoneOffsetState,
  getTimeZoneOffset,
} from '$lib/utils/time-zone-offset';
import { Rss } from 'lucide-svelte';
import { platformLinks } from 'src/site-config/platform-links';
import { links } from 'src/site-config/site-data';

let offset = getTimeZoneOffset();
$: offsetMeasurement = offset.offsetMeasurement;
$: time = offset.time;
$: offsetHour = Math.abs($offsetMeasurement.timeZoneOffsetHour);
$: offsetState = determineTimeZoneOffsetState(
  $offsetMeasurement.timeZoneOffsetHour,
);
$: offsetMessageMap = new Map([
  [OffsetState.SameTimeZone, 'same time zone'],
  [OffsetState.Behind, `${offsetHour}h behind`],
  [OffsetState.Ahead, `${offsetHour}h ahead`],
]);
</script>

<footer class="mt-8 flex flex-wrap flex-col gap-8 justify-between print:hidden">
  <div class="flex gap-4 flex-wrap">
    <a href={links.email}>Email</a>
    {#each platformLinks as link}
      <ExternalLink href={link.href}>{link.name}</ExternalLink>
    {/each}
    <a href="/api/feed.xml" class="flex items-center"
      >RSS
      <Rss class="inline size-4 text-muted-foreground" />
    </a>
  </div>
  {#if browser}
    <span class="font-mono font-thin text-base">
      <time dateTime={$time.toISOString()}>
        {$offsetMeasurement.targetTime},
      </time>
      <span
        title={`Time zone difference between ${offset.localTimeZone} and ${offset.targetTimeZone}`}
        >{offsetMessageMap.get(offsetState)}</span
      >
    </span>
  {/if}
</footer>
