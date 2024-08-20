import { FadeIn } from "@/app/_components/fadeIn/FadeIn";
import styles from "./headerSection.module.css";

export default function HeaderSection() {
  return (
    <div className={styles.header}>
      <FadeIn threshold={0.2} duration={"2s"} y={20}>
        <div className={styles.heading}>Portfolio</div>
      </FadeIn>
      <div className={styles.headingSub}>
        <FadeIn threshold={0.2} duration={"2s"} x={20}>
          <div className={styles.headingSub1}>Alexandre Vanhoutte</div>
        </FadeIn>
        <FadeIn threshold={0.2} duration={"2s"} x={-20}>
          <div className={styles.headingSub2}>Software Engineer</div>
        </FadeIn>
      </div>
    </div>
  );
}
