import React from 'react'
import aboutImg from '../../assets/about-img.jpg'
import { FaCheck } from "react-icons/fa6";
import "./about.css"

const About = () => {
  return (
    <section className="about section" id="about">
        <div className="about__grid container grid">
            <div className="about__img-wrapper">
                <img src={aboutImg} alt="about" className="about__img" />
            </div>

            <div className="about__content">
                <h2 className="section__title" data-title='NgopiSit Bos.'>Kopi Segar UntukMu Para Pelajar.</h2>

                <p className="about__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eveniet debitis id dolor reiciendis cupiditate velit veritatis fugiat. Saepe provident iusto voluptas molestias adipisci, 
                    numquam maiores officia cupiditate, corporis voluptatum incidunt rerum quas sint nesciunt unde amet. Quae sit doloremque nihil?
                </p>

                <div className="about__details grid">
                    <p className="about__details-description">
                        <FaCheck />
                         Ramah Dikantong
                    </p>
                    <p className="about__details-description">
                        <FaCheck />
                         Menu Melimpah
                    </p>
                    <p className="about__details-description">
                        <FaCheck />
                         Lokasi Strategis
                    </p>
                </div>
                <a href="#team" className="btn">Barista Kita</a>
            </div>
        </div>
    </section>
  )
}

export default About