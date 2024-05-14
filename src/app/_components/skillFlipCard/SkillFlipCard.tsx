import FlipCard from "@/app/_components/flipCard/FlipCard";
import Image from "next/image";
import styles from "./skillFlipCard.module.css";

type SkillProps = {
  name: string;
  image: string;
};

export default function SkillFlipCard(props: SkillProps) {
  return (
    <FlipCard
      front={{
        content: (
          <div className={styles.image}>
            <Image
              src={props.image}
              alt={"Logo of ".concat(props.name)}
              fill
              sizes="100%"
              style={{ objectFit: "contain" }}
            />
          </div>
        ),
        backgroundColor: "#ececec",
      }}
      back={{
        content: <div>{props.name}</div>,
        backgroundColor: "#ececec",
      }}
    />
  );
}
