import Image from "next/image";
import styles from "./header.module.css";
import { Titillium_Web } from 'next/font/google'

const titilliumWeb = Titillium_Web({
  weight: ['200', '300', '400', '600', '700', '900'],
  subsets: ['latin'],
});

export default function Header() {
  return (
    <header className={`${titilliumWeb.className} ${styles.header}`}>
      <div className={styles.heading}>
        Portfolio
      </div>
      <div className={styles.headingSub}>
        <div className={styles.headingSub1}>Alexandre Vanhoutte</div>
        <div className={styles.headingSub2}>BackEnd Developer</div>
      </div>
    </header>
  );
}
