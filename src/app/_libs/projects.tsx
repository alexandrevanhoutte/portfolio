"use server";

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
  // const dataDirectory = path.resolve("./public/data");
  // const fileContents = fs.readFileSync(
  //   dataDirectory + "/projects.json",
  //   "utf8"
  // );
  // const projects: Project[] = JSON.parse(fileContents);
  // return projects;
  return [
    {
      id: 8,
      name: "SaveEat",
      url: "https://www.saveeatapp.com/",
      description:
        "Every day, healthy food is thrown away. Good food that was not sold that day is unfortunately being thrown away. Through SaveEat, together, we can reduce wasted food!",
      pictureUrl: "/project-picture/saveeat.png",
      mainRole:
        "Backend Systems Engineer (Backend Development, Backend Deployment, Database Management)",
      mainStacks: [
        "NestJs",
        "PostgreSQL",
        "Azure App Service",
        "Azure Blob",
        "Github Actions",
      ],
    },
    {
      id: 7,
      name: "Construckit",
      url: "https://www.construckit.com/",
      description:
        "Solution for construction project teams by improving the communication and approval workflow",
      pictureUrl: "/project-picture/construckit.png",
      mainRole:
        "Backend Systems Engineer (Backend Development, Backend Deployment, Database Management)",
      mainStacks: [
        "NestJs",
        "PostgreSQL",
        "Azure App Service",
        "Azure Blob",
        "Github Actions",
      ],
    },
    {
      id: 6,
      name: "Markurz",
      url: "https://chromewebstore.google.com/detail/markurz/lnbfijiimlnnpjmfgmfdmdmlobadcloo?pli=1",
      description:
        "Easily create and send tasks, notes, and reminders to your favorite productivity apps.",
      pictureUrl: "/project-picture/markurz.png",
      mainRole:
        "Lead Backend Systems Engineer (Backend Development, Backend Deployment, Database Management)",
      mainStacks: [
        "NestJs",
        "PostgreSQL",
        "Azure App Service",
        "Azure Blob",
        "Github Actions",
      ],
    },
    {
      id: 5,
      name: "Deepform",
      url: "https://deepform.net",
      description:
        "Deepform helps you automate building feasibility calculations straight from 3D models without script or code.",
      pictureUrl: "/project-picture/deepform.png",
      mainRole:
        "Lead Backend Systems Engineer (Backend Development, Backend Deployment, Database Management)",
      mainStacks: [
        "NestJs",
        "PostgreSQL",
        "AWS Lambda",
        "AWS CloudFront",
        "AWS S3",
        "AWS ECS/ECR",
        "Github Actions",
      ],
    },
    {
      id: 4,
      name: "BuilderFul",
      url: "https://www.builderful.co.kr",
      description:
        "Builderful allows designers to discover and order materials. It will directly deal with multiple vendors in a few clicks, without the inconvenience of contacting them one by one.",
      pictureUrl: "/project-picture/builderful.png",
      mainRole:
        "Lead Backend Systems Engineer (Backend Development, Backend Deployment, Database Management)",
      mainStacks: [
        "NestJs",
        "PostgreSQL",
        "AWS CloudFront",
        "AWS S3",
        "AWS ECS/ECR",
        "Github Actions",
      ],
    },
    {
      id: 3,
      name: "MOS NLP (Python Library)",
      url: "http://takeview.co.kr/",
      description:
        "Library to preprocess of korea content. It also helps managing the content and see daily statistics about crawled content on the web.",
      pictureUrl: "/project-picture/mos-nlp.webp",
      mainRole:
        "Backend Systems Engineer (Backend Development, Backend Deployment, Database Management)",
      mainStacks: ["Python", "Flask, then FastAPI", "Pypi Server", "Jenkins"],
    },
    {
      id: 2,
      name: "Spirit Hunter",
      url: "https://eip.epitech.eu/2018/spirithunter/",
      description:
        "Spirit Hunter is an Epitech Innovative Project. It's a virtual reality mobile game using Google Cardboard and smartwatch.",
      pictureUrl: "/project-picture/spirit-hunter.png",
      mainRole: "Team's Leader, Android developer, C++ developer",
      mainStacks: ["Android", "C++"],
    },
    {
      id: 1,
      name: "Cells Runner",
      url: "https://v3.globalgamejam.org/2018/games/cells-runner",
      description:
        "Cells Runner is a 2D multiplayer game (from 2 players and up to 4) that takes place inside human veins. Made during the Global Game Jam 2018. The theme was 'Transmission'",
      pictureUrl: "/project-picture/cells-runner.png",
      mainRole: "Developer",
      mainStacks: ["Unity", "C#"],
    },
    {
      id: 0,
      name: "Portfolio",
      url: "https://www.alexandrevanhoutte.com",
      description: "My personal website with my resume, my projects, ...",
      pictureUrl: "/project-picture/portfolio.png",
      mainRole: "Developer",
      mainStacks: ["Typescript", "NextJs", "HTML/CSS"],
    },
  ];
}

export async function getProjectById(id: number) {
  const projects = await getAllProjects();
  return projects.find((project) => project.id === id);
}
