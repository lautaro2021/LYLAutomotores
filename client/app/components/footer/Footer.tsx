"use client";
import React from "react";
import style from "./footer.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";
import { poppins } from "@/app/common/fonts";

import CenterDiv from "../center-div/CenterDiv";
import scrollToSection from "@/app/utils/scrollToSection";

function Footer() {
  const phoneNumber = "3415005025";
  return (
    <footer className={style.footer}>
      <CenterDiv>
        <div className={style.main__container}>
          <div className={style.footer__container}>
            <img
              src="/assets/iso.webp"
              width={100}
              height={110}
              alt="LyL Automotores - agencia de autos en rosario"
              title="LyL Automotores - agencia de autos en rosario"
            />
            <aside>
              <ul className={poppins.className}>
                <li onClick={() => scrollToSection("selected__section")}>
                  Exclusivos
                </li>
                <li onClick={() => scrollToSection("our_cars_section")}>
                  Nuestros vehiculos
                </li>
                <li onClick={() => scrollToSection("find__section")}>
                  Encontranos
                </li>
              </ul>
            </aside>
          </div>
          <div className={style.powered}>
            <div className={style.text__container}>
              <span>L&L Automotores® 2023</span>
              <a
                href="https://www.neuroexperience.com.ar/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  Powered by <strong>NEURO STUDIO</strong>.
                </span>
              </a>
            </div>
            <div className={style.social__container}>
              <a
                href="https://www.instagram.com/lylautomotores_/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </CenterDiv>
    </footer>
  );
}

export default Footer;
