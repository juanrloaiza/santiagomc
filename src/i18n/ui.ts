export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'es';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.members': 'Members',
    'nav.events': 'Events',
    'nav.reading-group': 'Reading Group',
    'nav.wip': 'WIP Colloquium',
    "nav.projects": "Projects",
    "nav.recordings": "Video Library",
    'Profesor': "Professor",
    'PhD student': "PhD Student",
    'PhD candidate': 'PhD Candidate',
    'Colaborador': 'Adjunct researcher',
    'url': "Personal website",
    "publications": "Latest publications",
    "duration": "Duration",
    "funding": "Funding",
    "associated events": "Associated events",
    "past events": "Past events",
    "upcoming events": "Upcoming events",
    "Oportunidades": "Opportunities",
    "coresearcher": "Co-researcher",
    "PI": "PI",
    "PI-full": "Principal investigator",
    "RG.previousgroups": "Previous reading groups",
    "RG.currentgroup": "Current reading group",
    "talk": "Talk",
    "workshop": "Workshop",
    "course": "Course",
    "missing-future-events": "We have no upcoming events right now, but we’re working on new activities and hope to have news to share soon!",
    "youtube": "Talks on YouTube",
    "hosted-events": "Events organized by our group",
    "offered-talks": "Talks by members of our group"
  },
  es: {
    'nav.home': 'Inicio',
    'nav.members': 'Miembros',
    'nav.events': 'Eventos',
    'nav.reading-group': 'Grupo de lectura',
    'nav.wip': 'Coloquio WIP',
    "nav.projects": "Proyectos",
    "nav.recordings": "Videoteca",
    'Profesor': "Académico",
    'PhD student': "Estudiante de doctorado",
    'PhD candidate': { m: 'Candidato doctoral', w: "Candidata doctoral" },
    'Colaborador': 'Académico colaborador',
    'url': "Sitio web personal",
    "publications": "Últimas publicaciones",
    "duration": "Duración",
    "funding": "Financiación",
    "associated events": "Eventos asociados",
    "past events": "Eventos pasados",
    "upcoming events": "Próximos eventos",
    "Oportunidades": "Oportunidades",
    "coresearcher": "Coinvestigador",
    "PI": "IR",
    "PI-full": "Investigador principal",
    "RG.previousgroups": "Grupos de lectura anteriores",
    "RG.currentgroup": "Grupo de lectura actual",
    "talk": "Charla",
    "workshop": "Workshop",
    "course": "Curso",
    "missing-future-events": "No tenemos eventos próximos por ahora, ¡pero estamos trabajando para tener nuevas actividades y esperamos tener noticias pronto!",
    "youtube": "Charlas en YouTube",
    "hosted-events": "Eventos organizados por el grupo",
    "offered-talks": "Charlas de miembros del grupo"
  },
} as const;

export const  countries = {
  en: {
    "uk": "United Kingdom",
    "co": "Colombia",
    "de": "Germany",
    "ar": "Argentina",
    "us": "United States",
    "at": "Austria",
    "mx": "Mexico",
    "nl": "The Netherlands"
  },
  es: {
    "uk": "Reino Unido",
    "co": "Colombia",
    "de": "Alemania",
    "ar": "Argentina",
    "us": "Estados Unidos",
    "at": "Austria",
    "mx": "México",
    "nl": "Países Bajos"
  }
} as const;

export type CountryCode = keyof typeof countries.en;
export type TranslatedString = keyof typeof ui.en;