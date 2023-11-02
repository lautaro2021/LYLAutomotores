"use client";
import style from "./our-selected.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { playfair } from "@/app/common/fonts";
import CenterDiv from "@/app/components/center-div/CenterDiv";
import Carrousel from "@/app/components/carrousel/Carrousel";

export interface ExclusivosClass {
  id: number;
  title: string;
  carrusel: Carrusel[];
}

export interface Carrusel {
  id: number;
  marca: string;
  modelo: string;
  ano: string;
  kilometros: string;
  imagenes: Imagenes;
}

export interface Imagenes {
  data: Datum[];
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

function OurSelected({
  props,
  isLoading,
}: {
  props: ExclusivosClass;
  isLoading: boolean;
}) {
  gsap.registerPlugin(ScrollTrigger);
  const section: any = useRef();

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
    <section className={style.section} ref={section} id="selected__section">
      <CenterDiv>
        <div className={style.container}>
          <h2 className={playfair.className} id="selected__title">
            Nuestros exclusivos
          </h2>
          <Carrousel elements={props?.carrusel} isLoading={isLoading} />
        </div>
      </CenterDiv>
    </section>
  );
}

export default OurSelected;
