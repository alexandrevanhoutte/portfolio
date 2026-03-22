export interface SkillEvidence {
  id: string;
  label: string;
  projectId?: number;
  href?: string;
}

export interface FeaturedExpertise {
  title: string;
  badge: string;
  description: string;
  prominentTechnologies: [string, string, string];
  evidence: SkillEvidence[];
}

export interface SupportingExpertise {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export const featuredExpertise: FeaturedExpertise = {
  title: "Backend Architecture & API Delivery",
  badge: "Primary Expertise",
  description:
    "I design and ship backend platforms from architecture planning to production operations, with strong ownership on reliability and delivery quality.",
  prominentTechnologies: ["Go", "TypeScript", "Python"],
  evidence: [
    {
      id: "featured-proof-saveeat",
      label: "SaveEat backend platform",
      projectId: 8,
    },
    {
      id: "featured-proof-markurz",
      label: "Markurz API delivery",
      projectId: 6,
    },
    {
      id: "featured-proof-experience",
      label: "Backend ownership in professional roles",
      href: "/#experiences",
    },
  ],
};

export const supportingExpertise: SupportingExpertise[] = [
  {
    id: "service-design",
    title: "Service Design",
    description:
      "Designing API contracts and service boundaries that stay clean as scope grows.",
    tags: ["REST", "GraphQL", "NestJS", "FastAPI"],
  },
  {
    id: "cloud-operations",
    title: "Cloud Operations",
    description:
      "Running production deployments with practical observability and release workflows.",
    tags: ["AWS", "Azure", "Docker", "CI/CD"],
  },
  {
    id: "product-delivery",
    title: "Product Delivery",
    description:
      "Converting business priorities into scoped execution with clear technical ownership.",
    tags: ["Roadmapping", "Ownership", "Collaboration"],
  },
  {
    id: "frontend-support",
    title: "Frontend Support",
    description:
      "Supporting interface implementation when needed to unblock end-to-end delivery.",
    tags: ["React", "Next.js", "TypeScript", "CSS Modules"],
  },
];

export function getSkillEvidenceHref(evidence: SkillEvidence): string | null {
  if (typeof evidence.projectId === "number") {
    return `/projects/${evidence.projectId}`;
  }

  if (typeof evidence.href === "string") {
    return evidence.href;
  }

  return null;
}
