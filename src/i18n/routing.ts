import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'tr', 'de', 'fr', 'ar', 'ru'],
  defaultLocale: 'en'
});

export const rtlLocales = ['ar'];

export const localeNames: Record<string, string> = {
  en: 'English',
  tr: 'Türkçe',
  de: 'Deutsch',
  fr: 'Français',
  ar: 'العربية',
  ru: 'Русский'
};

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
