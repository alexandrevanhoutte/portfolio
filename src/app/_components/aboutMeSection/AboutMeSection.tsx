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
                  I&apos;m a backend engineer with 6+ years of experience
                  building APIs and data-processing systems. My main stack is
                  Go, PostgreSQL, and Kubernetes, and I have also built NestJS
                  services in TypeScript and GraphQL APIs in production.
                </p>
                <p>
                  At Glassdome, I work on calculation workflows, time-series
                  data, multi-tenant systems, and backend performance.
                  Previously, I worked on search, authentication, payments, and
                  Korean NLP.
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
