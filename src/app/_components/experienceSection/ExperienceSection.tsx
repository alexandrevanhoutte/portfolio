import { FadeIn } from "@/app/_components/fadeIn/FadeIn";
import ExperienceElement from "@/app/_components/experienceElement/ExperienceElement";
import styles from "./experienceSection.module.css";

export interface Experience {
  company: string;
  title: string;
  period: string;
  location?: string;
  summary: string;
  contributions: string[];
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    company: "Qwerky",
    title: "Backend Engineer",
    period: "2021 — 2024",
    location: "Seoul, South Korea",
    summary:
      "Led backend development for multiple web and mobile products, turning product requirements into system designs and production-ready implementations.",
    contributions: [
      "Built and maintained REST and GraphQL APIs supporting web and mobile applications.",
      "Improved search relevance and performance, helping users find information more efficiently.",
      "Developed secure authentication, user-data, and payment workflows.",
      "Improved backend reliability through automated regression testing of critical workflows.",
      "Streamlined CI/CD pipelines across development, testing, and production environments.",
    ],
    technologies: [
      "Go",
      "GraphQL",
      "REST APIs",
      "Elasticsearch",
      "PostgreSQL",
      "CI/CD",
    ],
  },
  {
    company: "(주)엠오에스에이 Mobile OS",
    title: "Software Engineer - 과장",
    period: "2019 — 2021",
    summary:
      "Developed search, company-data analysis, and Korean-language processing services for a portfolio of NLP projects.",
    contributions: [
      "Developed a REST API to improve search functionality for Korean news articles.",
      "Designed a REST API for analyzing company data and supporting business decisions.",
      "Engineered an internal library for Korean lemmatization and part-of-speech tagging.",
      "Implemented shared infrastructure for distributing libraries and components across projects.",
      "Improved delivery workflows with CI/CD processes for development, testing, and production.",
    ],
  },
  {
    company: "Capgemini",
    title: "DevOps on 2 SNCF projects",
    period: "2019",
    summary:
      "Developed internal applications that improved operational efficiency, collaboration, and service visibility across two SNCF projects.",
    contributions: [
      "Automated health checks for modules across applications.",
      "Implemented centralized logging for all services to simplify troubleshooting.",
      "Consolidated tickets from three tools to improve reporting and task prioritization.",
    ],
  },
  {
    company: "Vekia",
    title: "Fullstack Developer",
    period: "2018 — 2019",
    summary:
      "Developed the interface for a machine-learning-based sales calculation project that helped companies manage stock more effectively.",
    contributions: [],
  },
  {
    company: "Vekia",
    title: "Test Developer",
    period: "2017 — 2018",
    summary:
      "Developed and tested inventory management tools while improving the team’s approach to test development and communication.",
    contributions: [
      "Introduced automated regression tests to improve code stability.",
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
            <FadeIn key={`${experience.company}-${experience.period}`} y={14}>
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
