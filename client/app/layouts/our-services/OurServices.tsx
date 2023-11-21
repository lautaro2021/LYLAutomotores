"use client";
import React, { useEffect } from "react";
import style from "./our-services.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { playfair, poppins } from "@/app/common/fonts";
import CenterDiv from "@/app/components/center-div/CenterDiv";
import MainSection from "@/app/components/main-section/MainSection";

gsap.registerPlugin(ScrollTrigger);

function OurServices() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const section: any = document.getElementById("services__main");
      gsap.set("#card1", { display: "none", y: "200" });
      gsap.set("#card2", { display: "none", y: "200" });
      gsap.set("#card3", { display: "none", y: "200" });

      const timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            start: "top top",
            end: "+=" + section.offsetHeight * 4,
            pinSpacing: true,
            scrub: true,
            markers: true,
          },
        })
        .to("#card1", { display: "inline-block" })
        .to("#card1", { opacity: 1, duration: 1, y: 0 })
        .to("#card1", {})
        .to("#card1", { opacity: 0, duration: 1, y: "-200" })
        .to("#card1", { display: "none" })

        .to("#card2", { display: "inline-block" })
        .to("#card2", { opacity: 1, duration: 1, y: 0 })
        .to("#card2", {})
        .to("#card2", { opacity: 0, duration: 1, y: "-200" })
        .to("#card2", { display: "none" })

        .to("#card3", { display: "inline-block" })
        .to("#card3", { opacity: 1, duration: 1, y: 0 })
        .to("#card3", {});
    });

    return () => ctx.revert();
  }, []);

  return (
    <MainSection id="services__main">
      <CenterDiv>
        <div className={style.container} id="services__container">
          <div className={style.text__container}>
            <h2 className={playfair.className}>
              Todos nuestros servicios para la compra de tu auto
            </h2>
            <span className={poppins.className}>
              Descubrí todo lo que tenemos para vos
            </span>
          </div>
          <div className={playfair.className} id={style.card__container}>
            <article className={style.card1} id="card1">
              <h3>Financiacion</h3>
              <p className={poppins.className}>
                Hasta 48 cuotas a tasa fija en pesos
              </p>
            </article>
            <article className={style.card2} id="card2">
              <h3>Permuta</h3>
              <p className={poppins.className}>
                Tomamos tu usado al mejor precio
              </p>
            </article>
            <article className={style.card3} id="card3">
              <h3>Rápida transacción</h3>
              <p className={poppins.className}>Tu nuevo auto en solo minutos</p>
            </article>
          </div>
        </div>
      </CenterDiv>
    </MainSection>
  );
}

export default OurServices;
