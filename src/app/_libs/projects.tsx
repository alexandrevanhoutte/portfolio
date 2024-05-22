import fs from "fs";
import path from "path";

const projectsFilePath = path.join(process.cwd(), "data", "projects.json");

interface Project {
  id: number;
  name: string;
  url: string;
  description: string;
  pictureUrl: string;
  mainRole: string;
  mainStacks: string[];
}

export function getAllProjects() {
  const fileContents = fs.readFileSync(projectsFilePath, "utf8");
  const projects: Project[] = JSON.parse(fileContents);
  return projects;
}

export function getProjectById(id: number) {
  const projects = getAllProjects();
  return projects.find((project) => project.id === id);
}
