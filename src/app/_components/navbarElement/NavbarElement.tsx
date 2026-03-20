import styles from "./navbarElement.module.css";

interface NavbarElementProps {
  name: string;
  section: string;
  variant: "desktop" | "mobile";
  isActive: boolean;
  onClick: (link: string) => void;
}

export default function NavbarElement(props: NavbarElementProps) {
  const variantClassName =
    props.variant === "desktop" ? styles.desktopElement : styles.mobileElement;

  return (
    <li className={styles.itemWrapper}>
      <button
        type="button"
        className={`${styles.element} ${variantClassName} ${
          props.isActive ? styles.activeElement : ""
        }`}
        onClick={() => props.onClick(props.section)}
      >
        {props.name}
      </button>
    </li>
  );
}
