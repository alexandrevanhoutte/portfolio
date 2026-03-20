import Button from "@/app/_components/Button/Button";
import { ReactNode } from "react";
import styles from "./externalButton.module.css";

interface ExternalButtonProps {
  isLoading?: boolean;
  icon: ReactNode;
  text: string;
  href: string;
}

export default function ExternalButton(props: ExternalButtonProps) {
  return (
    <a className={styles.link} href={props.href}>
      <Button isLoading={props.isLoading} icon={props.icon} text={props.text} />
    </a>
  );
}
