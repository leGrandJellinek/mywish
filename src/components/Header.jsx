import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import burgerImg from "../assets/svg/bars.svg"
const Header = () => {
    const menu = [
        {
            id: 1,
            name: "Войти",
            link: '/list/'
        },
        {
            id: 2,
            name: "Желания",
            link: '/list/'
        },
        {
            id: 3,
            name: "Подарки",
            link: '/list/'
        },
        {
            id: 4,
            name: "Главная",
            link: '/list/'
        },
    ];
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <div className="navbar-logo">
                        <Link to="/">
                            <img src={logo} alt="" className="logo" />
                        </Link>
                    </div>
                    <ul className="navbar-menu">
                        {menu.map(menuObj => (
                            <li key={menuObj.id}>
                                <Link className='navbar-menu__link'  to={menuObj.link}>{menuObj.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <button className="burger-btn">
                        <img src={burgerImg} alt="" />
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;