"use client";

import ProjectListElement from "@/app/_components/projectListElement/ProjectListElement";
import SectionTitle from "@/app/_components/sectionTitle/SectionTitle";
import { Project, getAllProjects } from "@/app/_libs/projects";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./projectSection.module.css";

export default function ProjectSection() {
  const [projects, setProjects] = useState<Project[]>();
  const [activeProject, setActiveProject] = useState<Project>();

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getAllProjects();
      setProjects(projects);
      setActiveProject(projects[0]);
    };

    fetchData();
  }, []);

  const handleHouseEnter = (project: Project) => {
    setActiveProject(project);
  };

  return (
    <div data-section className={styles.projects} id="projects">
      <SectionTitle title="Projects" />
      <div className={styles.content}>
        <div className={styles.picture}>
          {activeProject?.pictureUrl && (
            <Image
              className={styles.image}
              src={activeProject?.pictureUrl}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt={`${activeProject?.name} project screenshot`}
            />
          )}
        </div>
        <div className={styles.projectsView}>
          {projects?.map((project, index) => (
            <ProjectListElement
              key={index}
              project={project}
              handleHouseEnter={handleHouseEnter}
              isActive={project.id === activeProject?.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
