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
      name: "Lead BackEnd Developer",
      company: "Qwerky",
      startDate: "Nov 2021",
      endDate: "Present",
      description: `
        ​I am currently responsible for managing the backend aspects of several projects.​
        
        Achievements: ​
        - Led the management of a GraphQL API, ensuring smooth integration of web and mobile applications.
        - Redesigned the search system to optimize research outcomes, leading to a notable improvement in quality and efficiency, exemplified by a 15% reduction in research time and more larger and pertinent result.​
        - Ensured security for sensitive user data.​
        - Ensured a seamless and secure payment experience for all users.​
        - Elevated code stability by introducing automated regression tests​
        - Streamlined production deployment processes, leading to a 40% decrease in deployment-related incidents",
      `,
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
      <div className={styles.experiences}>
        {experiences.map((e, index) => (
          <ExperienceElement key={index} {...e} />
        ))}
      </div>
    </div>
  );
}
