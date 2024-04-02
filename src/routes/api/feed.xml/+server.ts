import rss from 'rss';
import { getMarkdownWeblogs } from 'src/routes/api/weblogs/get-markdown-weblogs';
import { siteData } from 'src/site-config/site-data';

const { title, description, link, maintainerEmail, maintainerName } = siteData;

async function generateRssXml() {
  const weblogs = await getMarkdownWeblogs();
  const siteUrl = new URL(link);
  const maintainer = `${maintainerEmail} (${maintainerName})` as const;
  const sortedWeblogs = weblogs.sort((a, b) => {
    return b.metadata.publishedAt.valueOf() - a.metadata.publishedAt.valueOf();
  });

  const feed = new rss({
    title,
    description,
    feed_url: new URL('api/feed.xml', siteUrl).toString(),
    site_url: siteUrl.toString(),
    managingEditor: maintainer,
    webMaster: maintainer,
    copyright: `CC BY-NC-ND 4.0 ${new Date().getUTCFullYear()} ${maintainerName}`,
    language: 'en',
    categories: ['technology', 'programming'],
    pubDate: new Date(),
    ttl: 60,
  });

  for (const { metadata, readTimeResults, path, id } of sortedWeblogs) {
    feed.item({
      title: metadata.title,
      description: `${metadata.lead} - ${readTimeResults.text}`,
      url: new URL(path, siteUrl).toString(),
      guid: id,
      categories: metadata.keyphrases,
      author: maintainer,
      date: metadata.publishedAt,
    });
  }

  const xml = feed.xml();

  return xml;
}

export const GET = async () => {
  const xml = await generateRssXml();
  const body = xml;
  const headers = {
    'Cache-Control': `max-age=0, s-max-age=${600}`,
    'Content-Type': 'application/xml',
  };
  return new Response(body, {
    status: 200,
    headers,
  });
};
