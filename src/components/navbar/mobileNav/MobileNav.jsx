import React from 'react';
import './mobilenav.css';
import { Link } from 'react-router-dom';

const MobileNav = ({ isOpne, toggleMenu }) => {
    return (
        <div>
             <div className={`mobile-menu ${isOpne ? "active" : ""}`} onClick={toggleMenu}>
                <div className="mobil-cont">
                    <ul>
                        <Link className='decor' to={'/'}><li className='li-menu'>Inicio</li></Link>
                        <Link className='decor' to={'/quienes'}> <li className='li-menu'>Quiénes somos</li></Link>
                        <Link className='decor' to={'/contacto'}> <li className='li-menu'>Contacto</li></Link> 
                        <a className='decor' href="https://soporte.montepalermo.cl/"><li className='li-menu'>Soporte</li></a> 
                        <a className='decor' href="#"><li className='li-menu'>Sistema de pórticos</li></a>
                        <a className='decor' href="https://isa.hik-connect.com/views/login/index.html?returnUrl=http://isa.hik-connect.com/devices/page&r=34655659560261127&host=isa.hik-connect.com&from=c17392dc2e6c405a931b#/main/overview"><li className='li-menu'>Revisa tus cámaras</li></a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MobileNav;
