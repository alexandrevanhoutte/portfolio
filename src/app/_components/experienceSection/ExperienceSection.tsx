import ExperienceElement from "@/app/_components/experienceElement/ExperienceElement";
import { FadeIn } from "@/app/_components/fadeIn/FadeIn";
import styles from "./experienceSection.module.css";

interface Contribution {
  text: string;
  outcome?: string;
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  period: string | string[];
  location?: string;
  summary: string;
  contributions?: Contribution[];
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    id: "glassdome",
    company: "Glassdome",
    title: "Backend Engineer",
    period: "Oct 2024 — Present",
    location: "Seoul",
    summary:
      "Building backend services for carbon accounting and industrial performance products.",
    contributions: [
      {
        text: "Built Go backend services and REST and gRPC APIs, working with product and frontend teams to deliver carbon accounting and industrial performance features.",
      },
      {
        text: "Designed calculation, aggregation, and time-series processing workflows for carbon accounting and OEE.",
      },
      {
        text: "Optimized TimescaleDB queries for one-year industrial data retrieval.",
        outcome: "30s+ → ~5s",
      },
      {
        text: "Contributed to multi-tenant authentication and authorization, including OIDC and SAML integrations.",
      },
      {
        text: "Contributed to an MCP feature for creating and exploring carbon models.",
      },
      {
        text: "Used Kubernetes, GitHub Actions, Argo CD, and Grafana to deploy, monitor, and troubleshoot backend services in production.",
      },
    ],
    technologies: [
      "Go",
      "PostgreSQL",
      "TimescaleDB",
      "ClickHouse",
      "Kubernetes",
      "Redpanda",
      "Temporal",
      "Zitadel",
      "GitHub Actions",
      "Argo CD",
    ],
  },
  {
    id: "qwerky",
    company: "Qwerky",
    title: "Lead Backend Engineer",
    period: "Nov 2021 — Oct 2024",
    location: "Seoul",
    summary: "Led backend architecture and API design for web and mobile applications.",
    contributions: [
      {
        text: "Built and maintained NestJS backend services in TypeScript, including GraphQL APIs for web and mobile applications.",
      },
      {
        text: "Led backend architecture and API design, drove technical decisions, and reviewed code across the backend team.",
      },
      {
        text: "Implemented search features with Elasticsearch, including indexing and search queries.",
      },
      {
        text: "Introduced regression tests and deployment checks.",
        outcome: "−40% deployment incidents",
      },
      {
        text: "Developed backend features for authentication, secure handling of sensitive user data, and payments.",
      },
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "GraphQL",
      "PostgreSQL",
      "Elasticsearch",
      "Neo4j",
      "AWS",
      "Docker",
      "CI/CD",
    ],
  },
  {
    id: "mobile-os",
    company: "Mobile OS",
    title: "Software Engineer",
    period: "Oct 2019 — Nov 2021",
    location: "Seoul",
    summary:
      "Worked on APIs, Korean NLP, and reusable backend systems for data-processing services.",
    contributions: [
      {
        text: "Built REST APIs for Korean news search and business-data analysis and developed an internal Korean NLP library for lemmatization and part-of-speech tagging.",
      },
      {
        text: "Centralized reusable internal libraries and improved release workflows for production data-processing services.",
      },
    ],
    technologies: [
      "REST APIs",
      "Search Systems",
      "Korean NLP",
      "Docker",
      "Jenkins",
      "CI/CD",
    ],
  },
  {
    id: "capgemini",
    company: "Capgemini",
    title: "DevOps Engineer Intern",
    period: "Mar 2018 — Sep 2018",
    location: "Lille",
    summary: "Worked on internal service operations and tooling.",
    contributions: [
      {
        text: "Automated health checks, centralized logging, and consolidated ticketing workflows across internal services.",
      },
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Centralized Logging",
      "Internal Tooling",
    ],
  },
  {
    id: "vekia",
    company: "Vekia",
    title: "Backend Developer Intern",
    period: "Apr–Jul 2016 · Sep 2017–Feb 2018",
    location: "Lille",
    summary: "Worked on inventory tooling and stock-allocation interfaces.",
    contributions: [
      { text: "Developed Java inventory tools and shared test utilities." },
      {
        text: "Built an AngularJS interface to visualize sales and support stock-allocation decisions.",
      },
    ],
    technologies: ["AngularJS", "Java", "PL/SQL"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      data-section
      className={styles.experienceSection}
      id="experiences"
    >
      <div className={styles.container}>
        <div className={styles.sectionIntro}>
          <span className={styles.number}>02</span>
          <h2 className={styles.heading}>Experience</h2>
        </div>
        <div className={styles.timeline}>
          {experiences.map((experience, index) => (
            <FadeIn key={experience.id} y={14}>
              <ExperienceElement
                experience={experience}
                isLast={index === experiences.length - 1}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
