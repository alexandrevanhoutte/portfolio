import { ReactNode } from "react";
import styles from "./footerElement.module.css";

type FooterElementProps = {
  icon: ReactNode;
  value: string;
  link: string;
};

export default function FooterElement(props: FooterElementProps) {
  return (
    <div className={styles.footerElement}>
      <a href={props.link} className={styles.link}>
        <div className={styles.icon}>{props.icon}</div>
        <div>{props.value}</div>
      </a>
    </div>
  );
}
