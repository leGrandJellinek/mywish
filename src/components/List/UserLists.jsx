import React from 'react'
import listIcon from "../../assets/svg/solar_bill-list-linear.svg";
import plusIcon from "../../assets/svg/ic_round-plus.svg";
import listsIcon from "../../assets/svg/fluent-mdl2_task-list.svg";
import settings from "../../assets/svg/material-symbols_settings.svg";
import deleteIcon from "../../assets/svg/ic_baseline-delete.svg";

function UserLists() {
  return (
    <div  className='user-lists'>
      <div className="user-lists__header">
        <div className="user-lists__header-content">
          <div className="user-lists__header-icon">
              <img src={listIcon} alt="" />
          </div>
          <h2 className='user-lists__header-title'>Ваши списки</h2>
        </div>
        <button className="user-lists__header-btn">
          <div className="user-lists__header-icon">
            <img src={plusIcon} alt="" />
          </div>
          <div className="user-lists__header-btn__text">Dобавить список</div>
        </button>
      </div>
      <div className="user-lists__block">
        <div className="user-lists__block-item active">
          <div className="lists-item__inner">
            <div className="lists-item__icon">
              <img src={listsIcon} alt="" />
            </div>
            <h2 className="lists-item__title">Активный список</h2>
            <div className="lists-item__type">открытый</div>
            <div className="lists-item__options">
              <div className="lists-item__settings">
                <img src={settings} alt="" />
              </div>
              <div className="lists-item__delete">
                <img src={deleteIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="user-lists__block-item">
          <div className="lists-item__inner">
            <div className="lists-item__icon">
              <img src={listsIcon} alt="" />
            </div>
            <h2 className="lists-item__title">Обычный список</h2>
            <div className="lists-item__type">закрытый</div>
            <div className="lists-item__options">
              <div className="lists-item__settings">
                <img src={settings} alt="" />
              </div>
              <div className="lists-item__delete">
                <img src={deleteIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLists