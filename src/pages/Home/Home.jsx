import React from 'react';
import "./home.css"
import Products from '../../components/products/Products';
import Header from '../../components/header/Header';
import Icons from '../../components/icons/Icons';
import Panoramic from '../../components/panoramic/Panoramic';
const Home = () => {

    return (
        <div className='home'>
            <Header/>
            <Icons/>
            <Products/>
            <Panoramic/>
        </div >
    );
}

export default Home;
