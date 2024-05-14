"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./fadeIn.module.css";

type RevealProps = {
  children: JSX.Element;
  threshold: number;
  duration: string;
  x?: number;
  y?: number;
};

export const FadeIn = ({
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
      let observerRefValue: Element | null = null;

      const intersectionObserver = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        { root: null, rootMargin: "0px", threshold }
      );
      intersectionObserver.observe(ref.current);
      observerRefValue = ref.current;

      return () => {
        if (observerRefValue) {
          intersectionObserver.unobserve(observerRefValue);
        }
      };
    }
  }, [threshold]);

  return (
    <div
      style={{
        transitionDuration: duration,
        transform: !intersecting ? `translate(${x}px, ${y}px)` : "",
      }}
      className={`transition ${intersecting ? styles.fadeIn : ""}`}
      ref={ref}
    >
      {children}
    </div>
  );
};
