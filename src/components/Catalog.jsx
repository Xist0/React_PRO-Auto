import React, { Component } from 'react'
import './catalog.css'

export class Catalog extends Component {
    render() {
        return (
            <div className="container-block-main">
                <div className="container-block">
                    <div className="container-block-text">
                        <h1>Автотовары: аксессуары,
                            расходники и многое другое</h1>
                        <div className="container-block-line"></div>
                        <h2>PROAuto - это специализированный интернет магазин востребованных товаров для автомобилей. </h2>
                    </div>
                    <div className="container-block-carts">
                        <div className="container-block-cart" id='block-akb'>
                            <div className="container-block-cart-on">
                                <h1>Аккумуляторы</h1>
                                <button><h1>Заказать онлайн</h1></button>
                            </div>
                        </div>
                        <div className="container-block-cart" id='block-maslo'>
                            <div className="container-block-cart-on">
                                <h1>Замена масла</h1>
                                <button><h1>Заказать онлайн</h1></button>
                            </div>
                        </div>
                        <div className="container-block-cart" id='block-polirov'>
                            <div className="container-block-cart-on">
                                <h1>Полировка кузова</h1>
                                <button><h1>Заказать онлайн</h1></button>
                            </div>
                        </div>
                        <div className="container-block-cart" id='block-electronik'>
                            <div className="container-block-cart-on">
                                <h1>Ремонт электрики</h1>
                                <button><h1>Заказать онлайн</h1></button>
                            </div>
                        </div>
                        <div className="container-block-cart" id='block-xim'>
                            <div className="container-block-cart-on">
                                <h1>Автохимия салона</h1>
                                <button><h1>Заказать онлайн</h1></button>
                            </div>
                        </div>
                        <div className="container-block-cart" id='block-rasxod'>
                            <div className="container-block-cart-on">
                                <h1>Расходники</h1>
                                <button id='btt'><h1>Заказать онлайн</h1></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Catalog