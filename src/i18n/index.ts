export const languages = { en: 'English', hr: 'Hrvatski' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** A value that exists in every site language. */
export type Localized<T = string> = Record<Lang, T>;

/** Pick the value for the current language. */
export function l<T>(value: Localized<T>, lang: Lang): T {
  return value[lang];
}

/** Root URL of a language version ("/" for English, "/hr/" for Croatian). */
export function homePath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in languages ? (first as Lang) : defaultLang;
}
