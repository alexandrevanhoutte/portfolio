import { Titillium_Web } from "next/font/google";
import styles from "./flipCard.module.css";

const titilliumWeb = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

export default function FlipCard() {
  return (
    <div className={`${titilliumWeb.className} ${styles.flipCard}`}>
      <div className={styles.content}>
        <div className={styles.front}>Front</div>
        <div className={styles.back}>Back</div>
      </div>
    </div>
  );
}
