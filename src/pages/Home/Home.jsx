import React from 'react';
import "./home.css"
import Products from '../../components/products/Products';
import Header from '../../components/header/Header';
import Icons from '../../components/icons/Icons';
import Panoramic from '../../components/panoramic/Panoramic';
import Quienes from '../Quienes/Quienes';
import Contacto from '../Contacto/Contacto';
import Test from '../../components/tests/Test';
const Home = () => {

    return (
        <div className='home'>
            <div id="Inicio">
                <Header />
            </div>
            <div id='Icons'>
                <Icons/>
            </div>
            <div id="Productos">
                <Products />
            </div>
            <div id="Quienes">
                <Quienes />
            </div>
            <div id='Panoramica'>
                <Panoramic />
                <Test />
            </div>
            <div id="Contacto">
                <Contacto />
            </div>

        </div>
    );
}

export default Home;
