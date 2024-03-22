import React from 'react';
import './quienes.css';
import HeaderQ from '../../components/Quienes/header/HeaderQ';
import Hero from '../../components/Quienes/hero/Hero';
const Quienes = () => {
    return (
        <div className='quienes'>
            <HeaderQ/>
            <Hero/>
        </div>
    );
}

export default Quienes;
