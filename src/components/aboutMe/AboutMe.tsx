

import { Titillium_Web } from 'next/font/google'
import Image from 'next/image'
import styles from "./aboutMe.module.css";


const titilliumWeb = Titillium_Web({
  weight: ['200', '300', '400', '600', '700', '900'],
  subsets: ['latin'],
});

export default function AboutMe() {
  return (

    <div className={`${titilliumWeb.className} ${styles.aboutMe}`}>
      <div className={styles.title}>About Me</div>
      <div className={styles.content}>
        <Image
          className={styles.image}
          src="/header-background.jpg"
          width={200}
          height={200}
          alt="Profile picture"
        />
        <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis enim, accumsan ut commodo in, efficitur accumsan risus. Duis non erat tempor, convallis leo in, dictum mauris. Integer hendrerit metus a tortor iaculis semper dignissim in ipsum. Donec in eros in metus lobortis luctus. Phasellus quis dictum nisl. Nullam volutpat dapibus pulvinar. Proin et elit vel mi vulputate tempus id ac dolor. Vestibulum rutrum dapibus nisl vitae ultricies. Mauris hendrerit sem lorem, a iaculis nisl vestibulum vel. Cras in bibendum sapien, sit amet fermentum ante. Phasellus et odio quis ligula mattis varius. Donec ligula velit, porttitor nec quam et, mollis pretium ipsum. Integer fringilla dapibus diam, et porttitor urna gravida sed. Maecenas sagittis imperdiet feugiat. In finibus vitae mauris eu tristique.</div>
        </div>
    </div>
  );
}
