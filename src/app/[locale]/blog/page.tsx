// Blog index — lists posts available in the active locale, newest first.
// Layout style mirrors the existing whitepaper/trust-center pages so the
// blog feels native to the rest of auxite.io.

import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { listPosts, BLOG_LOCALES } from '@/lib/blog';

const BASE_URL = 'https://auxite.io';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });

  const title = `${t('indexTitle')} | Auxite`;
  const description = t('indexDescription');
  const url = `${BASE_URL}/${locale}/blog`;

  // Languages map only covers the locales the blog actually supports.
  // For unsupported site locales the canonical falls back to English so
  // Google doesn't see soft 404s.
  const languages: Record<string, string> = {};
  for (const l of BLOG_LOCALES) languages[l] = `${BASE_URL}/${l}/blog`;
  languages['x-default'] = `${BASE_URL}/en/blog`;

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: 'website',
      url,
      siteName: 'Auxite',
      title,
      description,
    },
  };
}

export default async function BlogIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  const posts = listPosts(locale);

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid-overlay"></div>
        <div className="vignette"></div>

        <div className="mobile-padding" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '24px' }}>
              <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              {t('badge')}
            </div>

            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '48px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}>
              {t('indexTitle')} <span className="text-gold-gradient">{t('indexTitleHighlight')}</span>
            </h1>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}>
              {t('indexDescription')}
            </p>
          </div>

          {posts.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '64px 24px',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              color: 'var(--text-secondary)',
            }}>
              <p style={{ fontSize: '16px', marginBottom: '8px' }}>{t('emptyTitle')}</p>
              <p style={{ fontSize: '14px' }}>{t('emptyHint')}</p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px',
            }}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: 'var(--bg-secondary)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease, border-color 0.2s ease',
                  }}
                  className="blog-card"
                >
                  {post.hero && (
                    // Plain <img> here — Next/Image needs a known width and
                    // posts ship arbitrary aspect ratios. Lazy + decoding
                    // hints keep CWV impact minimal.
                    <img
                      src={post.hero}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
                    />
                  )}
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    {post.category && (
                      <div style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--gold-primary)',
                        marginBottom: '12px',
                      }}>
                        {post.category}
                      </div>
                    )}
                    <h2 style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '22px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '12px',
                      lineHeight: 1.3,
                    }}>
                      {post.title}
                    </h2>
                    <p style={{
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '16px',
                      flex: 1,
                    }}>
                      {post.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '12px',
                      color: 'var(--text-tertiary)',
                      marginTop: 'auto',
                    }}>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                      <span>{post.readingMinutes} min read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
