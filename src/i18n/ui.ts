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
    'Profesor': "Professor",
    'PhD student': "PhD Student",
    'PhD candidate': 'PhD Candidate',
    'Colaborador': 'Adjunct researcher',
    'url': "Personal website",
    "publications": "Latest publications"
  },
  es: {
    'nav.home': 'Inicio',
    'nav.members': 'Miembros',
    'nav.events': 'Eventos',
    'nav.reading-group': 'Grupo de lectura',
    'nav.wip': 'Coloquio WIP',
    'Profesor': "Académico",
    'PhD student': "Estudiante de doctorado",
    'PhD candidate': { m: 'Candidato doctoral', w: "Candidata doctoral" },
    'Colaborador': 'Académico colaborador',
    'url': "Sitio web personal",
    "publications": "Últimas publicaciones",
  },
} as const;

export const countries = {
  en: {
    "uk": "United Kingdom",
    "co": "Colombia"
  },
  es: {
    "uk": "Reino Unido",
    "co": "Colombia"
  }
} as const;