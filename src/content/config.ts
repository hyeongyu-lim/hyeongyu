import { defineCollection, z } from "astro:content";

// 1. 질문자님이 준비해 두신 소중한 카테고리 틀 그대로 유지
const noteCategories = [
  "paper-review",
  "general",
] as const;

const researchCategories = [
  "1",
  "2",
] as const;

// 에러의 주범이었던 부분 교정: 아래 default가 "engineering"이므로 허용 목록에 추가
const projectCategories = [
  "1",
  "2",
  "engineering",
] as const;

const publicationTypes = [
  "journal",
  "conference",
  "poster",
  "presentation",
] as const;

// 2. 각 스키마에 .optional() 또는 기본값(.default)을 주어 빈 폴더 상태 완벽 방어
const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    category: z.enum(noteCategories).default("general"),
    draft: z.boolean().optional(),
  }),
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    category: z.enum(researchCategories).optional(),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    category: z.enum(projectCategories).default("engineering"), // 위 배열에 단어 수혈 완료
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    authors: z.string().optional(),
    venue: z.string().optional(),
    year: z.coerce.number().optional(),
    type: z.enum(publicationTypes).optional(),
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