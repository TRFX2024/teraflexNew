import React from 'react';
import './panoramic.css';
import panoramic from '../../imgs/panoramica.jpg';
import HeaderPano from './headerPano/HeaderPano';

const Panoramic = () => {
    return (
        <div className='panoramic'>
            <div className="ps-content">
                <p className='vista'>LO QUE OFRECEMOS </p>
                <img src={panoramic} className='pImage' alt="" />
            </div>
        </div>
    );
}

export default Panoramic;
