// Per-locale RSS feed. Google Discover, Feedly, and crypto-news
// aggregators pick this up; one feed per language so subscribers
// only see posts they can actually read.
//
// Path: /<locale>/blog/rss.xml

import { listPosts } from '@/lib/blog';

const BASE = 'https://auxite.io';

function xmlEscape(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET(_req: Request, ctx: { params: Promise<{ locale: string }> }) {
  const { locale } = await ctx.params;
  const posts = listPosts(locale);

  const items = posts
    .map((post) => {
      const url = `${BASE}/${locale}/blog/${post.slug}`;
      return `    <item>
      <title>${xmlEscape(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${xmlEscape(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${xmlEscape(post.author)}</author>
${post.category ? `      <category>${xmlEscape(post.category)}</category>\n` : ''}    </item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Auxite Journal (${locale.toUpperCase()})</title>
    <link>${BASE}/${locale}/blog</link>
    <description>Research, market commentary, and product updates on tokenized precious metals from the Auxite team.</description>
    <language>${locale}</language>
    <atom:link href="${BASE}/${locale}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      // Cache aggressively at the edge; new posts only land at build time
      // so a 30-minute stale window is comfortable.
      'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
    },
  });
}
