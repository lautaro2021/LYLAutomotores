"use client";
import React, { useEffect } from "react";
import style from "./find-us.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CenterDiv from "@/app/components/center-div/CenterDiv";
import MainSection from "@/app/components/main-section/MainSection";
import { playfair } from "@/app/common/fonts";

gsap.registerPlugin(ScrollTrigger);

function FindUs() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#find__section",
            start: "-=100%",
          },
        })
        .to("#find__container", { opacity: 1, duration: 1, ease: "none" });
    });

    return () => ctx.revert();
  }, []);
  return (
    <MainSection id="find__section">
      <CenterDiv>
        <div className={style.container} id="find__container">
          <div className={style.text__container}>
            <h2 className={playfair.className}>España 2201, Rosario</h2>
          </div>
          <img src="/assets/map2.png"></img>
        </div>
      </CenterDiv>
    </MainSection>
  );
}

export default FindUs;
