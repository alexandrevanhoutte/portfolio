import SectionTitle from "@/app/_components/sectionTitle/SectionTitle";
import styles from "./skills.module.css";

interface SkillCard {
  id: "core" | "backend" | "cloud" | "frontend";
  title: string;
  label: string;
  description: string;
  tags: string[];
}

export default function SkillSection() {
  const skillCards: SkillCard[] = [
    {
      id: "core",
      title: "Core Stack",
      label: "Primary Focus",
      description:
        "Languages I rely on daily for scalable backend systems and long-term maintainability.",
      tags: ["Go", "TypeScript", "Python"],
    },
    {
      id: "backend",
      title: "Backend Engineering",
      label: "Architecture",
      description:
        "Designing APIs and service architecture with ownership from planning through delivery.",
      tags: [
        "API Design",
        "Service Architecture",
        "Backend Ownership",
        "Product Delivery",
        "NestJS",
        "FastAPI",
      ],
    },
    {
      id: "cloud",
      title: "Cloud & Infrastructure",
      label: "Operations",
      description:
        "Deploying and running backend services with practical cloud, container, and release workflows.",
      tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      id: "frontend",
      title: "Frontend Support",
      label: "Supporting Skills",
      description:
        "Contributing to product interfaces when needed to support end-to-end delivery.",
      tags: ["React", "Next.js"],
    },
  ];

  return (
    <div data-section className={styles.skillSection} id="skills">
      <SectionTitle className={styles.skillTitle} title="Skills" />
      <div className={styles.content}>
        <p className={styles.kicker}>Backend-focused engineering profile</p>
        <p className={styles.intro}>
          Technologies and areas I use most in backend-focused product
          development.
        </p>

        <div className={styles.cardGrid}>
          {skillCards.map((card) => (
            <article className={`${styles.card} ${styles[card.id]}`} key={card.title}>
              <div className={styles.cardHeader}>
                <p className={styles.cardLabel}>{card.label}</p>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
              <p className={styles.cardDescription}>{card.description}</p>
              <ul className={styles.tagList}>
                {card.tags.map((tag) => (
                  <li className={styles.tag} key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
