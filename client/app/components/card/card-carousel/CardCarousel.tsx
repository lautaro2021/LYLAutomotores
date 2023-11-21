import React, { useState } from "react";
import style from "./card-carousel.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Imagenes } from "@/app/types/props.types";

function CardCarousel({ images }: { images: Imagenes }) {
  const [actualPosition, setActualPosition] = useState(0);

  const goRight = () => {
    actualPosition < images.data.length - 1 &&
      setActualPosition(actualPosition + 1);
  };

  const goLeft = () => {
    actualPosition > 0 && setActualPosition(actualPosition - 1);
  };

  return (
    <div className={style.carousel_container}>
      <IoIosArrowBack
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          color: `${actualPosition === 0 ? "grey" : "black"}`,
          fontSize: "30px",
          cursor: "pointer",
        }}
        onClick={goLeft}
      />
      {images.data.map((image, index: number) => {
        if (actualPosition === index) {
          return (
            <picture key={index}>
              <img
                src={`${process.env.NEXT_PUBLIC_FETCH_URL}${image.attributes.url}`}
                alt={image.attributes.hash}
                title={image.attributes.name}
                loading="lazy"
                placeholder="blur"
              />
            </picture>
          );
        }
      })}
      <IoIosArrowForward
        style={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          color: `${
            actualPosition === images.data.length - 1 ? "grey" : "black"
          }`,
          fontSize: "30px",
          cursor: "pointer",
        }}
        onClick={goRight}
      />
    </div>
  );
}

export default CardCarousel;
