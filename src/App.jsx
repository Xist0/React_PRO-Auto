import { useState, useEffect, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Catalog from './components/Catalog';

function App() {

  const [currentElement, setCurrentElem] = useState();

  const runner = useRef()

  // useEffect(() => {
  //   const runner = document.querySelector(".runner");
  //   const items = [...document.querySelectorAll(".block-rectangle-cart")];
  //   const rectangle = document.querySelector(".container-block-rectangle");

  //   const runnerMove = (item) => {
  //     runner.style.left = item.offsetLeft + "px";
  //     runner.style.width = item.scrollWidth + "px";
  //   };

  //   const mouseMove = ({ target }) => {
  //     if (target.classList.contains("block-rectangle-cart")) runnerMove(target);
  //     else runnerMove(items[itemId]);
  //   };

  //   runnerMove(items[itemId]);
  //   rectangle.addEventListener("mouseenter", mouseMove);
  //   return () => rectangle.removeEventListener("mousemove", mouseMove);
  // }, [itemId]);

  const mouseEnterHandler = (e) => {
    runner.current.style.left = e.target.offsetLeft + "px";
    runner.current.style.width = e.target.scrollWidth + "px";
  }

  const mouseLeaveHandler = () => {
    runner.current.style.left = currentElement.offsetLeft + "px";
    runner.current.style.width = currentElement.scrollWidth + "px";
  }

  const setCurrentElement = (e) => {
    setCurrentElem(e.currentTarget)
  }

  return (
    <>
      <Header />
      <div className="container-block-rectangle">
        <div className="block-rectangle-carts">
          <span ref={runner} className='runner'></span>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="block-rectangle-cart" onClick={setCurrentElement}>
            <img src="/src/img/ico.svg" alt="" />
            <h1>Наличный и безналичный расчет</h1>
          </div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="block-rectangle-cart" onClick={setCurrentElement} >
            <img src="/src/img/call-centr.svg" alt="" />
            <h1>Техническая помощь и консультация</h1>
          </div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="block-rectangle-cart" onClick={setCurrentElement}>
            <img src="/src/img/надежность.svg" alt="" />
            <h1>Только качественная и проверенная продукция</h1>
            <a href="#"><img src="/src/img/arrow.svg" id='carts-arrow' alt="" /></a>
          </div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="block-rectangle-cart" onClick={setCurrentElement}>
            <img src="/src/img/поддержка.svg" alt="" />
            <h1>Мы всегда на связи
              с 9:00 до 18:00!</h1>
            < a href="#"><img src="/src/img/arrow.svg" id='carts-arrow' alt="" /></a>
          </div>
        </div>
      </div>
      <Catalog />
      <div className="container-block-services">
        <div className="block-services">
          <h1>услуги</h1>
          <div className="block-services-line"></div>
          <h2>Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором продукции.</h2>
          <div className="block-services-main">
            <div className="block-services-main-content">
              <div className="block-services-main-content-img">
                <img src="./img/servisec-call.png" alt="" />
              </div>
              <div className="block-services-main-content-txt">
                <h1>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА</h1>
                <h2>Поможем с выбором аккумулятора, моторного масла и аксессуаров для автомобиля под ваши требования. </h2>
              </div>
              <div className="block-services-main-content-img">
                <img src="./img/servisec-line-left.svg" alt="" />
                <img src="./img/servisec-tread.svg" alt="" />
                <img src="./img/servisec-line-right.svg" alt="" />
              </div>
              <div className="block-services-main-content-txt">
                <h1>ОБМЕН СТАРОГО АККУМУЛЯТОРА НА НОВЫЙ</h1>
                <h2>Поможем с выбором аккумулятора, моторного масла и аксессуаров для автомобиля под ваши требования. </h2>
              </div>
              <div className="block-services-main-content-img">
                <img src="./img/servisec-diagnostick.svg" alt="" />
              </div>
              <div className="block-services-main-content-txt">
                <h1>БЕСПЛАТНАЯ ДИАГНОСТИКА АККУМУЛЯТОРА</h1>
                <h2>Приезжайте к нам и мы бесплатно проведём диагностику вашего аккумулятора! </h2>
              </div>
            </div>
            <div className="block-services-main-img">
              <img src="./img/поддержка.svg" alt="" />

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
