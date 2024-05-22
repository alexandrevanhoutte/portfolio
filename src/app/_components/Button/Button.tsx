import Loader from "@/app/_components/loader/Loader";
import styles from "./button.module.css";

interface ButtonProps {
  isLoading?: boolean;
  icon: JSX.Element;
  text: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button className={styles.button} type="submit">
      <div className={styles.icon}>
        {!props.isLoading ? props.icon : <Loader />}
      </div>
      <div className={styles.name}>{props.text}</div>
    </button>
  );
}
