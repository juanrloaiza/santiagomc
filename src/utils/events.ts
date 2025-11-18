import { getCollection } from "astro:content";
import { parseDDMMYYYY, sortByYear } from "../i18n/utils";


export async function getUpcomingEvents() {
    const events = (await getCollection("events")).sort(sortByYear);

    const today = new Date();

    return events
        .filter((e) => parseDDMMYYYY(e.data.dates.slice(-1)[0].date) >= today)
        .reverse();
}