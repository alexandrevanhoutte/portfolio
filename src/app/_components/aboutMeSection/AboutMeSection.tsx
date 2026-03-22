import SectionTitle from "@/app/_components/sectionTitle/SectionTitle";
import styles from "./aboutMeSection.module.css";

type AboutCard = {
  title: string;
  description: string;
};

const aboutCards: AboutCard[] = [
  {
    title: "Backend Development",
    description:
      "Building APIs and services focused on reliability and maintainability.",
  },
  {
    title: "Architecture & Ownership",
    description:
      "Owning backend structure and technical decisions from planning to delivery.",
  },
  {
    title: "Product-Oriented Engineering",
    description:
      "Turning business needs into practical, shippable backend solutions.",
  },
  {
    title: "Team Collaboration",
    description:
      "Collaborating across teams to keep delivery aligned and efficient.",
  },
];

export default function AboutMeSection() {
  return (
    <div data-section className={styles.aboutMe} id="about-me">
      <SectionTitle title="About me" className={styles.aboutTitle} />
      <div className={styles.content}>
        <p className={styles.description}>
          Backend software engineer based in Seoul. I focus on reliable systems,
          practical technical decisions, and strong collaboration to ship useful
          products.
        </p>

        <div className={styles.cardGrid}>
          {aboutCards.map((card) => (
            <article key={card.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
