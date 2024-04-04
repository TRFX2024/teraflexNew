import React from 'react';
import './headerpano.css';
import cobertura from '../../../imgs/cobertura.jpg';
import eptz from '../../../imgs/camara.jpg';
import funcion from '../../../imgs/epz.jpg';
import pantalla from '../../../imgs/ar.png';
import { ArrowRightOutlined } from '@ant-design/icons';
const HeaderPano = () => {
    return (
        <div className='headerpano'>
            <div className="header-sc">
                <div className="pano-text">
                    <h1>COBERTURA SÚPER AMPLIA</h1>
                    <p>
                        Equipada con lentes múltiples, la cámara panorámica Dahua puede
                        implementar un empalme perfecto entre lentes y lograr un campo de visión de 180°
                        y 360°, proporcionando imágenes panorámicas de alta definición.
                    </p>
                    <div className="ver-mas">
                        <p>Ver más</p>
                        <ArrowRightOutlined/>
                    </div>
                </div>
                <img src={cobertura} alt="cobertura image" className='pano-img' />
            </div>
            <div className="header-sc">
                <div className="pano-text">
                    <h1>EXCELENTE RELACIÓN CALIDAD</h1>
                    <p>
                        Una cámara panorámica puede reemplazar múltiples cámaras convencionales,
                        lo que reduce en gran medida los costos de instalación, cableado y
                        mantenimiento. Con una cámara PTZ,
                        los usuarios pueden acercarse fácilmente para ver detalles en primer plano.
                    </p>
                    <div className="ver-mas">
                        <p>Ver más</p>
                        <ArrowRightOutlined/>
                    </div>
                </div>
                <img src={eptz} alt="EPTZ image" className='pano-img' />
            </div>
            <div className="header-sc">
                <div className="pano-text">
                    <h1>FUNCIÓN EPTZ</h1>
                    <p>
                        EPTZ puede acercar y rastrear simultáneamente múltiples objetivos
                        humanos y de vehículos cuando se activa una alarma, realizando
                        un enlace PTZ. Además de una vista panorámica,
                        EPTZ también proporciona detalles enriquecidos
                        para ayudar a los usuarios a ver claramente los objetos distantes.
                    </p>
                    <div className="ver-mas">
                        <p>Ver más</p>
                        <ArrowRightOutlined/>
                    </div>
                </div>
                <img src={funcion} alt="" className="pano-img" />
            </div>
            <div className="header-sc">
                <div className="pano-text">
                    <h1>PANORÁMICA AR</h1>
                    <p>
                        Basado en la tecnología AR y la integración de recursos, AR Panorama logra un nuevo modo de comando visual,
                        controlable y despachable en un solo sistema.
                    </p>
                    <div className="ver-mas">
                        <p>Ver más</p>
                        <ArrowRightOutlined/>
                    </div>
                </div>
                <img src={pantalla} alt="" className="pano-img" />
            </div>
        </div>
    );
}

export default HeaderPano;
