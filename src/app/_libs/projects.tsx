export interface Project {
  id: number;
  name: string;
  url?: string;
  description: string;
  pictureUrl: string;
  mainRole: string;
  mainStacks: string[];
}

export const projects: Project[] = [
    {
      id: 8,
      name: "SaveEat",
      description:
        "A platform that helps stores sell unsold food instead of throwing it away.",
      pictureUrl: "/project-picture/saveeat.png",
      mainRole:
        "Backend Systems Engineer (Backend Development, Backend Deployment, Database Management)",
      mainStacks: [
        "NestJS",
        "PostgreSQL",
        "Azure App Service",
        "Azure Blob Storage",
        "GitHub Actions",
      ],
    },
    {
      id: 7,
      name: "Construckit",
      description:
        "A collaboration platform for construction teams, focused on communication and approval workflows.",
      pictureUrl: "/project-picture/construckit.png",
      mainRole:
        "Backend Systems Engineer (Backend Development, Backend Deployment, Database Management)",
      mainStacks: [
        "NestJS",
        "PostgreSQL",
        "Azure App Service",
        "Azure Blob Storage",
        "GitHub Actions",
      ],
    },
    {
      id: 6,
      name: "Markurz",
      description:
        "Easily create and send tasks, notes, and reminders to your favorite productivity apps.",
      pictureUrl: "/project-picture/markurz.png",
      mainRole:
        "Lead Backend Engineer",
      mainStacks: [
        "NestJS",
        "PostgreSQL",
        "Azure App Service",
        "Azure Blob Storage",
        "GitHub Actions",
      ],
    },
    {
      id: 5,
      name: "Deepform",
      description:
        "A tool for running building-feasibility calculations from 3D models without writing code.",
      pictureUrl: "/project-picture/deepform.png",
      mainRole:
        "Lead Backend Engineer",
      mainStacks: [
        "NestJS",
        "PostgreSQL",
        "AWS Lambda",
        "AWS CloudFront",
        "AWS S3",
        "AWS ECS/ECR",
        "GitHub Actions",
      ],
    },
    {
      id: 4,
      name: "BuilderFul",
      description:
        "A platform for designers to discover materials and request orders from multiple vendors in one place.",
      pictureUrl: "/project-picture/builderful.png",
      mainRole:
        "Lead Backend Engineer",
      mainStacks: [
        "NestJS",
        "PostgreSQL",
        "AWS CloudFront",
        "AWS S3",
        "AWS ECS/ECR",
        "GitHub Actions",
      ],
    },
    {
      id: 3,
      name: "MOS NLP (Python Library)",
      url: "http://takeview.co.kr/",
      description:
        "A Python library for preprocessing Korean content, managing crawled data, and viewing daily collection statistics.",
      pictureUrl: "/project-picture/mos-nlp.webp",
      mainRole:
        "Backend Systems Engineer (Backend Development, Backend Deployment, Database Management)",
      mainStacks: ["Python", "Flask, then FastAPI", "PyPI Server", "Jenkins"],
    },
    {
      id: 2,
      name: "Spirit Hunter",
      description:
        "A mobile virtual-reality game using Google Cardboard and a smartwatch as input devices.",
      pictureUrl: "/project-picture/spirit-hunter.png",
      mainRole: "Team's Leader, Android developer, C++ developer",
      mainStacks: ["Android", "C++"],
    },
    {
      id: 1,
      name: "Cells Runner",
      url: "https://v3.globalgamejam.org/2018/games/cells-runner",
      description:
        "A 2–4 player game set inside the human bloodstream, created during Global Game Jam 2018 for the theme “Transmission.”",
      pictureUrl: "/project-picture/cells-runner.png",
      mainRole: "Developer",
      mainStacks: ["Unity", "C#"],
    },
    {
      id: 0,
      name: "Portfolio",
      url: "https://www.alexandrevanhoutte.com",
      description:
        "The portfolio you are currently viewing, built with Next.js and TypeScript.",
      pictureUrl: "/project-picture/portfolio.png",
      mainRole: "Developer",
      mainStacks: ["TypeScript", "Next.js", "HTML", "CSS"],
    },
  ];

export function getAllProjects() {
  return projects;
}

export function getProjectById(id: number) {
  return projects.find((project) => project.id === id);
}
