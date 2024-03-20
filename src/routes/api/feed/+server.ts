import { fetchMarkdownWeblogs, type Weblogs } from '../weblogs/+server';
import { siteData } from 'src/site-config/site-data';

const { title, description, link, maintainerEmail, maintainerName } = siteData;

function generateRssFeedFrom(weblogs: Weblogs) {
  const siteUrl = new URL(link);
  const maintainer = `${maintainerEmail} (${maintainerName})`;

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
${weblogs
  .filter((weblog) => weblog.metadata.language.startsWith('en'))
  .map((weblog) => {
    const postUrl = new URL(weblog.path, siteUrl);
    return `<item>
<guid isPermaLink="true">${postUrl}</guid>
<link>${postUrl}</link>
<author>${maintainer}</author>
<title>${weblog.metadata.title}</title>
<description>${weblog.metadata.lead}</description>
<pubDate>${weblog.metadata.publishedAt.toUTCString()}</pubDate>
</item>`;
  })
  .join('')}
</channel>
</rss>
`;
}

export const GET = async () => {
  const weblogs = await fetchMarkdownWeblogs();
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