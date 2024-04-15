import { Reveal } from "@/app/_components/reveal/Reveal";
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
    <Reveal duration="300ms" threshold={0} y={20}>
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
    </Reveal>
  );
}
