import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const memberCollection = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "src/content/members/" }),
  schema: z.object({
    name: z.string(),
    img: z.string(),
    role: z.string(),
    w: z.boolean().optional(),
    areas: z.object({ en: z.array(z.string()), es: z.array(z.string()) }),
    info: z.object({ en: z.string(), es: z.string() }),
    socialmedia: z.record(z.string(), z.string()).optional()
  })
})

const eventsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/events", },),
  schema: z.object(
    {
      title: z.string(),
      author: z.string().optional(),
      affiliation: z.string().optional(),
      country: z.string().optional(),
      startDate: z.string(),
      startTime: z.string().optional(),
      endTime: z.string().optional(),
      place: z.string()
    }
  )
})

const readingGroupCollection = defineCollection({
  loader: glob({ pattern: "*.yml", base: "src/content/reading-group" })
})

const projectsCollection = defineCollection({
  loader: glob({ pattern: "*.yml", base: "src/content/projects" })
})

export const collections = {
  'members': memberCollection,
  'events': eventsCollection,
  'readingGroups': readingGroupCollection,
  'projects': projectsCollection
};