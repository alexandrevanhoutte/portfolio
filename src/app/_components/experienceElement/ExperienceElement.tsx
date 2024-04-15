import styles from "./experienceElement.module.css";

type ExperienceElementProps = {
  name: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export default function ExperienceElement(props: ExperienceElementProps) {
  return (
    <div className={styles.experienceElement}>
      <div className={styles.bar}>
        <div className={styles.leftBar} />
        <div className={styles.dot} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>{props.name}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </div>
  );
}
