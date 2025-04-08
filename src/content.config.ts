import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const memberCollection = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "src/content/members/" }),
  schema: z.object({
    name: z.string(),
    img: z.string(),
    role: z.object({ en: z.string(), es: z.string() }),
    //areas: z.object({ en: z.array(z.string()), es: z.array(z.string()) }),
    info: z.object({ en: z.string(), es: z.string() })
  })
})

const eventsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/events", },),
  schema: z.object(
    { title: z.string() }
  )
})

const readingGroupCollection = defineCollection({
  loader: glob({ pattern: "*.yml", base: "src/content/reading-group" })
})

export const collections = {
  'members': memberCollection,
  'events': eventsCollection,
  'readingGroups': readingGroupCollection
};