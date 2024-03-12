import React from 'react'
import { layanans } from '../../globalDataAssets'
import shape from "../../assets/shape.png"
import "./layanan.css"

const Layanan = () => {
  return (
    <section className="layanan section" id="features">
        <h2 className="section__title" data-title='Layanan Kami.'>Layanan Kami Untuk Kamu.</h2>

        <div className="features__grid container grid">
            {layanans.map(({img, title,description}, index) => {
                return (
                    <div className="features__item" key={index}>
                        <img src={img} alt="" className="feature__img" />

                        <h3 className="feature__title">{title}</h3>
                        <p className="feature__description">{description}</p>

                        <img src={shape} alt="" className="feature__shape" />
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Layanan