"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Lenis from "@studio-freight/lenis";

import Hero from "./layouts/hero/Hero";
import Banner from "./layouts/banner/Banner";
import OurSelected from "./layouts/selected/OurSelected";
import OurCars from "./layouts/our-cars/OurCars";
import OurServices from "./layouts/our-services/OurServices";
import FindUs from "./layouts/find-us/FindUs";
import InteractiveVideo from "./layouts/interactive-video/InteractiveVideo";
import Contact from "./layouts/contact/contact";

import useFetcher from "./utils/useFetcher";

export default function Home() {
  const { data, isLoading } = useFetcher();

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {});

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={styles.main}>
      <Hero props={data?.hero} />
      <Banner />
      <OurSelected props={data?.exclusivos} isLoading={isLoading} />
      <OurCars props={data?.vehiculos} isLoading={isLoading} />
      <OurServices />
      <FindUs />
      <InteractiveVideo />
      <Contact />
    </main>
  );
}
