import ExternalButton from "@/app/_components/ExternalButton/ExternalButton";
import Navbar from "@/app/_components/navbar/Navbar";
import SectionTitle from "@/app/_components/sectionTitle/SectionTitle";
import { getProjectById } from "@/app/_libs/projects";
import { SendEmailIcon } from "@/app/_svg/SendEmailIcon";
import { dataUrl } from "@/app/_svg/background";
import NotFound from "@/app/not-found/page";
import { Titillium_Web } from "next/font/google";
import Image from "next/image";
import styles from "./page.module.css";

const titilliumWeb = Titillium_Web({
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

type ProjectPageProps = {
  params: { id: string };
  searchParams: {};
};

function Tag(props: { name: string }) {
  return <div className={styles.tag}>{props.name}</div>;
}

function Detail(props: { name: string; value: JSX.Element }) {
  return (
    <div className={styles.element}>
      <div className={styles.name}>{props.name}:</div>{" "}
      <div className={styles.value}>{props?.value}</div>
    </div>
  );
}

export default async function ProjectPage(props: ProjectPageProps) {
  const { id } = props.params;
  if (!id) {
    return <NotFound />;
  }
  const project = await getProjectById(Number(id));
  if (!project) {
    return <NotFound />;
  }

  return (
    <main className={titilliumWeb.className}>
      <Navbar />
      <div
        className={styles.content}
        style={{ backgroundImage: `url("${dataUrl}")` }}
      >
        <SectionTitle title={project.name} />
        <div className={styles.project}>
          <div className={styles.pictures}>
            <Image
              className={styles.image}
              src={project.pictureUrl}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              objectFit="contain"
              alt="Project screenshot"
            />
          </div>
          <div className={styles.detail}>
            <Detail name="Description" value={<>{project.description}</>} />
            <Detail name="Main Role" value={<>{project.mainRole}</>} />
            <Detail
              name="Main Stacks"
              value={
                <ul className={styles.list}>
                  {project.mainStacks.map((stack, index) => (
                    <li key={index} className={styles.listElement}>
                      <Tag name={stack} />
                    </li>
                  ))}
                </ul>
              }
            />
            <div className={styles.link}>
              <ExternalButton
                icon={<SendEmailIcon />}
                text="Website"
                href={project.url}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
