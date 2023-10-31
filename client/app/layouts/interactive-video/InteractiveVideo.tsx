"use client";
import React, { useEffect, useRef } from "react";
import style from "./interactive-video.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import MainSection from "@/app/components/main-section/MainSection";
import getImages from "@/app/utils/getImages";

gsap.registerPlugin(ScrollTrigger);

function InteractiveVideo() {
  const container: any = useRef(null);

  const numberOfImages = 349;

  useEffect(() => {
    getImages(numberOfImages);
    const images = document.querySelectorAll("#image__frame");

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=" + container.current.offsetHeight * 10,
          pin: true,
          scrub: true,
          pinSpacing: true,
        },
      });

      timeline.to(".frame0", { opacity: 1, duration: 10, ease: "none" });

      images?.forEach((image: any, index: number) => {
        if (index < 350) {
          if (index > 2) {
            timeline.to(image, { display: "block", ease: "none" });
            timeline.to(images[index - 1], {
              display: "none",
              ease: "none",
            });
          } else {
            timeline.to(image, { display: "block", ease: "none" });
          }
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <MainSection>
      <div
        className={style.container}
        ref={container}
        id="interactive__container"
      ></div>
    </MainSection>
  );
}

export default InteractiveVideo;
