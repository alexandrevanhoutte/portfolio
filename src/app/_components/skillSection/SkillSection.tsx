import SectionTitle from "@/app/_components/sectionTitle/SectionTitle";
import SkillCategory from "@/app/_components/skillCategory/SkillCategory";
import { Skill } from "@/app/_interfaces/skill.interface";
import styles from "./skillSection.module.css";

interface SkillCategory {
  name: string;
  skills: Skill[];
}

export default function SkillSection() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Language",
      skills: [
        {
          name: "Typescript",
          image: "/typescript-logo.webp",
          backgroundColor: "#ececec",
        },
        {
          name: "Python",
          image: "/python-logo.webp",
          backgroundColor: "#ececec",
        },
        {
          name: "Java",
          image: "/java-logo.webp",
          backgroundColor: "#ececec",
        },
      ],
    },
    {
      name: "BackEnd Library And Framework",
      skills: [
        {
          name: "NestJs",
          image: "/typescript-logo.webp",
          backgroundColor: "#ececec",
        },
        {
          name: "Flask",
          image: "/python-logo.webp",
          backgroundColor: "#ececec",
        },
        {
          name: "FastAPI",
          image: "/java-logo.webp",
          backgroundColor: "#ececec",
        },
      ],
    },
    {
      name: "FrontEnd Library And Framework",
      skills: [
        {
          name: "React",
          image: "/react-logo.webp",
          backgroundColor: "#ececec",
        },
        {
          name: "NextJS",
          image: "/nextjs-logo.webp",
          backgroundColor: "#ececec",
        },
      ],
    },
    {
      name: "Cloud Services",
      skills: [
        {
          name: "AWS",
          image: "/aws-logo.webp",
          backgroundColor: "#ececec",
        },
        {
          name: "Azure",
          image: "/azure-logo.webp",
          backgroundColor: "#ececec",
        },
      ],
    },
    {
      name: "Version Control",
      skills: [
        {
          name: "Git",
          image: "/git-logo.webp",
          backgroundColor: "#ececec",
        },
      ],
    },
    {
      name: "Development Tools",
      skills: [
        {
          name: "Visual Studio Code",
          image: "/visual-studio-code-logo.webp",
          backgroundColor: "#ececec",
        },
        {
          name: "Jet Brains",
          image: "/jet-brain-logo.webp",
          backgroundColor: "#ececec",
        },
      ],
    },

    {
      name: "OS",
      skills: [
        {
          name: "MacOs",
          image: "/mac-os-logo.webp",
          backgroundColor: "#ececec",
        },
        {
          name: "Linux",
          image: "/linux-logo.webp",
          backgroundColor: "#ececec",
        },
        {
          name: "Windows",
          image: "/windows-logo.webp",
          backgroundColor: "#ececec",
        },
      ],
    },
  ];

  return (
    <div data-section className={styles.skillSection} id="skills">
      <SectionTitle title="Skills" />
      <div className={styles.categories}>
        {skillCategories.map((e, index) => (
          <SkillCategory key={index} {...e} />
        ))}
      </div>
    </div>
  );
}
