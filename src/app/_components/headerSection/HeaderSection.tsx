import { WaveClipPath } from "@/svg/waveClipPath";
import styles from "./headerSection.module.css";

export default function HeaderSection() {
  return (
    <div className={styles.header}>
      <WaveClipPath />
      <div className={styles.heading}>Portfolio</div>
      <div className={styles.headingSub}>
        <div className={styles.headingSub1}>Alexandre Vanhoutte</div>
        <div className={styles.headingSub2}>BackEnd Developer</div>
      </div>
    </div>
  );
}
