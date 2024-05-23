import styles from "./navbarElement.module.css";

interface NavbarElementProps {
  name: string;
  section: string;
  isActive: boolean;
  onClick: (link: string) => void;
}

export default function NavbarElement(props: NavbarElementProps) {
  return (
    <li
      className={`${styles.element} ${
        props.isActive ? styles.activeElement : ""
      }`}
      onClick={() => props.onClick(props.section)}
    >
      {props.name}
    </li>
  );
}
