// Blog post detail. Static-generated for every (slug, locale) pair that
// has an MDX file. JSON-LD Article schema + hreflang alternates so Google
// understands the multilingual structure.

import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import {
  getPost,
  listAllPostParams,
  BLOG_LOCALES,
  type BlogLocale,
} from '@/lib/blog';

const BASE_URL = 'https://auxite.io';

// One [slug] entry per (slug, locale) pair, so Next builds each translation
// as its own static page. Adding a new MDX file → new static page next build.
export async function generateStaticParams() {
  return listAllPostParams().map(({ slug, locale }) => ({ slug, locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug, locale);
  if (!post) return { title: 'Not found' };

  const url = `${BASE_URL}/${locale}/blog/${slug}`;
  const ogImage = post.hero ? `${BASE_URL}${post.hero}` : `${BASE_URL}/api/og`;

  // Only emit hreflang for translations that actually exist — otherwise
  // Google will demote the page for "alternate URL not retrievable".
  const languages: Record<string, string> = {};
  for (const l of post.availableLocales) languages[l] = `${BASE_URL}/${l}/blog/${slug}`;
  if (post.availableLocales.includes('en' as BlogLocale)) {
    languages['x-default'] = `${BASE_URL}/en/blog/${slug}`;
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags?.join(', '),
    authors: [{ name: post.author }],
    alternates: { canonical: url, languages },
    openGraph: {
      type: 'article',
      url,
      siteName: 'Auxite',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
      creator: '@auxite',
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(slug, locale);
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: 'blog' });
  const url = `${BASE_URL}/${locale}/blog/${slug}`;
  const ogImage = post.hero ? `${BASE_URL}${post.hero}` : `${BASE_URL}/api/og`;

  // Article schema gives Google a clean signal that this is editorial
  // content with publisher + author + dates. Pairs with the existing
  // Organization schema set on the root layout.
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title,
    description: post.description,
    image: [ogImage],
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Auxite', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Auxite',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
    inLanguage: locale,
  };

  // Show language switcher when the post exists in more than one locale.
  const otherLocales = post.availableLocales.filter((l) => l !== post.locale);

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="mobile-pt" style={{ paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid-overlay"></div>
        <div className="vignette"></div>

        <article className="mobile-padding" style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb back to index */}
          <div style={{ marginBottom: '32px' }}>
            <Link
              href="/blog"
              style={{ fontSize: '13px', color: 'var(--gold-primary)', textDecoration: 'none', fontWeight: 500 }}
            >
              ← {t('backToIndex')}
            </Link>
          </div>

          {/* Header */}
          <header style={{ marginBottom: '48px' }}>
            {post.category && (
              <div style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--gold-primary)',
                marginBottom: '16px',
              }}>
                {post.category}
              </div>
            )}

            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '40px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}>
              {post.title}
            </h1>

            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '24px',
            }}>
              {post.description}
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
              fontSize: '13px',
              color: 'var(--text-tertiary)',
            }}>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span>•</span>
              <span>{post.readingMinutes} min read</span>
              <span>•</span>
              <span>{t('byAuthor', { author: post.author })}</span>
            </div>

            {otherLocales.length > 0 && (
              <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', fontSize: '12px' }}>
                <span style={{ color: 'var(--text-tertiary)' }}>{t('alsoAvailableIn')}</span>
                {otherLocales.map((l) => (
                  <Link
                    key={l}
                    href={`/blog/${slug}`}
                    locale={l}
                    style={{
                      color: 'var(--gold-primary)',
                      textDecoration: 'none',
                      padding: '4px 10px',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '999px',
                      fontWeight: 500,
                    }}
                  >
                    {l.toUpperCase()}
                  </Link>
                ))}
              </div>
            )}
          </header>

          {/* Hero image */}
          {post.hero && (
            <div style={{ marginBottom: '48px', borderRadius: '16px', overflow: 'hidden' }}>
              <img
                src={post.hero}
                alt={post.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          )}

          {/* MDX content */}
          <div className="blog-content">
            <MDXRemote source={post.body} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </div>

          {/* CTA footer */}
          <footer style={{
            marginTop: '64px',
            padding: '32px',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            background: 'var(--bg-secondary)',
            textAlign: 'center',
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
              {t('ctaTitle')}
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              {t('ctaDescription')}
            </p>
            <a
              href="https://vault.auxite.io"
              className="btn btn-gold"
              style={{ display: 'inline-block', padding: '12px 32px', fontWeight: 600 }}
            >
              {t('ctaButton')}
            </a>
          </footer>

          {post.tags && post.tags.length > 0 && (
            <div style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-tertiary)',
                    padding: '4px 12px',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '999px',
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </article>
      </section>
    </div>
  );
}
