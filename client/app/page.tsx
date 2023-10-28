import styles from "./page.module.css";

import Hero from "./layouts/hero/Hero";
import Banner from "./layouts/banner/Banner";
import OurSelected from "./layouts/selected/OurSelected";
import OurUsedSelections from "./layouts/used/OurUsedSelections";
import FindUs from "./layouts/find-us/FindUs";
import VideoBG from "./layouts/videobg/VideoBG";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Banner />
      <OurSelected />
      <OurUsedSelections />
      <FindUs />
      <VideoBG />
    </main>
  );
}
