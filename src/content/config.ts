import { z } from 'zod'

const blog = z.object({
  type: z.literal('content'),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    author: z.object({
      name: z.string(),
      title: z.string(),
      image: z.string(),
    }),
  }),
})

const careers = z.object({
  type: z.literal('content'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    remote: z.boolean(),
    type: z.string(),
  }),
})

export const collections = { blog, careers }
