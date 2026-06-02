import type {
  noteCategories,
  projectCategories,
  publicationTypes,
  researchCategories,
} from "@content/config";

type NoteCategory = (typeof noteCategories)[number];
type ResearchCategory = (typeof researchCategories)[number];
type ProjectCategory = (typeof projectCategories)[number];
type PublicationType = (typeof publicationTypes)[number];

export const NOTE_CATEGORY_LABELS: Record<NoteCategory, string> = {
  "paper-review": "Paper reviews",
  "numerical-methods": "Numerical methods",
  "control-systems": "Control systems",
  manufacturing: "Manufacturing",
  "ai-engineering": "AI for engineering",
  general: "General",
};

export const RESEARCH_CATEGORY_LABELS: Record<ResearchCategory, string> = {
  mechanics: "Mechanics & structures",
  thermodynamics: "Thermodynamics & fluids",
  controls: "Dynamics & control",
  manufacturing: "Manufacturing & design",
  materials: "Materials science",
  computation: "Computation & simulation",
};

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  engineering: "Engineering",
  hardware: "Hardware",
  software: "Software",
  capstone: "Capstone",
};

export const PUBLICATION_TYPE_LABELS: Record<PublicationType, string> = {
  journal: "Journal papers",
  conference: "Conference papers",
  poster: "Posters",
  presentation: "Presentations",
};
