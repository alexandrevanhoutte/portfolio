import styles from "./sectionTitle.module.css";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle(props: SectionTitleProps) {
  return <div className={styles.sectionTitle}>{props.title}</div>;
}
