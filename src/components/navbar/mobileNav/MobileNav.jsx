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
                        <li className='li-menu'>Contacto</li>
                        <li className='li-menu'>Soporte</li>
                        <li className='li-menu'>Sistema de pórticos</li>
                        <li className='li-menu'>Revisa tus cámaras</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MobileNav;
