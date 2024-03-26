import React from 'react';
import './hero.css';
import mision from '../../../imgs/mision.jpg';

const Hero = () => {
    return (
        <div className='hero'>
            <h1>NUESTRA MISIÓN</h1>
            <div className="hero-container">
                <img src={mision} alt="" className='mision' />
                <div className="hero-text">
                    <p>
                        Nuestra misión no es sólo construir soluciones robustas para nuestros clientes,
                        sino crear relaciones duraderas con ellos. La mayoría de nuestros proyectos
                        provienen de las recomendaciones de las personas que han trabajado con nosotros,
                        por lo que la excelencia en nuestro trabajo es crucial.
                        También creemos en utilizar únicamente
                        materiales de la más alta calidad como garantía en todo lo que hacemos.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
