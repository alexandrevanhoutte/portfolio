import { Project } from "@/app/_components/projectSection/ProjectSection";
import styles from "./projectListElement.module.css";

type ProjectListElementProps = {
  key: number;
  project: Project;
  handleHouseEnter: (pictureUrl: string) => void;
};

export default function ProjectListElement(props: ProjectListElementProps) {
  return (
    <div
      key={props.key}
      className={styles.project}
      onMouseEnter={() => props.handleHouseEnter(props.project.pictureUrl)}
    >
      <a className={styles.link} href={props.project.url}>
        {props.project.name}
      </a>
    </div>
  );
}
