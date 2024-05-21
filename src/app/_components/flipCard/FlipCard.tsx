import { FadeIn } from "@/app/_components/fadeIn/FadeIn";
import styles from "./flipCard.module.css";

type FlipCardSide = {
  content: JSX.Element;
  backgroundColor: string;
};

type FlipCardProps = {
  front: FlipCardSide;
  back: FlipCardSide;
};

export default function SectionFlipCard(props: FlipCardProps) {
  return (
    <FadeIn threshold={0}>
      <div className={styles.flipCard}>
        <div className={styles.content}>
          <div
            className={styles.front}
            style={{ backgroundColor: props.front.backgroundColor }}
          >
            {props.front.content}
          </div>
          <div
            className={styles.back}
            style={{ backgroundColor: props.back.backgroundColor }}
          >
            {props.back.content}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
