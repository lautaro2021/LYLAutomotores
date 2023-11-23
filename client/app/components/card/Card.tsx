import React from "react";
import style from "./card.module.css";
import { Imagenes } from "@/app/types/props.types";
import { CiCalendarDate } from "react-icons/ci";
import { IoCarSportSharp } from "react-icons/io5";
import { FaOilCan } from "react-icons/fa";
import CardCarousel from "./card-carousel/CardCarousel";
import Loader from "../loader/Loader";

type CardPropsType = {
  marca: string;
  modelo: string;
  ano: string;
  kilometros: string;
  combustible: string;
  fotos: Imagenes;
};

function Card({
  props,
  isLoading,
  id,
}: {
  props: CardPropsType;
  isLoading: boolean;
  id: string;
}) {
  const { marca, modelo, ano, kilometros, combustible, fotos } = props;

  return (
    <article className={style.main_article} id={id}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ul>
            <li>
              <CiCalendarDate />
              {ano}
            </li>
            <li>
              <IoCarSportSharp />
              {kilometros}km
            </li>
            <li>
              <FaOilCan />
              {combustible}
            </li>
          </ul>
          <CardCarousel images={fotos} />
          <footer>
            <h3>{marca}</h3>
            <p>{modelo}</p>
          </footer>
        </>
      )}
    </article>
  );
}

export default Card;
