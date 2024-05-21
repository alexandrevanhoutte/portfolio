"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./fadeIn.module.css";

type RevealProps = {
  children: JSX.Element;
  threshold?: number;
  duration?: string;
  x?: number;
  y?: number;
};

export const FadeIn = ({
  children,
  threshold = 0.1,
  duration = "1s",
  x = 0,
  y = 0,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasFadedIn, setHasFadedIn] = useState(false);

  useEffect(() => {
    if (ref.current && !hasFadedIn) {
      let observerRefValue: Element | null = null;

      const intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasFadedIn(true);
            if (ref.current) {
              ref.current.classList.add(styles.fadeIn);
              intersectionObserver.unobserve(ref.current);
            }
          }
        },
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
  }, [threshold, hasFadedIn]);

  return (
    <div
      className={styles.fadeInElement}
      ref={ref}
      style={{
        transform: `translateX(${hasFadedIn ? 0 : x}px) translateY(${
          hasFadedIn ? 0 : y
        }px)`,
        transitionDuration: duration,
      }}
    >
      {children}
    </div>
  );
};
