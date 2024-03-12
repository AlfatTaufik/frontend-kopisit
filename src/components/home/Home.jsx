import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className="home" id='home'>
        <div className="home__container container">
            <div className="home__content">
                <span className="home__subtitle">
                    Welcome To NgoffeeShit!
                    <h1 className="home__title">Ngopi Dimari, Berak Tanpa Henti</h1>
                    <p className="home__description">
                        Berhati-hatilah Dalam Mengonsumsi Kopi Disini, Beberapa Kopi Mengandung Sianida <br/>
                        Dan Bahan Berbahaya Lainnya.
                    </p>

                    <div className="home__btns">
                        <a href="#menu" className="btn home__btns">
                            Cek Menu
                        </a>
                        <a href="#menu" className="btn home__btn">
                            Keranjang
                        </a>
                    </div>
                </span>
            </div>
        </div>
    </section>
  )
}

export default Home