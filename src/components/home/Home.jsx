import React from 'react'
import './home.css'
import { Link } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'
import Popup from '../popup/Popup'
import { useState, useEffect } from 'react'
const Home = () => {
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(false)
            localStorage.removeItem('msg');
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <section className="home" id='home'>
            {showPopup && localStorage.getItem('msg') && <Popup />}
            <div className="home__container container">
                <div className="home__content">
                    <span className="home__subtitle">
                        Welcome To NgoffeeShit!
                        <h1 className="home__title">Ngopi Dimari, Berak Tanpa Henti</h1>
                        <p className="home__description">
                            Berhati-hatilah Dalam Mengonsumsi Kopi Disini, Beberapa Kopi Mengandung Sianida <br />
                            Dan Bahan Berbahaya Lainnya.
                        </p>

                        <div className="home__btns">
                            <Link to='menu' className="btn home__btns" smooth={true}>
                                Cek Menu
                            </Link>
                            <LinkRouter to="/cart" className="btn home__btn">
                                Keranjang
                            </LinkRouter>
                        </div>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Home