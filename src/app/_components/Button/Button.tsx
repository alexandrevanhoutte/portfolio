import Loader from "@/app/_components/loader/Loader";
import { ReactNode } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  isLoading?: boolean;
  disabled?: boolean;
  icon: ReactNode;
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export default function Button(props: ButtonProps) {
  const isDisabled = Boolean(props.disabled || props.isLoading);

  return (
    <button
      aria-busy={props.isLoading}
      className={`${styles.button} ${isDisabled ? styles.buttonDisabled : ""} ${
        props.className ?? ""
      }`}
      disabled={isDisabled}
      type={props.type ?? "submit"}
    >
      <div className={`${styles.icon} ${props.iconClassName ?? ""}`}>
        {!props.isLoading ? props.icon : <Loader />}
      </div>
      <div className={`${styles.name} ${props.textClassName ?? ""}`}>{props.text}</div>
    </button>
  );
}
