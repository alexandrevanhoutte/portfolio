import SkillFlipCard from "@/app/_components/skillFlipCard/SkillFlipCard";
import { Skill } from "@/app/_interfaces/skill.interface";
import styles from "./skillCategory.module.css";

type SkillCategory = {
  name: string;
  skills: Skill[];
};

export default function SkillCategory(props: SkillCategory) {
  return (
    <div className={styles.skillCategory}>
      <div className={styles.title}>{props.name}</div>
      <div className={styles.skills}>
        {props.skills.map((e, index) => (
          <SkillFlipCard key={index} {...e} />
        ))}
      </div>
    </div>
  );
}
