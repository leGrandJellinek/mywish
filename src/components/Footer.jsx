import React from 'react';
import logo from '../assets/images/logo.png';

const Footer = () => {
    const footerMenu = [
        {   
            name: "Поддержка",
            secondLevel:[{id:1,title:"Помощь", link:"#"},{id:2,title:"Связаться с нами", link:"#"},{id:3,title:"Отзывы", link:"#"},{id:4,title:"Обратная связь", link:"#"}]
        },
        {
            name: "О нас",
            secondLevel:[{id:1,title:"История", link:"#"},{id:2,title:"Наша цель", link:"#"},{id:3,title:"Новости", link:"#"},{id:4,title:"Партнеры", link:"#"}]
        },
        {
            name: "Мы тут",
            secondLevel: [{id:1,icon: ""},{id:2,icon: ""},{id:3,icon: ""}]
        },
    ];
    const mobileFooterMenu = [
        {
            name: "Мы тут",
            secondLevel: [{id:1,icon: ""},{id:2,icon: ""},{id:3,icon: ""}]
        },
        {
            name: "О нас",
            secondLevel:[{id:1,title:"История", link:"#"},{id:2,title:"Наша цель", link:"#"},{id:3,title:"Новости", link:"#"},{id:4,title:"Партнеры", link:"#"}]
        },
        {   
            name: "Поддержка",
            secondLevel:[{id:1,title:"Помощь", link:"#"},{id:2,title:"Связаться с нами", link:"#"},{id:3,title:"Отзывы", link:"#"},{id:4,title:"Обратная связь", link:"#"}]
        },
    ]
    return (
        <footer className='footer'>
            <div className="footer-block">
                <div className="container">
                    <div className="footer-up">
                        <div className="footer-up__block">
                            <div className="footer-up__left">
                                <div className="footer-logo__wrapper">
                                    <div className="footer-logo">
                                        <a href=""><img src={logo} alt="" className="logo" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-up__right">
                                {
                                    footerMenu.map((menu, l) => (
                                        <div className="footer-menu__wrapper" key={l}>
                                            <h2 className="footer-menu__title">{menu.name}</h2>                                         
                                            <ul className="footer-menu">
                                                {
                                                    menu.secondLevel.map(secondLevelItem => (
                                                        <li key={secondLevelItem.id} className='footer-menu__li'>
                                                            {secondLevelItem.title && <a href={secondLevelItem.link} className='footer-menu__link'>{secondLevelItem.title}</a>}
                                                            {secondLevelItem.icon && <i className={secondLevelItem.icon}></i>}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="footer-up__block isMobile">
                            <div className="footer-logo__wrapper">
                                <div className="footer-logo">
                                        <a href=""><img src={logo} alt="" className="logo" /></a>
                                </div>
                            </div>
                            {
                                    mobileFooterMenu.map((menu, l) => (
                                        <div className="footer-menu__wrapper" key={l}>
                                            <h2 className="footer-menu__title">{menu.name}</h2>                                         
                                            <ul className="footer-menu">
                                                {
                                                    menu.secondLevel.map(secondLevelItem => (
                                                        <li key={secondLevelItem.id} className='footer-menu__li'>
                                                            {secondLevelItem.title && <a href={secondLevelItem.link} className='footer-menu__link'>{secondLevelItem.title}</a>}
                                                            {secondLevelItem.icon && <i className={secondLevelItem.icon}></i>}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    ))
                                }
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom__block">
                            <div className="footer-bottom__item">
                                <div className="footer-bottom__text">2023 Mywish All Rights Reserved.</div>
                            </div>
                            <div className="footer-bottom__item">
                                <p className="footer-bottom__text">Политика конфиденциальности</p>
                                <p className="footer-bottom__text">Условия эксплуатации</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bg"></div>
        </footer>
    );
};

export default Footer;