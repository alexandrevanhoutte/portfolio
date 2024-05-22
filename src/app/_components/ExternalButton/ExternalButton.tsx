import Button from "@/app/_components/Button/Button";

interface ExternalButtonProps {
  isLoading?: boolean;
  icon: JSX.Element;
  text: string;
  href: string;
}

export default function ExternalButton(props: ExternalButtonProps) {
  return (
    <a href={props.href}>
      <Button isLoading={props.isLoading} icon={props.icon} text={props.text} />
    </a>
  );
}
