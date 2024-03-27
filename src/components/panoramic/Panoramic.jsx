import React from 'react';
import './panoramic.css';
import panoramic from '../../imgs/panoramic.jpg';
import HeaderPano from './headerPano/HeaderPano';

const Panoramic = () => {
    return (
        <div className='panoramic'>
            <div className="ps-content">
                <p className='vista'>VIGILANCIA PANORAMICA</p>
                <img src={panoramic} className='pImage' alt="" />
            </div>
            <div className="p-texts">
                <p className='p-text'>
                    El sistema panorámico está diseñado para aplicaciones
                    que requieren una vista panorámica de 360°, 270° o 180°
                    para el conocimiento de la situación, como el mapa de multitudes
                    y la densidad de vehículos. Su cámara PTZ de alta velocidad y la
                    tecnología EPTZ pueden rastrear rápida y automáticamente objetivos
                    en movimiento sin perder detalles del comportamiento del objetivo. Es una solución de vigilancia perfecta que puede reemplazar múltiples cámaras convencionales, reducir la complejidad y ahorrar costos de instalación y mantenimiento.
                </p>
            </div>
            <HeaderPano />
        </div>
    );
}

export default Panoramic;
