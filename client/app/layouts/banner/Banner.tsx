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
    const icons = document.querySelectorAll("#banner__icon");
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({});
      timeline.to(icons, { opacity: 1, stagger: 0.15, delay: 0.5 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <MainSection padding="40px 0px">
      <CenterDiv>
        <ul className={style.container}>
          <li id="banner__icon">
            <SiAudi />
          </li>
          <li id="banner__icon">
            <SiVolkswagen />
          </li>
          <li id="banner__icon">
            <SiBmw />
          </li>
          <li id="banner__icon">
            <SiFord />
          </li>
          <li id="banner__icon">
            <SiRenault />
          </li>
          <li id="banner__icon">
            <SiChevrolet />
          </li>
          <li id="banner__icon">
            <SiMercedes />
          </li>
          <li id="banner__icon">
            <SiJeep />
          </li>
        </ul>
      </CenterDiv>
    </MainSection>
  );
}

export default Banner;
