import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import burgerImg from "../assets/svg/bars.svg";
import profilePictureDefault from "../assets/svg/iconoir_user-love.svg";

function SecondHeader() {
    const menu = [
        {
            id: 1,
            name: "Желания",
            link: '#'
        },
        {
            id: 2,
            name: "Мои списки",
            link: '#'
        },
        {
            id: 3,
            name: "Подарки",
            link: '#'
        },
        {
            id: 4,
            name:"Профиль",
            link: "#"
        }
    ];
  return (
    <div>
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <div className="navbar-logo">
                        <Link to="/">
                            <img src={logo} alt="" className="logo" />
                        </Link>
                    </div>
                    <div className="navbar-menu__wrapper">
                        <ul className="navbar-menu">
                            {menu.map(menuObj => (
                                <li key={menuObj.id}>
                                    <a className='navbar-menu__link' href={menuObj.link}>{menuObj.name}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="my-profile__wrapper">
                            <a href="#" className='my-profile__link'>
                                <img src={profilePictureDefault} alt="" />
                            </a>
                        </div>
                    </div>
                    <button className="burger-btn">
                        <img src={burgerImg} alt="" />
                    </button>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default SecondHeader