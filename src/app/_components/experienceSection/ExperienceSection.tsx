import ExperienceElement from "@/app/_components/experienceElement/ExperienceElement";
import { FadeIn } from "@/app/_components/fadeIn/FadeIn";
import styles from "./experienceSection.module.css";

type EmploymentType = "Full-time" | "Internship";
type WorkMode = "On-site" | "Hybrid" | "Remote";

export interface Experience {
  id: string;
  company: string;
  title: string;
  period: string;
  employmentType?: EmploymentType;
  location?: string;
  workMode?: WorkMode;
  summary: string;
  contributions?: string[];
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    id: "glassdome",
    company: "Glassdome",
    title: "Backend Engineer",
    period: "Oct 2024 — Present",
    employmentType: "Full-time",
    location: "Seoul, South Korea",
    workMode: "Hybrid",
    summary:
      "Building Go backend systems for product carbon footprint and industrial performance platforms, with a focus on APIs, calculation workflows, and industrial data processing.",
    contributions: [
      "Build Go backend services and REST and gRPC APIs, working with product and frontend teams to deliver carbon-accounting and industrial-performance features.",
      "Design calculation, aggregation, and time-series processing workflows for carbon accounting and OEE.",
      "Optimized TimescaleDB queries, reducing one-year industrial data retrieval time from over 30 seconds to around 5 seconds.",
      "Redesigned alarm-management workflows.",
      "Contribute to multi-tenant authentication and authorization using OIDC and SAML.",
      "Use Kubernetes, GitHub Actions, and Argo CD to deploy backend services and troubleshoot issues in production.",
      "Contributed to an MCP feature that helps users create carbon models.",
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
    employmentType: "Full-time",
    location: "Seoul, South Korea",
    workMode: "Hybrid",
    summary:
      "Built and maintained NestJS backend services for web and mobile products, working on GraphQL APIs, search, authentication, payments, and AWS deployments.",
    contributions: [
      "Built and maintained NestJS backend services in TypeScript, including GraphQL APIs for web and mobile applications.",
      "Contributed to backend architecture and API design, reviewed code, and helped make technical decisions.",
      "Built search features with Elasticsearch, including indexing and search queries.",
      "Developed backend features for authentication, secure handling of sensitive user data, and payments.",
      "Managed production deployments on AWS and introduced regression tests and deployment checks, reducing deployment-related incidents by 40%.",
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
    company: "(주)엠오에스에이 (Mobile OS)",
    title: "Software Engineer",
    period: "Oct 2019 — Nov 2021",
    employmentType: "Full-time",
    location: "Seoul, South Korea",
    workMode: "On-site",
    summary:
      "Worked on backend systems and NLP projects, with a focus on Korean text processing, search, REST APIs, internal libraries, and deployment workflows.",
    contributions: [
      "Built REST APIs for Korean news search and business-data analysis.",
      "Developed an internal Korean NLP library for lemmatization and part-of-speech tagging.",
      "Centralized reusable internal libraries and improved release workflows for production data-processing services.",
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
    title: "DevOps Engineer Intern — SNCF Projects",
    period: "Mar 2018 — Sep 2018",
    location: "Lille, France",
    workMode: "On-site",
    summary:
      "Built internal tools for two SNCF projects, covering service health checks, centralized logging, and ticket reporting.",
    contributions: [
      "Automated application module health checks, reducing manual work and improving the accuracy of operational status updates.",
      "Implemented centralized logging across services, making troubleshooting and maintenance more efficient.",
      "Consolidated tickets from three ticketing systems, improving reporting, task prioritization, and visibility for teams and clients.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Centralized Logging",
      "Internal Tooling",
    ],
  },
  {
    id: "vekia-fullstack",
    company: "Vekia",
    title: "Backend Developer Intern",
    period: "Sep 2017 — Feb 2018",
    employmentType: "Internship",
    location: "Lille, France",
    summary:
      "Worked on a sales-planning product used to understand product performance across stores and support stock-allocation decisions.",
    contributions: [
      "Built an AngularJS interface to visualize sales and support stock-allocation decisions.",
      "Integrated the interface with backend sales and inventory data.",
    ],
    technologies: ["AngularJS", "Java", "PL/SQL"],
  },
  {
    id: "vekia-internship",
    company: "Vekia",
    title: "Backend Developer Intern",
    period: "Apr 2016 — Jul 2016",
    employmentType: "Internship",
    location: "Lille, France",
    summary:
      "Developed Java inventory tools and shared testing utilities for development teams.",
    contributions: [
      "Contributed to Java inventory-management tools.",
      "Built shared utilities that made it easier for teams to create and run tests.",
    ],
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
