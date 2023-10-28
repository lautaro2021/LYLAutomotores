"use client";
import React, { useEffect, useRef } from "react";
import style from "./video-bg.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VideoBG() {
  const section: any = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          pin: true,
          scrub: true,
          end: "+=" + section.current.offsetHeight * 3,
          markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return <section className={style.video__section} ref={section}></section>;
}

export default VideoBG;
