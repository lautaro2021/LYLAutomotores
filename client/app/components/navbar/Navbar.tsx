"use client";
import React, { useState, useRef, useEffect } from "react";
import style from "./navbar.module.css";
import gsap from "gsap";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";

import CenterDiv from "../center-div/CenterDiv";
import scrollToSection from "@/app/utils/scrollToSection";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const timeline: any = useRef();
  const megamenu = useRef(null);

  const phoneNumber = "3415005025";

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const toggleMenu = () => {
    !menuOpen ? timeline.current.play() : timeline.current.reverse();
    setMenuOpen(!menuOpen);
  };

  const goToSectionAndCloseMenu = (section: string) => {
    scrollToSection(section);
    toggleMenu();
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const menuOptions = document.querySelectorAll("#menu__opt");
      const menuIcon = document.getElementById("menu__icon");
      const socialContainer = document.getElementById("social__container");
      timeline.current = gsap.timeline({ paused: true });

      timeline.current.fromTo(
        megamenu.current,
        { opacity: 0, y: "-100%" },
        { opacity: 1, y: "0%" },
        "frameOne"
      );
      timeline.current.to(
        menuIcon,
        { y: "-10px", transform: "rotate(45deg)" },
        "frameOne"
      );
      timeline.current.to(menuOptions, {
        opacity: 1,
        stagger: 0.15,
        duration: 0.15,
      });
      timeline.current.to(socialContainer, {
        opacity: 1,
        duration: 0.15,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header className={style.header}>
        <CenterDiv>
          <div className={style.container}>
            <img
              src="/assets/iso.webp"
              width={40}
              onClick={scrollTop}
              alt="LyL Automotores - agencia de autos en rosario"
              title="LyL Automotores - agencia de autos en rosario"
              style={{ cursor: "pointer" }}
            />
            <ul>
              <li className={style.menu} onClick={toggleMenu}>
                <hr />
                <hr id="menu__icon" />
              </li>
            </ul>
          </div>
        </CenterDiv>
      </header>
      <section className={style.side__menu} ref={megamenu}>
        <div className={style.side__menu__container}>
          <ul>
            <li
              id="menu__opt"
              onClick={() => goToSectionAndCloseMenu("selected__section")}
            >
              Exclusivos
            </li>
            <li
              id="menu__opt"
              onClick={() => goToSectionAndCloseMenu("our_cars_section")}
            >
              Nuestros vehiculos
            </li>
            <li
              id="menu__opt"
              onClick={() => goToSectionAndCloseMenu("find__section")}
            >
              Encontranos
            </li>
            <li
              id="menu__opt"
              onClick={() => goToSectionAndCloseMenu("contact__section")}
            >
              Contactanos
            </li>
          </ul>
          <div className={style.social__container} id="social__container">
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
      </section>
    </>
  );
}

export default Navbar;
