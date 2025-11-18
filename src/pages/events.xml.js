import rss from '@astrojs/rss';
import { getRelativeLocaleUrl } from 'astro:i18n';
import { marked } from 'marked';
import {
    useTranslations,
} from "../i18n/utils";
import sanitizeHTML from "sanitize-html"
import { getUpcomingEvents } from "../utils/events";


export async function GET(context) {
    const t = useTranslations("es")
    const upcomingEvents = await getUpcomingEvents()
    console.log(upcomingEvents)


    return rss({
        title: 'Santiago Mind and Cognition - Eventos',
        description: 'Eventos de Santiago Mind and Cognition, grupo de investigación de la Universidad Alberto Hurtado en Santiago, Chile.',
        site: context.site,
        items: upcomingEvents.map(event => {
            const author = event.data.author ? `(${event.data.author})` : ""
            const title = `${t(event.data.eventType)}: ${event.data.title} ${author}`.trim()
            const formattedDate = `${event.data.dates[0].date}${event.data.dates.length > 1 ? ` - ${event.data.dates[event.data.dates.length - 1].date}` : ""}`

            const description = `${formattedDate} - ${event.data.place}`

            return {
                title: title,
                description: description,
                link: getRelativeLocaleUrl("es", `events/${event.id}`),
                content: sanitizeHTML(marked.parse(event.body), {
                    allowedTags: sanitizeHTML.defaults.allowedTags.concat(['img'])
                }),
            }
        }),
        customData: `<language>es-CL</language>`,
    });
}