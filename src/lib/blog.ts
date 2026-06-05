// Blog content loader. Posts live in src/content/blog/<slug>/<locale>.mdx
// where <locale> matches the next-intl locale set ('en' | 'tr' | 'de' | 'fr'
// | 'ar' | 'ru'). One slug → up to N translations. The reader is fs-based
// at build time so posts ship as static HTML — fast, indexable, no DB.

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export const BLOG_LOCALES = ['en', 'tr', 'de', 'ar'] as const;
export type BlogLocale = (typeof BLOG_LOCALES)[number];

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  date: string; // ISO 8601, e.g. "2026-06-05"
  author: string; // author slug, e.g. "auxite-team"
  hero?: string; // path under /public, e.g. "/blog/auxite-vs-paxg.jpg"
  tags?: string[];
  category?: string;
  draft?: boolean;
}

export interface BlogPost extends BlogPostFrontmatter {
  slug: string;
  locale: BlogLocale;
  body: string; // raw MDX source
  readingMinutes: number;
  /** Other locales this post is available in. Useful for hreflang. */
  availableLocales: BlogLocale[];
}

export interface BlogPostSummary extends BlogPostFrontmatter {
  slug: string;
  locale: BlogLocale;
  readingMinutes: number;
  availableLocales: BlogLocale[];
}

const CONTENT_ROOT = path.join(process.cwd(), 'src', 'content', 'blog');

function ensureContentRoot(): void {
  if (!fs.existsSync(CONTENT_ROOT)) {
    fs.mkdirSync(CONTENT_ROOT, { recursive: true });
  }
}

function isBlogLocale(s: string): s is BlogLocale {
  return (BLOG_LOCALES as readonly string[]).includes(s);
}

/** List all slugs that have at least one published translation. */
export function listAllSlugs(): string[] {
  ensureContentRoot();
  return fs
    .readdirSync(CONTENT_ROOT, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);
}

/** Discover all (slug, locale) translation files that actually exist. */
function readPostFile(slug: string, locale: BlogLocale): { raw: string; filepath: string } | null {
  const filepath = path.join(CONTENT_ROOT, slug, `${locale}.mdx`);
  if (!fs.existsSync(filepath)) return null;
  return { raw: fs.readFileSync(filepath, 'utf8'), filepath };
}

function availableLocalesFor(slug: string): BlogLocale[] {
  ensureContentRoot();
  const dir = path.join(CONTENT_ROOT, slug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .map((f) => f.replace(/\.mdx$/, ''))
    .filter(isBlogLocale);
}

/**
 * Load one post by slug + requested locale. If the requested locale isn't
 * available we DON'T fall back silently — caller decides what to render
 * (404 vs language-switcher hint). Returns null on miss.
 */
export function getPost(slug: string, locale: string): BlogPost | null {
  if (!isBlogLocale(locale)) return null;
  const file = readPostFile(slug, locale);
  if (!file) return null;
  const parsed = matter(file.raw);
  const fm = parsed.data as BlogPostFrontmatter;
  if (fm.draft && process.env.NODE_ENV === 'production') return null;
  const stats = readingTime(parsed.content);
  return {
    ...fm,
    slug,
    locale,
    body: parsed.content,
    readingMinutes: Math.max(1, Math.round(stats.minutes)),
    availableLocales: availableLocalesFor(slug),
  };
}

/**
 * List posts available in a given locale, newest first. Drafts hidden in
 * production. Returns lightweight summaries (no MDX body) for the index page.
 */
export function listPosts(locale: string): BlogPostSummary[] {
  if (!isBlogLocale(locale)) return [];
  const summaries: BlogPostSummary[] = [];

  for (const slug of listAllSlugs()) {
    const file = readPostFile(slug, locale);
    if (!file) continue;
    const parsed = matter(file.raw);
    const fm = parsed.data as BlogPostFrontmatter;
    if (fm.draft && process.env.NODE_ENV === 'production') continue;
    const stats = readingTime(parsed.content);
    summaries.push({
      ...fm,
      slug,
      locale,
      readingMinutes: Math.max(1, Math.round(stats.minutes)),
      availableLocales: availableLocalesFor(slug),
    });
  }

  return summaries.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Every (slug, locale) pair that ships — used by generateStaticParams and
 * the sitemap. Drafts excluded in production.
 */
export function listAllPostParams(): Array<{ slug: string; locale: BlogLocale }> {
  const out: Array<{ slug: string; locale: BlogLocale }> = [];
  for (const slug of listAllSlugs()) {
    for (const locale of availableLocalesFor(slug)) {
      const file = readPostFile(slug, locale);
      if (!file) continue;
      const fm = matter(file.raw).data as BlogPostFrontmatter;
      if (fm.draft && process.env.NODE_ENV === 'production') continue;
      out.push({ slug, locale });
    }
  }
  return out;
}
