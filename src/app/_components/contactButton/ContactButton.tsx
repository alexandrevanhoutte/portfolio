import Loader from "@/app/_components/loader/Loader";
import { SendEmailIcon } from "@/app/_svg/SendEmailIcon";
import styles from "./contactButton.module.css";

interface ContactButtonProps {
  isLoading: boolean;
}

export default function ContactButton(props: ContactButtonProps) {
  return (
    <button className={styles.button} type="submit">
      <div className={styles.icon}>
        {!props.isLoading ? <SendEmailIcon /> : <Loader />}
      </div>
      <div className={styles.name}>Send</div>
    </button>
  );
}
