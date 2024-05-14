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
        <div className={styles.header}>
          <div className={styles.job}>{props.name}</div>
          <div className={styles.jobDetail}>
            {props.startDate} - {props.endDate} / {props.company}
          </div>
        </div>
        <div className={styles.description}>
          {props.description.split("\n").map((elem, index) => (
            <span key={index}>
              {elem}
              <br />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
