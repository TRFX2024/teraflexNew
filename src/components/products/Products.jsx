import React from 'react';
import './products.css';
import CardHome from '../cardHome/CardHome';


const Products = () => {
    const data = [
        {
            name: 'Proyectos',
            img: "https://i.ibb.co/hV7fsJk/panoramica1.jpg" ,
            detalle: "Simplemente en seguridad somos los mejores, miles de cámaras de seguridad instaladas y el respaldo de nuestros clientes nos avalan, la búsqueda de la excelencia y la mejora continua nos han llevado a estar en constante desarrollo y mejoras de nuestros procesos para poder entregar lo mejor de nosotros a cada proyecto que ejecutamos."
        },
        {
            name: 'Convenio de mantenimiento',
            img: "https://i.ibb.co/L6rGCK4/panoramica2.jpg",
            detalle: "Al ser los sistemas de seguridad una herramienta vital para la protección de las personas requieren de una constante supervisión de personal altamente calificado, para ello nuestra empresa cuenta con los recursos técnicos y humanos necesarios para brindar un excelente servicio tanto preventivo como correctivo."
        },
        {
            name: 'Datos y Electricidad',
            img: "https://i.ibb.co/bgPDxyB/panoramica3.webp",
            detalle: "Entendemos la importancia de elegir una empresa con experiencia, confiable y que ofrezca los mejores servicios, sobre todo si lo que requiere son soluciones en proyectos de datos como eléctricos, la experiencia de una década desarrollando proyectos y la calidad puesta en cada uno de ellos asegura que nuestros servicios son de excelencia, no dude en contactarnos, no se arrepentirá."
        }
    ]
    return (
        <div className='products'>
            <div className="p-container">
                <h1>Servicios</h1>
                <div className="p-content">
                    {
                        data.map((data) => (
                            <CardHome data={data}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Products;
