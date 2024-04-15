import ExperienceElement from "@/app/_components/experienceElement/ExperienceElement";
import styles from "./experienceSection.module.css";

interface Experience {
  name: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      name: "test",
      company: "Qwerky",
      startDate: "2024/02",
      endDate: "2024/02",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet accumsan dolor. Phasellus in congue ante, viverra auctor sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse aliquet vitae enim in convallis. Suspendisse cursus sagittis felis. Quisque non lectus sem. In cursus turpis.",
    },
    {
      name: "test",
      company: "Qwerky",
      startDate: "2024/02",
      endDate: "2024/02",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet accumsan dolor. Phasellus in congue ante, viverra auctor sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse aliquet vitae enim in convallis. Suspendisse cursus sagittis felis. Quisque non lectus sem. In cursus turpis.",
    },
  ];

  return (
    <div className={styles.experienceSection}>
      <div className={styles.title}>Experience</div>
      <div className={styles.categories}>
        {experiences.map((e, index) => (
          <ExperienceElement key={index} {...e} />
        ))}
      </div>
    </div>
  );
}
