import React from 'react'
import presentDefaultImg from "../../assets/svg/present_default-icon.svg"

function Present() {
  return (
    <div className='present'>
        <div className="present__inner">
            <div className="present__img-wrapper">
                <img src={presentDefaultImg} alt="" className="present__img" />
            </div>
            <div className="present__content">
                <h2 className="present__name">Какой-то подарок</h2>
                <p className="present__descr">Описание подарка. Lorem Ipsum is simply dummy text of the printing</p>
                <a href="#" className="present__button">Подробнее</a>
            </div>
        </div>
    </div>
  )
}

export default Present