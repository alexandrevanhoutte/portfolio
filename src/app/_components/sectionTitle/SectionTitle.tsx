import styles from "./sectionTitle.module.css";

type SectionTitleProps = {
  title: string;
  className?: string;
};

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <div className={`${styles.sectionTitle} ${props.className ?? ""}`}>
      {props.title}
    </div>
  );
}
