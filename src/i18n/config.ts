export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية'
};

// RTL languages
export const rtlLocales: Locale[] = ['ar'];

export function isRtlLocale(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

// Locale metadata for SEO
export const localeMetadata: Record<Locale, {
  lang: string;
  dir: 'ltr' | 'rtl';
  ogLocale: string;
}> = {
  en: { lang: 'en', dir: 'ltr', ogLocale: 'en_US' },
  ar: { lang: 'ar', dir: 'rtl', ogLocale: 'ar_SA' }
};
