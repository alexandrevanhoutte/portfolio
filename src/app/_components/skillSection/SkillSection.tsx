import { FadeIn } from "@/app/_components/fadeIn/FadeIn";
import SkillCard from "@/app/_components/skillSection/SkillCard";
import { skillGroups } from "@/app/_libs/skills";
import styles from "./skills.module.css";

export default function SkillSection() {
  return (
    <section
      data-section
      className={styles.skillSection}
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className={styles.container}>
        <hr className={styles.divider} aria-hidden="true" />
        <header className={styles.sectionHeader}>
          <FadeIn duration="0.8s" y={10}>
            <span className={styles.number}>03</span>
          </FadeIn>
          <FadeIn duration="0.9s" delay="0.12s" y={16}>
            <h2 className={styles.heading} id="skills-title">
              Technical Expertise
            </h2>
          </FadeIn>
          <FadeIn duration="0.85s" delay="0.08s" y={14}>
            <p className={styles.intro}>
              Backend engineer focused on Go, API design, data-intensive
              systems, and distributed workflows, with additional experience in
              TypeScript and Python.
            </p>
          </FadeIn>
        </header>

        <FadeIn duration="0.9s" delay="0.16s" y={16}>
          <div className={styles.skillsGrid}>
            {skillGroups.map((group) => (
              <SkillCard key={group.category} group={group} />
            ))}
          </div>
        </FadeIn>

        <hr className={styles.divider} aria-hidden="true" />
      </div>
    </section>
  );
}
