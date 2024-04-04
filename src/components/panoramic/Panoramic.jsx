import React from 'react';
import './panoramic.css';
import panoramic from '../../imgs/panoramica.jpg';
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
                Desde edificios hasta centros comerciales, y desde la orientación del tráfico hasta ciudades seguras y más allá, Hikvision ofrece un conjunto completo de soluciones industriales. Con estas soluciones, no se trata solo de disfrutar de los sistemas de seguridad más modernos. También se trata de utilizar estos productos para mejorar la eficiencia operativa y hacer que su flujo de trabajo sea más inteligente. Ya sea que se trate de proyectos pequeños a medianos que necesitan solo unas pocas docenas de dispositivos, o proyectos grandes que requieren miles, Hikvision ofrece continuamente una visión clara y crea valor para los clientes. Cada industria enfrenta desafíos únicos, y es por eso que todas nuestras soluciones se adaptan a las necesidades específicas de cada escenario. Explore las soluciones de la industria de Hikvision hoy y no dude en ponerse en contacto con nuestro equipo si desea obtener más información sobre funciones específicas o necesita una solución por encargo. Esperamos poder servirle.
                </p>
            </div>
            <HeaderPano />
        </div>
    );
}

export default Panoramic;
