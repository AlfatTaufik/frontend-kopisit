import React, { useEffect, useState } from 'react';
import logo from "../../assets//logo.png";
import { links } from "../../globalDataAssets";
import { Link } from 'react-scroll';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { BiCoffeeTogo } from "react-icons/bi";
import "./header.css";
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import { FaCartShopping } from "react-icons/fa6";
import axios from 'axios';

const Header = () => {
    const [scrollHeader, setScrollHeader] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const changeHeader = () => {
        if (window.scrollY >= 80) {
            setScrollHeader(true);
        }
        else {
            setScrollHeader(false);
        }
    };

    const logoutHandle = (e) => {
        e.preventDefault();

        const logout = async () => {
            const res = await axios.post('http://127.0.0.1:8000/api/auth/logout', {}, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(res => {
                    localStorage.clear();
                    localStorage.setItem('msg', res.data.msg)
                    console.log(res)
                    navigate('/login')
                })
                .catch(err => {
                    console.log(err)
                })
        }

        logout();
    }

    const scrollTop = () => {
        animateScroll.scrollToTop();
    }

    useEffect(() => {
        window.addEventListener('scroll', changeHeader);
    }, []);
    return (
        <header className={`${scrollHeader ? 'scroll-header' : ''}
    header`}>
            <nav className="nav container">
                <Link to="/" onClick={scrollTop} className="nav__logo">
                    <img src={logo} alt="logo" className="nav__logo-img" />
                </Link>

                <div className={`${showMenu ? 'show-menu' : ''} nav__menu`}>
                    <ul className="nav__list">
                        {links.map(({ name, path }, index) => {
                            return (
                                <div className="nav__item-parent">
                                    <li className="nav__item" key={index}>
                                        <Link to={path} className="nav__link nav-res-style" spy={true} smooth={true} offset={-0} hashSpy={true} duration={500} >{name}</Link>
                                    </li>
                                </div>
                            )
                        })}
                        <div className='nav__list'>
                            <hr />
                            <li className='nav__item'>
                                <LinkRouter to='/' className="nav__link nav-res-style" spy={true} smooth={true} offset={-0} hashSpy={true} duration={500} >
                                    {localStorage.getItem('name')}
                                </LinkRouter>
                            </li>
                            <hr />
                            <LinkRouter onClick={logoutHandle} className="nav__link nav-res-style" spy={true} smooth={true} offset={-0} hashSpy={true} duration={500}>Logout</LinkRouter>
                        </div>
                    </ul>
                </div>

                {/* Responsive Menu */}
                <div className="menu-res nav__toggle" onClick={() => setShowMenu(!showMenu)}>
                    <BiCoffeeTogo />
                </div>
                <div>

                </div>
            </nav>
        </header>
    )
}

export default Header