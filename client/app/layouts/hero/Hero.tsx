import { useEffect } from "react";
import { playfair, poppins } from "../../common/fonts";
import style from "./hero.module.css";
import gsap from "gsap";

import CenterDiv from "@/app/components/center-div/CenterDiv";

export interface HeroClass {
  id: number;
  title: string;
  background: Background;
}

export interface Background {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: null;
  height: null;
  formats: null;
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

function Hero({ props }: { props: HeroClass }) {
  const title = "Encontrá el auto perfecto que estás buscando";

  useEffect(() => {
    scrollTo(0, 0);

    const titleSpan = document.querySelectorAll("#title__span");
    const titleP = document.getElementById("title__p");

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({});

      timeline.fromTo(
        titleSpan,
        { opacity: 0 },
        { opacity: 1, stagger: 0.04, duration: 0.1 }
      );
      timeline.fromTo(
        titleP,
        { opacity: 0 },
        { opacity: 1, y: "0", duration: 1 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={playfair.className} id={style.section}>
      <video
        autoPlay
        loop
        playsInline
        muted
        src={`${process.env.NEXT_PUBLIC_FETCH_URL}${props?.background?.data?.attributes?.url}`}
      />
      <CenterDiv>
        <div className={style.text__container}>
          <h1>
            {title.split("").map((str: string, index: number) => (
              <span key={index} id="title__span">
                {str}
              </span>
            ))}
            <p id="title__p" className={poppins.className}>
              Explora toda nuestra gama de vehiculos
            </p>
          </h1>
        </div>
      </CenterDiv>
    </section>
  );
}

export default Hero;
