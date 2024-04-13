import FooterElement from "@/app/_components/footerElement/FooterElement";
import styles from "./footerSection.module.css";

interface FooterElement {
  icon: string;
  value: string;
}

export default function FooterSection() {
  const footerElementList: FooterElement[] = [
    {
      icon: "test",
      value: "test",
    },
  ];

  return (
    <div className={styles.footer}>
      {footerElementList.map((e, index) => (
        <FooterElement key={index} icon={e.icon} value={e.value} />
      ))}
    </div>
  );
}
