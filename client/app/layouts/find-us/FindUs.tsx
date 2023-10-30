import React from "react";
import style from "./find-us.module.css";
import CenterDiv from "@/app/components/center-div/CenterDiv";

import { playfair } from "@/app/common/fonts";

function FindUs() {
  return <section className={style.section}>
    <CenterDiv>
      <div className={style.container}>
        <div className={style.text__container}>
          <h2 className={playfair.className}>España 2201, Rosario</h2>
        </div>
        <img src="/assets/map.png"></img>
      </div>
    </CenterDiv>
    
  </section>;
}

export default FindUs;
