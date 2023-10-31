import styles from "./page.module.css";

import Hero from "./layouts/hero/Hero";
import Banner from "./layouts/banner/Banner";
import OurSelected from "./layouts/selected/OurSelected";
import OurUsedSelections from "./layouts/used/OurUsedSelections";
import OurServices from "./layouts/our-services/OurServices";
import FindUs from "./layouts/find-us/FindUs";
import InteractiveVideo from "./layouts/interactive-video/InteractiveVideo";
import Contact from "./layouts/contact/contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Banner />
      <OurSelected />
      <OurUsedSelections />
      <OurServices />
      <FindUs />
      <InteractiveVideo />
      <Contact />
    </main>
  );
}
