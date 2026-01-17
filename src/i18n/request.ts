import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { headers } from 'next/headers';

export default getRequestConfig(async ({ requestLocale }) => {
  // Önce requestLocale'i dene
  let locale = await requestLocale;
  
  // Eğer yoksa, URL'den parse et
  if (!locale) {
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || headersList.get('x-invoke-path') || '';
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && routing.locales.includes(segments[0] as any)) {
      locale = segments[0];
    }
  }

  // Hala yoksa default kullan
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
