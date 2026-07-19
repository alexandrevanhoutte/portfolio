import { FadeIn } from "@/app/_components/fadeIn/FadeIn";
import styles from "./aboutMeSection.module.css";

export default function AboutMeSection() {
  return (
    <section className={styles.about} id="about-me" data-section>
      <div className={styles.container}>
        <hr className={styles.divider} aria-hidden="true" />
        <div className={styles.layout}>
          <div className={styles.numberCell}>
            <FadeIn duration="0.8s" y={10}>
              <span className={styles.number}>01</span>
            </FadeIn>
          </div>
          <div className={styles.headingCell}>
            <FadeIn duration="0.9s" delay="0.12s" y={16}>
              <h2 className={styles.heading}>About Me</h2>
            </FadeIn>
          </div>
          <div className={styles.textCell}>
            <FadeIn duration="0.85s" delay="0.08s" y={14}>
              <div className={styles.text}>
                <p>
                  I&apos;m a backend engineer specializing in Go and backend
                  systems for complex software products.
                </p>
                <p>
                  Since 2019, I&apos;ve built services and domain models across
                  industrial software, search, and natural language processing.
                  My recent work focuses on carbon calculation workflows, API
                  design, and time-series data processing.
                </p>
                <p>
                  I design reliable systems around user needs while keeping
                  long-term product evolution in mind.
                </p>
              </div>
            </FadeIn>
          </div>
          <div className={styles.expertiseCell}>
            <FadeIn duration="0.8s" delay="0.16s" y={12}>
              <p className={styles.expertise}>
                Go / Backend Systems / API Design / Distributed Systems / Data
                Processing
              </p>
            </FadeIn>
          </div>
        </div>
        <hr className={styles.divider} aria-hidden="true" />
      </div>
    </section>
  );
}
