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
        { name: "Typescript", image: "/skill-logo/typescript-logo.webp" },
        { name: "Python", image: "/skill-logo/python-logo.webp" },
        { name: "Java", image: "/skill-logo/java-logo.webp" },
      ],
    },
    {
      name: "Backend Tools",
      skills: [
        { name: "NestJs", image: "/skill-logo/nestjs-logo.webp" },
        { name: "Flask", image: "/skill-logo/flask-logo.webp" },
        { name: "FastAPI", image: "/skill-logo/fastapi-logo.webp" },
      ],
    },
    {
      name: "Frontend Tools",
      skills: [
        { name: "React", image: "/skill-logo/react-logo.webp" },
        { name: "NextJS", image: "/skill-logo/nextjs-logo.webp" },
      ],
    },
    {
      name: "DevOps",
      skills: [
        { name: "Docker", image: "/skill-logo/docker-logo.png" },
        { name: "Kubernetes", image: "/skill-logo/kubernetes-logo.png" },
      ],
    },
    {
      name: "Cloud Services",
      skills: [
        { name: "AWS", image: "/skill-logo/aws-logo.webp" },
        { name: "Azure", image: "/skill-logo/azure-logo.webp" },
      ],
    },
    {
      name: "Version Control",
      skills: [{ name: "Git", image: "/skill-logo/git-logo.webp" }],
    },
    {
      name: "Development Tools",
      skills: [
        {
          name: "Visual Studio Code",
          image: "/skill-logo/visual-studio-code-logo.webp",
        },
        { name: "Jet Brains", image: "/skill-logo/jet-brain-logo.webp" },
      ],
    },
    {
      name: "OS",
      skills: [
        { name: "MacOs", image: "/skill-logo/mac-os-logo.webp" },
        { name: "Linux", image: "/skill-logo/linux-logo.webp" },
        { name: "Windows", image: "/skill-logo/windows-logo.webp" },
      ],
    },
    {
      name: "CI/CD",
      skills: [
        { name: "Github Actions", image: "/skill-logo/ghaction-logo.webp" },
        { name: "Jenkins", image: "/skill-logo/jenkins-logo.webp" },
      ],
    },
    {
      name: "Testing",
      skills: [
        { name: "Jest", image: "/skill-logo/jest-logo.webp" },
        { name: "Cucumber", image: "/skill-logo/cucumber-logo.webp" },
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
