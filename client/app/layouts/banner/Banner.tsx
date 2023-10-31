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
import MainSection from "@/app/components/main-section/MainSection";

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
    <MainSection padding="40px 0px">
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
    </MainSection>
  );
}

export default Banner;
