import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'Costume Crafts',
      'Puppetry',
      'Printmaking',
      'Sculpture',
      'Traditional Painting & Drawing'
    ]),
    medium: z.string(),
    year: z.number(),
    venue: z.string().optional(),
    coverImage: z.string(),
    images: z.array(z.string()).default([]),
    materials: z.array(z.string()).default([]),
    order: z.number().default(10),
    featured: z.boolean().default(false),
    statement: z.string().optional(),
  }),
});

export const collections = { projects };
