import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [itemId, setItemid] = useState(0);
  useEffect(() => {
    const runner = document.querySelector('.runner')
    const items = [...document.querySelectorAll('.block-rectangle-cart')]
    const block = document.querySelector('.container-block-rectangle')

    const runnerMove = (item) => {
      runner.style.left = item.offsetLeft + 'px';
      runner.style.width = item.scrollWidth + 'px';
    }

    const mouseMove = ({ target }) => {
      if (target.classList.containst('block-rectangle-cart')) runnerMove(target)
      else runnerMove(items[itemId])
    }

    runnerMove(items[itemId])
    block.addEventListener('mousemove', mouseMove)
    return () => block.removeEventListener('mousemove', mouseMove)
  }, [itemId])

  return (
    <>
      <Header />
      <div className="container-block-rectangle">
        <div className="block-rectangle-carts">
          <span className='runner'></span>
          <div className="block-rectangle-cart" onClick={() => setItemid(0)}>
            <img src="/src/img/ico.svg" alt="" />
            <h1>Наличный и безналичный расчет</h1>
          </div>
          <div className="block-rectangle-cart" onClick={() => setItemid(1)} >
            <img src="/src/img/call-centr.svg" alt="" />
            <h1>Техническая помощь и консультация</h1>
          </div>
          <div className="block-rectangle-cart" onClick={() => setItemid(2)}>
            <img src="/src/img/надежность.svg" alt="" />
            <h1>Только качественная и проверенная продукция</h1>
            <a href="#"><img src="/src/img/arrow.svg" id='carts-arrow' alt="" /></a>
          </div>
          <div className="block-rectangle-cart" onClick={() => setItemid(3)}>
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
