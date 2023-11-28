import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <div className="container-block-rectangle">
        <div className="block-rectangle-carts">
          <div className="block-rectangle-cart" id='cart-red'>
            <img src="/src/img/ico.svg" alt="" />
            <h1>Наличный и безналичный расчет</h1>
          </div>
          <div className="block-rectangle-cart">
            <img src="/src/img/call-centr.svg" alt="" />
            <h1>Техническая помощь и консультация</h1>
          </div>
          <div className="block-rectangle-cart">
            <img src="/src/img/надежность.svg" alt="" />
            <h1>Только качественная и проверенная продукция</h1>
            <a href="#"><img src="/src/img/arrow.svg" id='carts-arrow' alt="" /></a>
          </div>
          <div className="block-rectangle-cart">
            <img src="/src/img/поддержка.svg" alt="" />
            <h1>Мы всегда на связи
              с 9:00 до 18:00!</h1>
             < a href="#"><img src="/src/img/arrow.svg" id='carts-arrow' alt="" /></a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
