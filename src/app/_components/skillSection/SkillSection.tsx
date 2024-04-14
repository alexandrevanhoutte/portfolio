import SkillCategory from "@/app/_components/skillCategory/SkillCategory";
import { Skill } from "@/app/_interfaces/skill.interface";
import styles from "./skillSection.module.css";

interface Tutu {
  name: string;
  skills: Skill[];
}

export default function SkillSection() {
  const skillCategories: Tutu[] = [
    {
      name: "test",
      skills: [
        {
          name: "Typescript",
          image: "/typescript-logo.webp",
          backgroundColor: "#8AC4E8",
        },
        {
          name: "Typescript",
          image: "/typescript-logo.webp",
          backgroundColor: "#ececec",
        },
      ],
    },
  ];

  return (
    <div className={styles.skillSection}>
      <div className={styles.title}>Skills</div>
      <div>
        {skillCategories.map((e, index) => (
          <SkillCategory key={index} {...e} />
        ))}
      </div>
    </div>
  );
}
