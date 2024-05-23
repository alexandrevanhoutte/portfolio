"use server";

import fs from "fs";
import path from "path";

export interface Project {
  id: number;
  name: string;
  url: string;
  description: string;
  pictureUrl: string;
  mainRole: string;
  mainStacks: string[];
}

export async function getAllProjects() {
  const dataDirectory = path.join(process.cwd(), "/app/data");
  const fileContents = fs.readFileSync(
    dataDirectory + "/projects.json",
    "utf8"
  );
  const projects: Project[] = JSON.parse(fileContents);
  return projects;
}

export async function getProjectById(id: number) {
  const projects = await getAllProjects();
  return projects.find((project) => project.id === id);
}
