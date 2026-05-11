import type { CollectionKey } from "astro:content";
import { getCollection } from "astro:content";
import { ui, countries, defaultLang, languages } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getPageFromUrl(url: URL) {
  const [, lang, ...page] = url.pathname.split("/");
  return page.join("/");
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useCountryTranslations(lang: keyof typeof countries) {
  return function t(key: keyof (typeof countries)[typeof defaultLang]) {
    return countries[lang][key] || countries[defaultLang][key];
  };
}

export function parseDDMMYYYY(dateStr: string) {
  const match = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(dateStr);
  if (!match) return new Date(3000, 1, 1);

  const [_, day, month, year] = match;
  return new Date(Number(year), Number(month) - 1, Number(day));
}

export interface EventDate {
  date: string;
  time?: {
    start: string;
    end: string;
  };
}
interface EventObject {
  data: {
    dates: Array<EventDate>;
  };
}

export function sortByYear(a: EventObject, b: EventObject) {
  const yearA = parseDDMMYYYY(a.data.dates[0].date).getTime();
  const yearB = parseDDMMYYYY(b.data.dates[0].date).getTime();

  return yearB - yearA;
}

export function sortByDate(a: { date: string }, b: { date: string }) {
  return parseDDMMYYYY(b.date).getTime() - parseDDMMYYYY(a.date).getTime();
}

interface PublicationObject {
  data: { year: string | number; title?: string };
}

export function sortPublicationsWithForthcoming(
  a: PublicationObject,
  b: PublicationObject,
) {
  const yearA = typeof a.data.year === "string" ? 9999 : a.data.year;
  const yearB = typeof b.data.year === "string" ? 9999 : b.data.year;
  if (yearA !== yearB) return yearB - yearA;
  return (a.data.title ?? "").localeCompare(b.data.title ?? "");
}

export async function getCollectionStaticPaths<T extends CollectionKey>(
  collectionName: T,
) {
  const items = await getCollection(collectionName);
  return Object.keys(languages).flatMap((lang) =>
    items.map((item) => ({ params: { lang, id: item.id }, props: item })),
  );
}
