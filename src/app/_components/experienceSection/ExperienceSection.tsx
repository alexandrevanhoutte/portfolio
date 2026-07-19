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
      "Designed and implemented Go backend services and APIs for product carbon footprint modeling and calculation.",
      "Developed backend features for OEE and industrial performance analysis, including calculation logic, aggregation workflows, and time-series data processing.",
      "Optimized long-range industrial data queries, significantly reducing response times for large production datasets.",
      "Redesigned alarm management workflows, improving history tracking, escalation logic, priority handling, and issue readability.",
      "Contributed to multi-tenant authentication and authorization, including OIDC and SAML integrations.",
      "Contributed to a Model Context Protocol integration that simplifies carbon model creation and provides more relevant context during modeling and calculation.",
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
    ],
  },
  {
    id: "qwerky",
    company: "Qwerky",
    title: "Lead Backend Systems Engineer",
    period: "Nov 2021 — Oct 2024",
    employmentType: "Full-time",
    location: "Seoul, South Korea",
    workMode: "Hybrid",
    summary:
      "Led backend development across several production products, focusing on GraphQL APIs, search systems, secure backend workflows, data quality, testing, and deployment reliability.",
    contributions: [
      "Built and maintained GraphQL APIs supporting production web and mobile applications.",
      "Improved search relevance and performance, helping users find information more efficiently.",
      "Strengthened backend reliability through automated regression testing and validation of critical workflows.",
      "Improved deployment workflows across development, testing, and production environments.",
      "Developed secure backend workflows for authentication, sensitive user data, and payment-related features.",
      "Collaborated with product, frontend, mobile, and design teams to clarify requirements, define API contracts, and deliver production-ready features.",
      "Contributed to technical direction through system design, code reviews, debugging, and backend engineering practices.",
    ],
    technologies: [
      "Typescript",
      "GraphQL",
      "REST APIs",
      "PostgreSQL",
      "Elasticsearch",
      "Neo4j",
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
    location: "Seoul–Incheon Metropolitan Area, South Korea",
    workMode: "On-site",
    summary:
      "Worked on backend systems and NLP projects, with a focus on Korean text processing, search, REST APIs, internal libraries, and deployment workflows.",
    contributions: [
      "Built REST APIs that improved the search and retrieval of Korean news articles.",
      "Developed backend APIs for analyzing company data and helping users extract business insights.",
      "Created an internal Korean NLP library for lemmatization and part-of-speech tagging.",
      "Built infrastructure to centralize and distribute internal libraries and reusable components across projects.",
      "Improved deployment workflows to make releases from development to production more reliable.",
      "Contributed to production backend services focused on data processing and Korean text analysis.",
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
    title: "DevOps Engineer — SNCF Projects",
    period: "Mar 2018 — Sep 2018",
    location: "Lille, France",
    workMode: "On-site",
    summary:
      "Developed internal applications for two SNCF projects, improving operational efficiency, collaboration, service visibility, and reporting.",
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
    title: "Full-Stack Developer",
    period: "Sep 2017 — Feb 2018",
    location: "Lille, France",
    summary:
      "Worked on a machine-learning-based sales calculation product that helped companies identify similar stores and manage inventory more effectively.",
    contributions: [
      "Developed the user interface for identifying stores with similar business characteristics.",
      "Integrated the interface with sales calculation and inventory-management workflows.",
      "Contributed to a Big Data product combining frontend development, backend services, and relational data.",
    ],
    technologies: ["AngularJS", "Java", "PL/SQL"],
  },
  {
    id: "vekia-internship",
    company: "Vekia",
    title: "Software Developer Intern",
    period: "Apr 2016 — Jul 2016",
    employmentType: "Internship",
    location: "Lille, France",
    summary:
      "Developed and tested inventory-management tools while improving the team’s testing workflow and technical communication.",
    contributions: [
      "Contributed to the development and validation of inventory-management features.",
      "Introduced a more efficient approach to creating and maintaining automated tests.",
      "Improved the way testing information and results were shared within the development team.",
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
