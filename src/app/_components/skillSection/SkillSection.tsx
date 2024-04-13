import FlipCard from "@/app/_components/flipCard/FlipCard";
import { Titillium_Web } from "next/font/google";
import styles from "./skillSection.module.css";

const titilliumWeb = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

export default function SkillSection() {
  return (
    <div className={`${titilliumWeb.className} ${styles.skillSection}`}>
      <div className={styles.title}>Skills</div>
      <div className={styles.skillCategory}>
        <div className={styles.skillCategory__title}>BackEnd</div>
        <div className={styles.skillCategory__skills}>
          <FlipCard />
        </div>
      </div>
    </div>
  );
}
