import { FadeIn } from "@/app/_components/fadeIn/FadeIn";
import FeaturedExpertiseCard from "@/app/_components/skillSection/FeaturedExpertiseCard";
import SectionTitle from "@/app/_components/sectionTitle/SectionTitle";
import SupportingExpertiseCard from "@/app/_components/skillSection/SupportingExpertiseCard";
import { featuredExpertise, supportingExpertise } from "@/app/_libs/skills";
import styles from "./skills.module.css";

export default function SkillSection() {
  return (
    <section
      data-section
      className={styles.skillSection}
      id="skills"
      aria-labelledby="skills-title"
    >
      <div id="skills-title">
        <SectionTitle className={styles.skillTitle} title="Skills" />
      </div>

      <div className={styles.content}>
        <FadeIn duration="0.8s" y={10}>
          <p className={styles.kicker}>Curated engineering expertise</p>
        </FadeIn>
        <FadeIn duration="0.85s" delay="0.08s" y={14}>
          <p className={styles.intro}>
            A focused view of my core expertise and the supporting capabilities
            I use to deliver backend-driven products end to end.
          </p>
        </FadeIn>

        <div className={styles.expertiseLayout}>
          <FadeIn duration="0.78s" delay="0.16s" y={14}>
            <FeaturedExpertiseCard expertise={featuredExpertise} />
          </FadeIn>

          <div className={styles.supportingColumn}>
            {supportingExpertise.map((expertise, index) => (
              <FadeIn
                duration="0.72s"
                delay={`${0.2 + index * 0.07}s`}
                key={expertise.id}
                y={10}
              >
                <SupportingExpertiseCard expertise={expertise} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
