
import { WaveClipPath } from "@/svg/waveClipPath";
import styles from "./header.module.css";
import { Titillium_Web } from 'next/font/google'

const titilliumWeb = Titillium_Web({
  weight: ['200', '300', '400', '600', '700', '900'],
  subsets: ['latin'],
});

export default function Header() {
  return (

    <div className={`${titilliumWeb.className} ${styles.header}`}>
      <WaveClipPath />
      <div className={styles.heading}>
        Portfolio
      </div>
      <div className={styles.headingSub}>
        <div className={styles.headingSub1}>Alexandre Vanhoutte</div>
        <div className={styles.headingSub2}>BackEnd Developer</div>
      </div>
    </div>
  );
}
