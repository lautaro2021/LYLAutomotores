"use client";
import style from "./our-selected.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { playfair } from "@/app/common/fonts";
import CenterDiv from "@/app/components/center-div/CenterDiv";
import Carrousel from "@/app/components/carrousel/Carrousel";

function OurSelected() {
  gsap.registerPlugin(ScrollTrigger);
  const section: any = useRef();

  const emptyArray = new Array(5);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: section.current,
            start: "-=100%",
            scrub: true,
          },
        })
        .to("#selected__title", { x: 0, opacity: 1, duration: 1 });
    });

    return () => ctx.revert();
  });
  return (
    <section className={style.section} ref={section}>
      <CenterDiv>
        <div className={style.container}>
          <h2 className={playfair.className} id="selected__title">
            Nuestros exclusivos
          </h2>
          <Carrousel elements={emptyArray} />
        </div>
      </CenterDiv>
    </section>
  );
}

export default OurSelected;
