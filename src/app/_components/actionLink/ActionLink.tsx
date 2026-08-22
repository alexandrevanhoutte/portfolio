import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./actionLink.module.css";

type ActionLinkIcon = "internal" | "external" | "download" | "up";

interface ActionLinkProps extends ComponentPropsWithoutRef<"a"> {
  children: ReactNode;
  external?: boolean;
  icon?: ActionLinkIcon;
}

const actionIcons = {
  internal: ArrowRight,
  external: ArrowUpRight,
  download: Download,
  up: ArrowUp,
};

export default function ActionLink({
  children,
  className,
  download,
  external = false,
  icon,
  rel,
  target,
  ...props
}: ActionLinkProps) {
  const actionIcon = icon ?? (external ? "external" : download ? "download" : undefined);
  const Icon = actionIcon ? actionIcons[actionIcon] : null;

  return (
    <a
      {...props}
      className={`${styles.actionLink} ${className ?? ""}`}
      data-action-icon={actionIcon}
      download={download}
      rel={external ? (rel ?? "noreferrer") : rel}
      target={external ? (target ?? "_blank") : target}
    >
      {children}
      {Icon ? (
        <Icon aria-hidden="true" className={styles.icon} size={14} strokeWidth={1.75} />
      ) : null}
    </a>
  );
}
