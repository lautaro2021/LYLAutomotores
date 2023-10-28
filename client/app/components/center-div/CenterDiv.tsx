import React from "react";
import style from "./center-div.module.css";

function CenterDiv({ children }: { children: React.ReactNode }) {
  return <div className={style.div}>{children}</div>;
}

export default CenterDiv;
