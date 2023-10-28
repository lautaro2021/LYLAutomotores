"use client";
import style from "./banner.module.css";
import { useEffect } from "react";
import {
  SiAudi,
  SiVolkswagen,
  SiBmw,
  SiFord,
  SiRenault,
  SiChevrolet,
  SiJeep,
  SiMercedes,
} from "react-icons/si";
import gsap from "gsap";

import CenterDiv from "@/app/components/center-div/CenterDiv";

function Banner() {
  useEffect(() => {
    // const icons = document.querySelectorAll("#banner__icon");
    // const ctx = gsap.context(() => {
    //   const timeline = gsap.timeline({});
    //   timeline.fromTo(icons, { opacity: 0 }, { opacity: 1, stagger: 0.03 });
    // });
    // return () => ctx.revert();
  }, []);

  return (
    <section className={style.section}>
      <CenterDiv>
        <div className={style.container}>
          <SiAudi id="banner__icon" />
          <SiVolkswagen id="banner__icon" />
          <SiBmw id="banner__icon" />
          <SiFord id="banner__icon" />
          <SiRenault id="banner__icon" />
          <SiChevrolet id="banner__icon" />
          <SiMercedes id="banner__icon" />
          <SiJeep id="banner__icon" />
        </div>
      </CenterDiv>
    </section>
  );
}

export default Banner;
