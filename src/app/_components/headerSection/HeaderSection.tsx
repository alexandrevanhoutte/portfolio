import { FadeIn } from "@/app/_components/fadeIn/FadeIn";
import styles from "./headerSection.module.css";

export default function HeaderSection() {
  return (
    <div className={styles.header}>
      <div className={styles.heroStack}>
        <FadeIn threshold={0.2} duration={"1.2s"} y={18}>
          <h1 className={styles.name}>Alexandre Vanhoutte</h1>
        </FadeIn>
        <FadeIn threshold={0.2} duration={"1s"} delay="0.08s" x={16}>
          <p className={styles.role}>Software Engineer</p>
        </FadeIn>
        <FadeIn threshold={0.2} duration={"0.95s"} delay="0.16s" x={-14}>
          <p className={styles.availability}>
            <span className={styles.availabilityDot} aria-hidden />
            Open to backend-focused opportunities
          </p>
        </FadeIn>
        <FadeIn threshold={0.2} duration={"1s"} delay="0.24s" x={-18}>
          <p className={styles.tagline}>
            I build reliable backend products and enjoy turning complex technical
            problems into simple, practical outcomes for teams and users.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
