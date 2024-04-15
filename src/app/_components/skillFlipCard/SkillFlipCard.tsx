import FlipCard from "@/app/_components/flipCard/FlipCard";
import Image from "next/image";

type SkillProps = {
  name: string;
  image: string;
  backgroundColor: string;
};

export default function SkillFlipCard(props: SkillProps) {
  return (
    <FlipCard
      front={{
        content: (
          <Image
            width={80}
            height={0}
            src={props.image}
            alt={"Logo of ".concat(props.name)}
            style={{ height: "auto" }}
          />
        ),
        backgroundColor: props.backgroundColor,
      }}
      back={{
        content: <div>{props.name}</div>,
        backgroundColor: props.backgroundColor,
      }}
    />
  );
}
