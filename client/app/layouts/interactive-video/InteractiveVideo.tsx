"use client";
import React, { useEffect, useRef } from "react";
import style from "./interactive-video.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import MainSection from "@/app/components/main-section/MainSection";

gsap.registerPlugin(ScrollTrigger);

function InteractiveVideo() {
  const container: any = useRef(null);
  const video: any = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          markers: true,
          start: "top top",
          end: "+=" + container.current.offsetHeight * 3,
          pin: true,
          scrub: true,
          pinSpacing: true,
          onUpdate: (self) => {
            let currentTime = self.progress * video.current.duration;
            if (video.current.currentTime !== currentTime) {
              video.current.currentTime = currentTime;
            }
            if (self.progress > 0 && self.progress < 1) {
              video.current.play();
            } else {
              video.current.pause();
            }
          },
        },
      });
      timeline.to(video.current, {
        opacity: 1,
        duration: video.current.duration,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <MainSection>
      <div className={style.container} ref={container}>
        <video src="/videos/herobg.mp4" ref={video} />
      </div>
    </MainSection>
  );
}

export default InteractiveVideo;
