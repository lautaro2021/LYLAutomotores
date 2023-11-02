import React from "react";
import { Oval } from "react-loader-spinner";
import style from "./loader.module.css";

function Loader() {
  return (
    <div className={style.loader}>
      <Oval color="#fff" secondaryColor="#000" />
    </div>
  );
}

export default Loader;
