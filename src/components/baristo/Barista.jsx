import React from 'react'
import alfat from "../../assets/alfat.jpg"
import rubben from "../../assets/rubben.jpeg"
import isan from "../../assets/Isan.jpeg"
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import "./barista.css"

const Barista = () => {
  return (
    <section className="team section" id="team">
        <h2 className="section__title" data-title = "Developer">
            Barista Dimari
        </h2>

        <div className="team__grid grid container">
            <div className="team__item">
                <img src={alfat} alt="" className="team__img" />
                <div className="team__data">
                    <h3 className="team__title">Alfat Taufik Nurhidayat</h3>
                    <p className="team__job">Frontend</p>
                </div>

                <div className="team__socials">
                    <a href="/" className="team__social-link">
                        <FaFacebookF/>
                    </a>
                    <a href="/" className="team__social-link">
                        <FaTwitter/>
                    </a>
                    <a href="/" className="team__social-link">
                        <FaLinkedinIn/>
                    </a>
                    <a href="/" className="team__social-link">
                        <FaInstagram/>
                    </a>
                </div>
            </div>
            <div className="team__item">
                <img src={isan} alt="" className="team__img" />
                <div className="team__data">
                    <h3 className="team__title">Ikhsandi Saktiawan</h3>
                    <p className="team__job">Frontend & Backend</p>
                </div>

                <div className="team__socials">
                    <a href="/" className="team__social-link">
                        <FaFacebookF/>
                    </a>
                    <a href="/" className="team__social-link">
                        <FaTwitter/>
                    </a>
                    <a href="/" className="team__social-link">
                        <FaLinkedinIn/>
                    </a>
                    <a href="/" className="team__social-link">
                        <FaInstagram/>
                    </a>
                </div>
            </div>
            <div className="team__item">
                <img src={rubben} alt="" className="team__img" />
                <div className="team__data">
                    <h3 className="team__title">Rubben Mulyo Santoso</h3>
                    <p className="team__job">Backend</p>
                </div>

                <div className="team__socials">
                    <a href="/" className="team__social-link">
                        <FaFacebookF/>
                    </a>
                    <a href="/" className="team__social-link">
                        <FaTwitter/>
                    </a>
                    <a href="/" className="team__social-link">
                        <FaLinkedinIn/>
                    </a>
                    <a href="/" className="team__social-link">
                        <FaInstagram/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Barista