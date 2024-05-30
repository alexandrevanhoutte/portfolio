import ExperienceElement from "@/app/_components/experienceElement/ExperienceElement";
import SectionTitle from "@/app/_components/sectionTitle/SectionTitle";
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
        I am currently responsible for managing the backend aspects of several projects.

        Achievements:      
        - I managed the development of RestAPI and GraphQL API, ensuring smooth integration of web and mobile applications;
        - We updated the search engine to optimize results, leading to an improvement in quality and efficiency;    
        - We implemented new security measures to protect user data;
        - We ensured a seamless and secure payment experience for all users;
        - We improved code stability by introducing automated regression tests;
        - We implemented CI/CD process to easily deploy our application for front end development and for testing and production environnement.
      `,
    },
    {
      name: "Software engineer - 과장",
      company: "(주)엠오에스에이 Mobile OS",
      startDate: "2019/10",
      endDate: "2021/10",
      description: `
        I worked on several projects using NLP (Natural Language Processing).

        Achievements:
        - We developed a REST API to improve search functionality for Korean news articles, significantly boosting the retrieval and relevance of information;
        - We designed and implemented a REST API capable of analyzing company data, allowing organizations to make informed decisions based on comprehensive insights;
        - We engineered an internal library proficient in lemmatizing Korean text and assigning part-of-speech tags to each word, thus improving linguistic analysis capabilities;
        - I implemented a server infrastructure, centralizing the distribution of libraries and components across all internal projects. This initiative not only improved collaboration but also streamlined development workflows;
        - We implemented CI/CD process to easily deploy our application for front end development and for testing and production environnement.
      `,
    },
    {
      name: "DevOps on 2 SNCF projects",
      company: "Capgemini",
      startDate: "2019/02",
      endDate: "2019/10",
      description: `
        To improve operational efficiency and streamline workflows, I developed various internal applications, thus contributing to time saving and better collaboration between coworkers.

        Achievements:
        - We automated health checks for modules across all applications, significantly reducing manual effort and ensuring accurate and timely updates;
        - We implemented a centralized logging system for all services, improving the clarity and accessibility of logs, thus simplifying troubleshooting and maintenance tasks;
        - We improved the ticket management process by consolidating tickets from three different ticketing tools. This consolidation not only saved team members time, but also enabled comprehensive reporting for clients. Additionally, it provided managers with a clear visualization of task priorities, thus contributing to more informed decision-making and effective task management.
      `,
    },
    {
      name: "Fullstack Developer",
      company: "Vekia",
      startDate: "2018/10",
      endDate: "2019/02",
      description: `
        I worked on the development of a sale calculation project using machine learning. I meanly developed the interface which identifies stores which have similar characteristics in order to help companies manage stocks more easily.​
      `,
    },
    {
      name: "Test developer",
      company: "Vekia",
      startDate: "2017/10",
      endDate: "2018/02",
      description: `
        I developed and tested inventory management tools. Moreover, I brought a new solution to develop tests more easily and to have better communication within the team.

        Achievements:​
        - I elevated code stability by introducing automated regression tests
      `,
    },
  ];

  return (
    <div data-section className={styles.experienceSection} id="experiences">
      <SectionTitle title="Experiences" />
      <div className={styles.experiences}>
        {experiences.map((e, index) => (
          <ExperienceElement key={index} {...e} />
        ))}
      </div>
    </div>
  );
}
