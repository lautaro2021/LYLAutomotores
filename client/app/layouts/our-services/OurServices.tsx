import React from "react";
import style from "./our-services.module.css";

import { playfair, poppins } from "@/app/common/fonts";
import CenterDiv from "@/app/components/center-div/CenterDiv";
import MainSection from "@/app/components/main-section/MainSection";

function OurServices() {
  return (
    <MainSection>
      <CenterDiv>
        <div className={style.container}>
          <div className={style.text__container}>
            <h2 className={playfair.className}>
              Todos nuestros servicios para la compra de tu auto
            </h2>
            <span className={poppins.className}>
              Descubrí todo lo que tenemos para vos
            </span>
          </div>
          <div className={style.card__container}>
            <article className={style.card1}></article>
            <article className={style.card2}></article>
          </div>
        </div>
      </CenterDiv>
    </MainSection>
  );
}

export default OurServices;
