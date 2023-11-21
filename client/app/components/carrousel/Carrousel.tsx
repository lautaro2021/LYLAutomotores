"use client";
import React, { useState } from "react";
import style from "./carrousel.module.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import type { Carrusel } from "@/app/layouts/selected/OurSelected";

import Loader from "../loader/Loader";

function Carrousel({
  elements,
  isLoading,
}: {
  elements: Carrusel[];
  isLoading: boolean;
}) {
  const [actualPosition, setActualPosition] = useState(0);

  const handleDown = () => {
    actualPosition > 0 && setActualPosition(actualPosition - 1);
  };

  const handleUp = () => {
    actualPosition < elements?.length - 1 &&
      setActualPosition(actualPosition + 1);
  };

  return (
    <section className={style.carousel__main}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <article className={style.carousel__container}>
            {elements?.map((element: Carrusel, index: number) => {
              if (actualPosition === index) {
                return (
                  <figure
                    key={element.id}
                    className={style.image__container}
                    id="carusel__element"
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_FETCH_URL}${element?.imagenes?.data[0]?.attributes?.url}`}
                      alt={`LyL Automotores - Modelo${element?.modelo}`}
                      title={`LyL Automotores - Modelo${element?.modelo}`}
                      loading="lazy"
                    />
                  </figure>
                );
              }
            })}
          </article>
          <aside className={style.info__container}>
            <div className={style.text__container}>
              <h3 id="carusel__element">
                {elements[actualPosition]?.marca} -{" "}
                {elements[actualPosition]?.modelo}
              </h3>
              <p className={style.data__container}>
                <span id="carusel__element">
                  {elements[actualPosition]?.kilometros}KM
                </span>
                <span id="carusel__element">
                  {elements[actualPosition]?.ano}
                </span>
              </p>
            </div>
            <nav className={style.button__container}>
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
                    actualPosition === elements?.length - 1 ? "grey" : "white"
                  }`,
                }}
                onClick={handleUp}
              />
            </nav>
          </aside>
        </>
      )}
    </section>
  );
}

export default Carrousel;
