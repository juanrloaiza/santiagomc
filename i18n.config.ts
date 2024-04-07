export default defineI18nConfig(() => ({
    legacy: false,
    messages: {
        en: {
            index: "Home",
            events: "Events",
            members: "Members",
            activities: "Recurring Activities",
            contact: "Contact",
            about: "About us",
            upcoming_events: "Upcoming events",
            past_events: "Past events",
        }, es: {
            index: "Home",
            events: "Eventos",
            members: "Miembros",
            activities: "Actividades Recurrentes",
            contact: "Contacto",
            about: "Quiénes somos",
            upcoming_events: "Próximos eventos",
            past_events: "Eventos pasados"
        }
    }
}
))