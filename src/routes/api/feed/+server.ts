import type { Weblogs } from 'src/routes/api/weblogs/+server';
import { getMarkdownWeblogs } from 'src/routes/api/weblogs/get-markdown-weblogs';
import { siteData } from 'src/site-config/site-data';

const { title, description, link, maintainerEmail, maintainerName } = siteData;

function parseKeywords(keywords: string[] | undefined): string {
  if (keywords === undefined) {
    return '';
  }
  return ` Keywords: ${keywords.join(', ')}`;
}

function generateRssFeedFrom(weblogs: Weblogs) {
  const siteUrl = new URL(link);
  const maintainer = `${maintainerEmail} (${maintainerName})`;
  const sortedWeblogs = weblogs.sort((a, b) => {
    return b.metadata.publishedAt.valueOf() - a.metadata.publishedAt.valueOf();
  });

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${title}</title>
<description>${description}</description>
<link>${siteUrl.origin}</link>
<language>en</language>
<managingEditor>${maintainer}</managingEditor>
<webMaster>${maintainer}</webMaster>
<atom:link href="${new URL('api/feed', siteUrl)}" rel="self" type="application/rss+xml"/>
${sortedWeblogs
  .filter((weblog) => weblog.metadata.language.startsWith('en'))
  .slice(0, 8)
  .map((weblog) => {
    const postUrl = new URL(weblog.path, siteUrl);
    return `<item>
<guid isPermaLink="true">${postUrl}</guid>
<link>${postUrl}</link>
<author>${maintainer}</author>
<title>${weblog.metadata.title}</title>
<description>${weblog.metadata.lead} ${
      weblog.readTimeResults.text
    }.${parseKeywords(weblog.metadata.keywords)}</description>
<pubDate>${weblog.metadata.publishedAt.toUTCString()}</pubDate>
</item>`;
  })
  .join('')}
</channel>
</rss>
`;
}

export const GET = async () => {
  const weblogs = await getMarkdownWeblogs();
  const body = generateRssFeedFrom(weblogs);
  const headers = {
    'Cache-Control': `max-age=0, s-max-age=${3600}`,
    'Content-Type': 'application/xml',
  };

  return new Response(body, {
    status: 200,
    headers,
  });
};
