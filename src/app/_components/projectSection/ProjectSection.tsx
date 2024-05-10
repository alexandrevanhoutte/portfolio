"use client";

import SectionTitle from "@/app/_components/sectionTitle/SectionTitle";
import Image from "next/image";
import { useState } from "react";
import styles from "./projectSection.module.css";

interface Project {
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
      pictureUrl: "/header-background.jpg",
    },
    {
      name: "Markurz",
      url: "https://chromewebstore.google.com/detail/markurz/lnbfijiimlnnpjmfgmfdmdmlobadcloo?pli=1",
      description: "todo",
      pictureUrl: "/header-background.jpg",
    },
    {
      name: "Deepform",
      description: "todo",
      pictureUrl: "/header-background.jpg",
    },
    {
      name: "BuilderFul",
      url: "https://www.builderful.co.kr",
      description: "todo",
      pictureUrl: "/header-background.jpg",
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
              alt="Profile picture"
            />
          ) : (
            <></>
          )}
        </div>
        <div className={styles.projectsView}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.project}
              onMouseEnter={() => handleHouseEnter(project.pictureUrl)}
            >
              {project.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
