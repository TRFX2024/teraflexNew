import React from 'react';
import './headerq.css';
import somos from '../../../videos/quienes.mp4';

const HeaderQ = () => {
    return (
        <div className='headerq'>
            <div className="header">
                <video autoPlay loop src={somos} className='somos'></video>
                <div className="header-text">
                    <div className="header-conts">
                        <h1 className='texto-header' >SOBRE NOSOTROS</h1>
                        <p className='par-header'>
                            Somos un equipo de profesionales del sur de Chile
                            comprometidos desde hace más de una década a aportar al
                            desarrollo de nuestro país,
                            desde el área de las tecnologías aplicadas a la
                            seguridad, diseñamos los proyectos mas complejos capaces
                            de satisfacer las demandas más exigentes del mercado.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HeaderQ;
