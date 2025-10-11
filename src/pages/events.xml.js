import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getRelativeLocaleUrl } from 'astro:i18n';
import { marked } from 'marked';
import {
    parseDDMMYYYY,
    useTranslations,
} from "../i18n/utils";
import sanitizeHTML from "sanitize-html"

export async function GET(context) {
    const events = (await getCollection("events")).sort((a, b) => {
        const yearA = parseDDMMYYYY(a.data.date.start).getTime();
        const yearB = parseDDMMYYYY(b.data.date.start).getTime();

        return yearB - yearA;
    });

    const t = useTranslations("es")

    const today = new Date()
    const upcomingEvents = events
        .filter((e) => parseDDMMYYYY(e.data.date.start) >= today)
        .reverse();

    return rss({
        title: 'Santiago Mind and Cognition - Eventos',
        description: 'Eventos de Santiago Mind and Cognition, grupo de investigación de la Universidad Alberto Hurtado en Santiago, Chile.',
        site: context.site,
        items: upcomingEvents.map(event => {
            const author = event.data.author ? `(${event.data.author})` : ""
            const title = `${t(event.data.eventType)}: ${event.data.title} ${author}`.trim()
            const [hour, minutes] = event.data.time.start.split(":")
            const date = parseDDMMYYYY(event.data.date.start)
            date.setHours(hour)
            date.setMinutes(minutes)
            const formattedDate = `${event.data.date.start}${event.data.date.end ? ` - ${event.data.date.end}` : ""}`


            const description = `${formattedDate}, ${event.data.time.start} - ${event.data.time.end}. ${event.data.place}`

            return {
                title: title,
                description: description,
                link: getRelativeLocaleUrl("es", `events/${event.id}`),
                content: sanitizeHTML(marked.parse(event.body), {
                    allowedTags: sanitizeHTML.defaults.allowedTags.concat(['img'])
                }),
                customData: `<eventdate>${date}</eventdate>`,
            }
        }),
        customData: `<language>es-CL</language>`,
    });
}