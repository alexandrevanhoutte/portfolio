import styles from "./footerElement.module.css";

type FooterElementProps = {
  icon: string;
  value: string;
};

export default function FooterElement(props: FooterElementProps) {
  return (
    <div className={styles.footerElement}>
      <span>{props.value}</span>
    </div>
  );
}
