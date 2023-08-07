import React from 'react'
import Present from './Present';
import searchIcon from "../../assets/svg/material-symbols_search.svg";
import profileUserDefault from "../../assets/svg/iconoir_user-love.svg";

function UserActiveList() {
  return (
    <section className='list'>
        <div className="list-header">
          <div className="list-header__profile">
            <div className="list-header__profile-icon">
              <img src={profileUserDefault} alt="" />
            </div>
            <div className="list-header__profile-content">
              <h2 className="list-header__profile-listname">Активный список</h2>
              <p className="list-header__profile-listdescr">Описание списка</p>
            </div>
          </div>
          <div className="list-header__filter"></div>
        </div>
        <div className="list-content">
          <div className="list-content__header">
            <h2 className="list-content__title">Dобавьте свой первый подарок</h2>
            <p className="list-content__descr">Просто создайте карту подарка и пусть все узнают ваши желания</p>
            <div className="list-content__search-wrapper">
              <div className="list-content__search-block">
                <input type="text" className="list-content__search-input" placeholder='Поиск...'/>
                <div className="list-content__search-icon">
                  <img src={searchIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
            <div className="list-block">
                <Present/>
                <Present/>
                <Present/>
                <Present/>
                <Present/>
                <Present/>
                <Present/>
            </div>
        </div>
    </section>
  )
}

export default UserActiveList