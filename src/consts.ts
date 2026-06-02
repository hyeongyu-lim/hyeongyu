import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Your Name",
  TAGLINE: "Mechanical Engineering",
  EMAIL: "you@university.edu",
  NUM_NOTES_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Academic portfolio — mechanical engineering research, projects, and notes.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Academic background, skills, and research direction.",
};

export const RESEARCH: Metadata = {
  TITLE: "Research Interests",
  DESCRIPTION: "Broad engineering interests organized by area.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Engineering, hardware, software, and capstone projects.",
};

export const NOTES: Metadata = {
  TITLE: "Research Notes",
  DESCRIPTION:
    "Markdown knowledge base — paper reviews, methods, and engineering topics.",
};

export const PUBLICATIONS: Metadata = {
  TITLE: "Publications & Presentations",
  DESCRIPTION: "Journal articles, conference papers, posters, and talks.",
};

export const RESOURCES: Metadata = {
  TITLE: "Resources",
  DESCRIPTION: "Books, courses, software, and learning materials.",
};

export const CV: Metadata = {
  TITLE: "CV",
  DESCRIPTION: "Academic curriculum vitae.",
};

/** Featured interests shown on the home page — edit as your focus evolves */
export const FEATURED_INTERESTS: string[] = [
  "Solid mechanics & materials",
  "Dynamics & control",
  "Numerical simulation",
  "Design & manufacturing",
];

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/your-username",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/your-profile",
  },
  {
    NAME: "orcid",
    HREF: "https://orcid.org/0000-0000-0000-0000",
  },
];
