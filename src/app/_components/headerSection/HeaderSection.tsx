import { FadeIn } from "@/app/_components/fadeIn/FadeIn";
import styles from "./headerSection.module.css";

export default function HeaderSection() {
  return (
    <div className={styles.header}>
      <div className={styles.heroStack}>
        <FadeIn threshold={0.2} duration={"2s"} y={20}>
          <h1 className={styles.name}>Alexandre Vanhoutte</h1>
        </FadeIn>
        <FadeIn threshold={0.2} duration={"2s"} x={20}>
          <p className={styles.role}>Software Engineer</p>
        </FadeIn>
        <FadeIn threshold={0.2} duration={"2s"} x={-20}>
          <p className={styles.tagline}>
            Backend-focused engineer building reliable products in Go and modern
            web stacks.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
