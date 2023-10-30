'use client'
import React, {useEffect} from 'react'
import style from './contact.module.css'
import {BsArrowUpRight} from 'react-icons/bs'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { playfair, poppins } from '@/app/common/fonts'
import CenterDiv from '@/app/components/center-div/CenterDiv'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
    const number = 3415005025

    useEffect(()=> {
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#contact__section',
                    start: '-=100%'
                }
            }).to('#contact__container', {opacity: 1, duration: 1, ease: 'none'})
        })

        return () => ctx.revert()
    }, [])

  return (
    <section className={style.section} id='contact__section'>
        <CenterDiv>
            <div className={style.container} id='contact__container'>
                <h2 className={playfair.className}>Encontraste el auto para vos?</h2>
                <span className={poppins.className}>Contactanos para obtener más información</span>
                <br/>
                <br/>
                <a>
                    <span>Contactanos</span>
                    <BsArrowUpRight/>
                </a>
            </div>
        </CenterDiv>
    </section>
  )
}

export default Contact