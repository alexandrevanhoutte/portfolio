"use client";

import ProjectListElement from "@/app/_components/projectListElement/ProjectListElement";
import SectionTitle from "@/app/_components/sectionTitle/SectionTitle";
import Image from "next/image";
import { useState } from "react";
import styles from "./projectSection.module.css";

export interface Project {
  name: string;
  url?: string;
  description: string;
  pictureUrl: string;
}

export default function ProjectSection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      name: "SaveEat",
      url: "https://www.saveeatapp.com/",
      description: "todo",
      pictureUrl: "/project-picture/saveeat.png",
    },
    {
      name: "Markurz",
      url: "https://chromewebstore.google.com/detail/markurz/lnbfijiimlnnpjmfgmfdmdmlobadcloo?pli=1",
      description: "todo",
      pictureUrl: "/project-picture/markurz.png",
    },
    {
      name: "Deepform",
      url: "https://deepform.net",
      description: "todo",
      pictureUrl: "/project-picture/deepform.png",
    },
    {
      name: "BuilderFul",
      url: "https://www.builderful.co.kr",
      description: "todo",
      pictureUrl: "/project-picture/builderful.png",
    },
    {
      name: "MOS NLP (Python Library)",
      url: "http://takeview.co.kr/",
      description: "todo",
      pictureUrl: "/project-picture/mos-nlp.webp",
    },
    {
      name: "Spirit Hunter",
      url: "https://eip.epitech.eu/2018/spirithunter/",
      description: "todo",
      pictureUrl: "/project-picture/spirit-hunter.png",
    },
  ];

  const handleHouseEnter = (link: string) => {
    setActiveImage(link);
  };

  return (
    <div data-section className={styles.projects} id="projects">
      <SectionTitle title="Projects" />
      <div className={styles.content}>
        <div className={styles.picture}>
          {activeImage ? (
            <Image
              className={styles.image}
              src={activeImage ? activeImage : ""}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              objectFit="contain"
              alt="Project screenshot"
            />
          ) : (
            <></>
          )}
        </div>
        <div className={styles.projectsView}>
          {projects.map((project, index) => (
            <ProjectListElement
              key={index}
              project={project}
              handleHouseEnter={handleHouseEnter}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
