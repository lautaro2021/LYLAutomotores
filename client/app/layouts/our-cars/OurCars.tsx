import React from "react";
import style from "./our-cars.module.css";
import MainSection from "@/app/components/main-section/MainSection";
import CenterDiv from "@/app/components/center-div/CenterDiv";
import Card from "@/app/components/card/Card";
import { Vehiculos, Vehiculo } from "@/app/types/props.types";

function OurCars({
  props,
  isLoading,
}: {
  props: Vehiculos;
  isLoading: boolean;
}) {
  return (
    <MainSection>
      <CenterDiv>
        <div className={style.cards_container}>
          {props?.vehiculo.map((vehiculo: Vehiculo, index: number) => (
            <Card props={vehiculo} isLoading={isLoading} key={index} />
          ))}
        </div>
      </CenterDiv>
    </MainSection>
  );
}

export default OurCars;
