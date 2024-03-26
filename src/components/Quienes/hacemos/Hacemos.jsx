import React from 'react';
import './hacemos.css';
import hacemos1 from '../../../imgs/hacemos1.jpg';
import hacemos2 from '../../../imgs/hacemos2.jpg';
import hacemos3 from '../../../imgs/hacemos3.jpg';
import hacemos4 from '../../../imgs/hacemos4.jpg';
import { FaCheck } from "react-icons/fa6";
const Hacemos = () => {
    return (
        <div className='hacemos'>
            <h1>QUE HACEMOS</h1>
            <div className="hacemos-cont">
                <div className="info-text">
                    <ul className='text-ul'>
                        <div className="text-icons">
                            <FaCheck className='icon-check' />
                            <li className='text-li'>
                                Teraflex Spa se dedica desde el año 2009 a diseñar y ejecutar proyectos de cámaras de seguridad enfocadas principalmente en el sector público,
                                prestamos asesorías en ante proyectos y diseño de ingeniería de este tipo de soluciones.
                            </li>
                        </div>
                        <div className="text-icons">
                            <FaCheck className='icon-check' />
                            <li className='text-li'>
                                Trabajamos las más actuales tecnologías de manera de poder brindar la más
                                confiable solución en los sistemas instalados,
                                contamos para ello con personal altamente calificado y en constantes capacitaciones directamente impartidas por las marcas lideres en el mercado de la seguridad.
                            </li>
                        </div>
                        <div className="text-icons">
                            <FaCheck className='icon-check' />
                            <li className='text-li'>
                                Nuestros procesos constructivos basados en la experiencia obtenida durante más de una década nos aseguran entregar un producto de
                                inigualable calidad que nos aseguran una fiabilidad de altos niveles.
                            </li>
                        </div>
                        <div className="text-icons">
                            <FaCheck className='icon-check' />
                            <li className='text-li'>
                                Buscamos la excelencia en cada uno de nuestros servicios y con ello nos hemos transformado en la empresa lider del sur de Chile.
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="info">
                    <div className="info-c">
                        <img src={hacemos1} className='img-hacemos' alt="" />
                        <p className='text-img'>Videowall</p>
                    </div>
                    <div className="info-c">
                        <img src={hacemos2} className='img-hacemos' alt="" />
                        <p className='text-img'>Montaje</p>
                    </div>
                    <div className="info-c">
                        <img src={hacemos3} className='img-hacemos' alt="" />
                        <p className='text-img'>Equipamiento</p>
                    </div>
                    <div className="info-c">
                        <img src={hacemos4} className='img-hacemos' alt="" />
                        <p className='text-img'>Soporte</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hacemos;
