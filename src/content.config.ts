import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    identity: z.string(),
    summary: z.string(),
    intro: z.array(z.string()).default([]),
    quickFacts: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          href: z.string().optional()
        })
      )
      .default([]),
    workCards: z
      .array(
        z.object({
          title: z.string(),
          text: z.string()
        })
      )
      .default([]),
    lifeCards: z
      .array(
        z.object({
          title: z.string(),
          text: z.string()
        })
      )
      .default([]),
    contacts: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          href: z.string(),
          note: z.string().optional()
        })
      )
      .default([]),
    channels: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          href: z.string(),
          note: z.string().optional()
        })
      )
      .default([]),
    searchAliases: z.array(z.string()).default([]),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      ogImage: z.string().default("/social-card.svg")
    })
  })
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([])
  })
});

export const collections = {
  pages,
  blog
};
