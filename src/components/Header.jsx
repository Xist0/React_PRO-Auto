import React, { Component } from 'react'
import './header.css'

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-menu">
          <div className="header-menu-nav">
            <img src="/src/img/logo.svg" id ='menu-nav-logo' alt="" />
            <a href="#"><h1>КОМПАНИЯ</h1></a>
            <a href="#"><h1>КАТАЛОГ</h1></a>
            <a href="#"><h1>УСЛУГИ</h1></a>
            <a href="#"><h1>ИНФОРМАЦИЯ</h1></a>
            <a href="#"><h1>КОНТАКТЫ</h1></a>
            <button><a href="#"><h1>ЗАКАЗАТЬ ЗВОНОК</h1></a></button>
            <img src="/src/img/lup.svg" alt="" />
            <img src="/src/img/корзина пассивная.svg" alt="" />
            <div className="menu-nav-quantity"><h1>0</h1></div>
          </div>
        </div>
        <div className="header-main-container">
          <div className="header-main-content">
            <h1>НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ</h1>
            <div className="header-main-content-button">
              <button><a href="#"><h1>ПЕРЕЙТИ В КАТАЛОГ</h1></a></button>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header