import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { countries } from './i18n/ui';

export type CountryCodes = keyof typeof countries.es;

const memberCollection = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "src/content/members/" }),
  schema: z.object({
    name: z.string(),
    lastName: z.string().optional(), // TODO: Remove!
    img: z.string(),
    role: z.string(),
    w: z.boolean().optional(),
    areas: z.object({ en: z.array(z.string()), es: z.array(z.string()) }),
    info: z.object({ en: z.string(), es: z.string() }),
    socialmedia: z.record(z.string(), z.string()).optional()
  })
})

const eventsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/events", },),
  schema: z.object(
    {
      title: z.string(),
      author: z.string().optional(),
      affiliation: z.string().optional(),
      country: z.enum([...Object.keys(countries.es) as [CountryCodes, ...CountryCodes[]]]).optional(),
      dates: z.array(
        z.object({
          date: z.string(),
          time: z.object({
            start: z.string(),
            end: z.string()
          })
        })),
      place: z.string(),
      description: z.string().optional(),
      project: reference("projects").optional(),
      eventType: z.enum(["talk", "workshop", "course"])
    }
  )
})

const readingGroupCollection = defineCollection({
  loader: glob({ pattern: "*.yml", base: "src/content/reading-group" }),
  schema: z.object({
    title: z.string(),
    time: z.string(),
    place: z.string(),
    calendar: z.array(z.object({
      date: z.string(),
      reading: z.string()
    })).optional(),
    author: z.string().optional(),
    abstract: z.string().optional(),
    semester: z.string(),
    img: z.string().optional(),
    startDate: z.string(),
    endDate: z.string(),
    pendingDates: z.boolean().optional(),
    isActive: z.boolean().optional()
  })
})

const projectsCollection = defineCollection({
  loader: glob({ pattern: "*.yml", base: "src/content/projects" }),
  schema: z.object({
    title: z.object({
      es: z.string(),
      en: z.string()
    }),
    abstract: z.object({
      es: z.string(),
      en: z.string().default("")
    }),
    mainResearcher: z.string(),
    coresearcher: z.string().optional(),
    startYear: z.number(),
    endYear: z.number(),
    funding: z.string().optional(),
    events: z.array(reference("events")).optional().nullable(),
    jobs: z.array(z.string()).optional().nullable(),
    number: z.number().optional()
  })
})

const publicationsCollection = defineCollection({
  loader: glob({ pattern: "**/*.yml", base: "src/content/publications" })
})

export const collections = {
  'members': memberCollection,
  'events': eventsCollection,
  'readingGroups': readingGroupCollection,
  'projects': projectsCollection,
  'publications': publicationsCollection
};