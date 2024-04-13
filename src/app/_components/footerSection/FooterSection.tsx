import FooterElement from "@/app/_components/footerElement/FooterElement";
import { LogoGithub } from "@/svg/LogoGithub";
import { LogoLinkedin } from "@/svg/logoLinkedin";
import styles from "./footerSection.module.css";

interface FooterElement {
  icon: JSX.Element;
  value: string;
  link: string;
}

export default function FooterSection() {
  const footerElementList: FooterElement[] = [
    {
      icon: <LogoLinkedin />,
      value: "Linkedin",
      link: "https://www.linkedin.com/in/alexandre-vanhoutte/",
    },
    {
      icon: <LogoGithub />,
      value: "Github",
      link: "https://github.com/alexandrevanhoutte/",
    },
  ];

  return (
    <div className={styles.footer}>
      {footerElementList.map((e, index) => (
        <FooterElement key={index} {...e} />
      ))}
    </div>
  );
}
