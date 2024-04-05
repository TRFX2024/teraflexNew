import React from 'react';
import './test.css';
import hike from '../../imgs/hike.jpeg';
import fase3 from '../../imgs/fase3.jpeg';
import { Card } from 'antd';
import { GlobalOutlined, RobotOutlined, SecurityScanOutlined } from '@ant-design/icons';
const { Meta } = Card;
const Test = () => {

    const data = [
        {
            title: 'Fase 1',
            description: 'Se construye un sistema de video de seguridad para cubirar las areas criticas de la ciudad e integrar datos de videos entre las areas visibles, asegurando los estandares de seguridad de la ciudad',
            icon: <SecurityScanOutlined className='iconss' />
        },
        {
            title: 'Fase 2',
            description: "Implementar las capacidades y aplicaciones de IA, además de los recursos de seguridad pública para promover la transformación inteligente de un sistema de video de la ciudad, lo que convierte al video en datos de la IoT. Es probable que los clientes se beneficien de una mayor eficiencia en patrullajes, cumplimiento de la ley y programación de recursos en esta fase.",
            icon: <RobotOutlined className='iconss' />
        },
        {
            title: 'Fase 3',
            description: 'Combinar los datos de IoT generados en el sistema de video inteligente con datos de redes de información según las necesidades empresariales prácticas y, a continuación, proporcionar servicios y aplicaciones de valor agregado. Los clientes disfrutarán rápidamente de un conocimiento preciso de la situación alrededor de una ciudad.',
            icon: <GlobalOutlined className="iconss" />
        }
    ];

    return (
        <div className='test'>
            <div className="test-container">
                <p>La creación de un ambiente seguro y sereno es esencial para que las ciudades se desarrollen y prosperen. Con mayores densidades urbanas, las ciudades necesitan tecnologías más avanzadas para proteger a las personas y las propiedades. En años anteriores, la administración urbana dependía completamente del hombre para garantizar la seguridad: la policía y los guardias de seguridad privada. Con el surgimiento de las tecnologías de video, las ciudades adoptaron una manera mucho más eficaz de observar las cosas con atención</p>
                <div className="test-content">
                    {
                        data.map((item, index) => (
                            <Card key={index} className='card'
                                hoverable
                                cover={item.icon}
                            >
                                <Meta title={<div className='title'>{item.title}</div>}
                                    description={<div className='desc'>{item.description}</div>} />
                            </Card>))
                    }
                </div>
                <div className="test-content2">
                    <h1>Lo que ofrecemos</h1>
                    <p>
                        Mencionado lo anterior, es fácil observar que cualquier desarrollo
                        en la seguridad de la ciudad
                        será un proceso de multiples fases.
                        Cada paso hacia una nueva fase trae nuevas posibilidades y
                        oportunidades.
                    </p>
                    <img src={hike} className='imgHikes' alt="" />
                    <div className="test-fases">
                        <h1>Fase 1: sienta los cimientos para un sistema de seguridad urbana siga creciendo</h1>
                        <div className="fases-desc">
                            <div className="description">
                                <h3>Sistema de control terrestre</h3>
                                <p>
                                    Hikvision ofrece cámaras de seguridad diseñadas para escenarios urbanos complejos para satisfacer las necesidades de seguridad pública. El Sistema de Control de Tierra es la base de la infraestructura de seguridad urbana. Las cámaras en lugares clave y en las principales carreteras de la ciudad proporcionan continuamente
                                    información valiosa para los tomadores de decisiones.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="test-fases">
                        <h1>Fase 2: introducir un nuevo sistema de control que elevará el nivel de inteligencia</h1>
                        <div className="fases-desc">
                            <div className="description">
                                <h3>Sistema de control inteligente</h3>
                                <p>
                                    Hikvision integra sus algoritmos de aprendizaje profundo
                                    patentados en dispositivos de percepción inteligente en dominios
                                    perimetrales y poderosos dispositivos informáticos en la nube.
                                    En última instancia, esto produce datos efectivos y precisos, y proporciona
                                    aún más aplicaciones de seguridad funcionales basadas en esos datos.
                                </p>
                            </div>
                            <div className="description">
                                <h3>Centro de datos</h3>
                                <p>
                                    Hikvision proporciona un amplio rango de equipos centrales, desde soluciones
                                    de almacenamiento de video a prueba de fallas, grandes pantallas de
                                    alta definición, transmisiones hasta centrales informáticas,
                                    datos a gran escala y centros de capacitación con algoritmos de IA.
                                    Además, Hikvision también ofrece un poderoso sistema de aplicación para
                                    proporcionar y compartir sus capacidades de aplicación amplias y
                                    multidimensionales basadas en el procesamiento y el análisis de datos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="test-fases">
                        <h1>Fase 3: abrir nuevos caminos con socios y usarios finales por todo el pais</h1>
                        <div className="fases-desc">
                            <div className="description">
                                <h3>Sistema de control</h3>
                                <p>A medida que las tecnologías de inteligencia artificial evolucionan, 
                                    la seguridad urbana entra en una nueva 
                                    era inteligente con mejoras sin precedentes en la eficiencia.</p>

                            </div>
                            <div className="description">
                                <h3>Centro de datos</h3>
                                <p>Las cinco capas de sistemas de control se unen para crear una 
                                    cobertura integral de una ciudad, pero esto no es suficiente. 
                                    Una ciudad segura completa requerirá 
                                    inevitablemente la construcción de un sistema central.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={fase3} className='imgHikes' alt="" />
        </div>
    );
}

export default Test;
