"use client";
import React, { useEffect } from "react";
import style from "./our-cars.module.css";
import MainSection from "@/app/components/main-section/MainSection";
import CenterDiv from "@/app/components/center-div/CenterDiv";
import Card from "@/app/components/card/Card";
import { Vehiculos, Vehiculo } from "@/app/types/props.types";
import { playfair } from "@/app/common/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function OurCars({
  props,
  isLoading,
}: {
  props: Vehiculos;
  isLoading: boolean;
}) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#our_cars_section",
            start: "-=100%",
          },
        })
        .to("#our_cars_section", { opacity: 1, duration: 0.5 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <MainSection>
      <CenterDiv>
        <section className={style.main_section} id="our_cars_section">
          <h2 className={playfair.className} id="our_cars_title">
            Nuestros vehiculos
          </h2>
          <div className={style.cards_container}>
            {props?.vehiculo.map((vehiculo: Vehiculo, index: number) => (
              <Card
                props={vehiculo}
                isLoading={isLoading}
                key={index}
                id="vehicle_card"
              />
            ))}
          </div>
        </section>
      </CenterDiv>
    </MainSection>
  );
}

export default OurCars;
