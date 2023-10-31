"use client";
import React, { useState } from "react";
import style from "./carrousel.module.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

function Carrousel({ elements }: { elements: any }) {
  const elementss = ["hola", "chau"];
  const [actualPosition, setActualPosition] = useState(0);

  const handleDown = () => {
    actualPosition > 0 && setActualPosition(actualPosition - 1);
  };

  const handleUp = () => {
    actualPosition < elementss.length - 1 &&
      setActualPosition(actualPosition + 1);
  };

  return (
    <>
      <div className={style.carousel__main}>
        {elementss.map((element: any, index: number) => {
          if (actualPosition === index) {
            return (
              <div key={index} className={style.carousel__item}>
                {index}
              </div>
            );
          }
        })}
      </div>
      <div className={style.info__container}>
        <div className={style.text__container}>
          <h3>Mercedes Benz</h3>
          <span>AMG Serie A</span>
        </div>
        <div className={style.button__container}>
          <BsArrowLeftCircle
            style={{
              cursor: "pointer",
              color: `${actualPosition === 0 ? "grey" : "white"}`,
            }}
            onClick={handleDown}
          />
          <BsArrowRightCircle
            style={{
              cursor: "pointer",
              color: `${
                actualPosition === elementss.length - 1 ? "grey" : "white"
              }`,
            }}
            onClick={handleUp}
          />
        </div>
      </div>
    </>
  );
}

export default Carrousel;
