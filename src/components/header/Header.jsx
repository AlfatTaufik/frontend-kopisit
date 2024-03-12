import React from 'react';
import logo from "../../assets//logo.png";
import {links} from "../../globalDataAssets"
import { BiCoffeeTogo } from "react-icons/bi";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="/" className="nav__logo">
                <img src={logo} alt="logo" className="nav__logo-img" />
            </a>

            <div className="nav__menu">
                <ul className="nav__list">
                    {links.map(({name, path}, index) => {
                        return(
                            <li className="nav__item" key={index}>
                                <a href={path} className="nav__link">{name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* Responsive Menu */}
            <div className="nav__toggle">
                <BiCoffeeTogo/>
            </div>
        </nav>
    </header>
  )
}

export default Header