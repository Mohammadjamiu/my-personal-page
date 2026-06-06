import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'ai',
      'cybersecurity',
      'software-engineering',
      'research',
      'building-products',
      'africa-tech',
      'essays',
      'personal-finance',
      'dev-notes',
    ]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readingTime: z.string().optional(),
    /** Path under `public/`, e.g. `/blog/package-radar/hero.png` — shown under title + OG/Twitter card + optional list card thumb */
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    url: z.string().optional(),
    github: z.string().optional(),
    /** Full URL to the package on npm, if published */
    npm: z.string().url().optional(),
    openSource: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    status: z.enum(['active', 'completed', 'paused']).default('active'),
  }),
});

export const collections = { blog, projects };
