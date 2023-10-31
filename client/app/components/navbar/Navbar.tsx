"use client";
import React, { useState, useRef, useEffect } from "react";
import style from "./navbar.module.css";
import gsap from "gsap";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";

import CenterDiv from "../center-div/CenterDiv";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const timeline: any = useRef();
  const megamenu = useRef(null);

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
        stagger: 0.25,
        duration: 0.25,
      });
      timeline.current.to(socialContainer, {
        opacity: 1,
        duration: 0.25,
      });
    });

    return () => ctx.revert();
  }, []);

  const toggleMenu = () => {
    !menuOpen ? timeline.current.play() : timeline.current.reverse();
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={style.header}>
        <CenterDiv>
          <div className={style.container}>
            <img src="/assets/iso.webp" width={40} />
            <ul>
              {!menuOpen && (
                <li className={style.contact}>
                  Contactanos <BsArrowRightShort />
                </li>
              )}
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
            <li id="menu__opt">Nosotros</li>
            <li id="menu__opt">Vehiculos</li>
            <li id="menu__opt">Encontranos</li>
          </ul>
          <div className={style.social__container} id="social__container">
            <AiFillInstagram />
            <IoLogoWhatsapp />
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
