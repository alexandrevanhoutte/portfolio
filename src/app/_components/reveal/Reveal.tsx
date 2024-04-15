import { useEffect, useRef, useState } from "react";
import styles from "./reveal.module.css";

type RevealProps = {
  children: JSX.Element;
  threshold: number;
  duration: string;
  x?: number;
  y?: number;
};

export const Reveal = ({
  children,
  threshold,
  duration,
  x,
  y,
}: RevealProps) => {
  x = x || 0;
  y = y || 0;
  const ref = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const intersectionObserver = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        {
          root: null,
          rootMargin: "0px",
          threshold,
        }
      );
      intersectionObserver.observe(ref.current);

      return () => {
        if (ref.current) {
          intersectionObserver.unobserve(ref.current);
        }
      };
    }
  }, []);

  return (
    <div
      style={{
        transitionDuration: duration,
        transform: !intersecting
          ? `translate(${x}px, ${y}px)`
          : "translate(0px, 0px)",
      }}
      className={`transition ${intersecting ? styles.fadeIn : ""}`}
      ref={ref}
    >
      {children}
    </div>
  );
};
