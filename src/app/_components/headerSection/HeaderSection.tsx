import { FadeIn } from "@/app/_components/fadeIn/FadeIn";
import { WaveClipPath } from "@/app/_svg/waveClipPath";
import styles from "./headerSection.module.css";

export default function HeaderSection() {
  return (
    <div className={styles.header}>
      <WaveClipPath />
      <FadeIn threshold={0.2} duration={"2s"} y={10}>
        <div className={styles.heading}>Portfolio</div>
      </FadeIn>
      <div className={styles.headingSub}>
        <FadeIn threshold={0.2} duration={"2s"} x={10}>
          <div className={styles.headingSub1}>Alexandre Vanhoutte</div>
        </FadeIn>
        <FadeIn threshold={0.2} duration={"2s"} x={-10}>
          <div className={styles.headingSub2}>BackEnd Developer</div>
        </FadeIn>
      </div>
    </div>
  );
}
