import { Project } from "@/app/_libs/projects";
import { useRouter } from "next/navigation";
import styles from "./projectListElement.module.css";

type ProjectListElementProps = {
  project: Project;
  handleHouseEnter: (project: Project) => void;
  isActive: boolean;
};

export default function ProjectListElement(props: ProjectListElementProps) {
  const router = useRouter();

  return (
    <div
      className={`${styles.project} ${props.isActive ? styles.active : ""}`}
      onMouseEnter={() => props.handleHouseEnter(props.project)}
      onClick={() => router.push(`projects/${props.project.id}`)}
    >
      {props.project.name}
    </div>
  );
}
