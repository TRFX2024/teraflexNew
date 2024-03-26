import React from 'react';
import './quienes.css';
import HeaderQ from '../../components/Quienes/header/HeaderQ';
import Hero from '../../components/Quienes/hero/Hero';
import Hacemos from '../../components/Quienes/hacemos/Hacemos';
const Quienes = () => {
    return (
        <div className='quienes'>
            <HeaderQ/>
            <Hero/>
            <Hacemos/>
        </div>
    );
}

export default Quienes;
