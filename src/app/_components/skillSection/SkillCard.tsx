import { SkillGroup } from "@/app/_libs/skills";
import styles from "./skills.module.css";

interface SkillCardProps {
  group: SkillGroup;
}

export default function SkillCard({ group }: SkillCardProps) {
  return (
    <article className={styles.card}>
      <p className={styles.cardCategory}>{group.category}</p>
      <h3 className={styles.cardTitle}>{group.title}</h3>
      <p className={styles.skillList}>
        {group.skills.map((skill, index) => (
          <span key={skill}>
            {skill}
            {index < group.skills.length - 1 && (
              <span className={styles.separator}> · </span>
            )}
          </span>
        ))}
      </p>
    </article>
  );
}
