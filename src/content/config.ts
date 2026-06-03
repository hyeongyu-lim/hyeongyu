import { defineCollection, z } from "astro:content";

const noteCategories = [
  "paper-review",
  "general",
] as const;

const researchCategories = [
  "1",
  "2",
] as const;

const projectCategories = [
  "1",
  "2",
] as const;

const publicationTypes = [
  "journal",
  "conference",
  "poster",
  "presentation",
] as const;

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(noteCategories).default("general"),
    draft: z.boolean().optional(),
  }),
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.enum(researchCategories),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(projectCategories).default("engineering"),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.coerce.number(),
    type: z.enum(publicationTypes),
    link: z.string().url().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { notes, research, projects, publications };

export {
  noteCategories,
  researchCategories,
  projectCategories,
  publicationTypes,
};
