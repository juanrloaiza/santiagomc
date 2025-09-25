import { ui, countries, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getPageFromUrl(url: URL) {
  const [, lang, ...page] = url.pathname.split('/');
  return page.join('/')
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useCountryTranslations(lang: keyof typeof countries) {
  return function t(key: keyof typeof countries[typeof defaultLang]) {
    return countries[lang][key] || countries[defaultLang][key];
  }
}

export function parseDDMMYYYY(dateStr: string) {
  const match = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(dateStr);
  if (!match) return new Date(3000, 1, 1);


  const [_, day, month, year] = match;
  return new Date(Number(year), Number(month) - 1, Number(day));
}