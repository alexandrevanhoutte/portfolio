import SectionTitle from "@/app/_components/sectionTitle/SectionTitle";
import Image from "next/image";
import styles from "./aboutMeSection.module.css";

export default function AboutMeSection() {
  return (
    <div data-section className={styles.aboutMe} id="about-me">
      <SectionTitle title="About me" />
      <div className={styles.content}>
        <Image
          className={styles.image}
          src="/header-background.jpg"
          width={200}
          height={200}
          alt="Profile picture"
        />
        <div className={styles.description}>
          After graduating from {"{"}EPITECH.{"}"} and gaining several years of
          professional experience in Korea, I am currently leading backend
          development in Seoul. Quick to learn, adaptable, and responsible, I am
          proficient in several technologies and I acquired a strong
          understanding of development workflows and methodologies.
        </div>
      </div>
    </div>
  );
}
