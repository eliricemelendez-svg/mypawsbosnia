import { ui } from './ui';

export type Lang = 'en' | 'de' | 'nl';

export const defaultLang: Lang = 'en';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'de' || lang === 'nl') return lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui.en): string {
    return ui[lang][key] ?? ui.en[key] ?? key;
  };
}

export function localizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  // Avoid double-prefixing
  if (path.startsWith(`/${lang}/`) || path === `/${lang}`) return path;
  return `/${lang}${path}`;
}
