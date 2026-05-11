import { getCollection } from "astro:content";
import { parseDDMMYYYY, sortByYear } from "../i18n/utils";

function getYesterday() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday;
}

export async function getUpcomingEvents() {
  const events = (await getCollection("events")).sort(sortByYear);
  const yesterday = getYesterday();
  return events
    .filter((e) => parseDDMMYYYY(e.data.dates.slice(-1)[0].date) >= yesterday)
    .reverse();
}

export async function getPreviousEvents() {
  const events = (await getCollection("events")).sort(sortByYear);
  const yesterday = getYesterday();
  return events.filter(
    (e) => parseDDMMYYYY(e.data.dates.slice(-1)[0].date) < yesterday,
  );
}
