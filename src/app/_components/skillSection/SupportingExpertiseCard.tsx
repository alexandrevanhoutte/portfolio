import { SupportingExpertise } from "@/app/_libs/skills";
import styles from "./skills.module.css";

interface SupportingExpertiseCardProps {
  expertise: SupportingExpertise;
}

export default function SupportingExpertiseCard({
  expertise,
}: SupportingExpertiseCardProps) {
  return (
    <article className={styles.supportingCard}>
      <h3 className={styles.supportingTitle}>{expertise.title}</h3>
      <p className={styles.supportingDescription}>{expertise.description}</p>
      <ul className={styles.supportingTagList}>
        {expertise.tags.map((tag) => (
          <li className={styles.supportingTag} key={`${expertise.id}-${tag}`}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
