import SectionTitle from "@/app/_components/sectionTitle/SectionTitle";
import styles from "./aboutMeSection.module.css";

export default function ProjectSection() {
  return (
    <div data-section className={styles.projects} id="projects">
      <SectionTitle title="Projects" />
    </div>
  );
}
