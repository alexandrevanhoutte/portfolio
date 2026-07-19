import { FadeIn } from "@/app/_components/fadeIn/FadeIn";
import CapabilityNode from "@/app/_components/skillSection/CapabilityNode";
import {
  ConnectorGroup,
  GroupTransition,
  SequenceConnector,
  VerticalTransition,
} from "@/app/_components/skillSection/SkillConnector";
import { capabilityGroups } from "@/app/_libs/skills";
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
              A practical overview of my experience across APIs, backend
              services, data platforms, distributed workflows, and production
              operations.
            </p>
          </FadeIn>
        </header>

        <FadeIn duration="0.9s" delay="0.16s" y={16}>
          <div className={styles.systemMap}>
            <div className={styles.coreFlow}>
              <div className={styles.coreNode}>
                <CapabilityNode capability={capabilityGroups[0]} />
              </div>
              <ConnectorGroup label="API CALLS" />
              <SequenceConnector />
              <div className={styles.coreNode}>
                <CapabilityNode capability={capabilityGroups[1]} />
              </div>
              <ConnectorGroup label="STORAGE" />
              <SequenceConnector />
              <div className={styles.coreNode}>
                <CapabilityNode capability={capabilityGroups[2]} />
              </div>
            </div>

            <VerticalTransition label="Supporting systems" />
            <GroupTransition label="Supporting systems" />

            <div className={`${styles.supportingGrid} ${styles.mobileGroup}`}>
              <CapabilityNode capability={capabilityGroups[3]} />
              <CapabilityNode capability={capabilityGroups[4]} />
            </div>

            <VerticalTransition label="Production operation" />
            <GroupTransition label="Production operation" />

            <div className={`${styles.operationsGrid} ${styles.mobileGroup}`}>
              <CapabilityNode capability={capabilityGroups[5]} />
              <CapabilityNode capability={capabilityGroups[6]} />
            </div>

            <p className={styles.legend}>
              interfaces → services → data · workflows · delivery · observability
            </p>
          </div>
        </FadeIn>

        <hr className={styles.divider} aria-hidden="true" />
      </div>
    </section>
  );
}
