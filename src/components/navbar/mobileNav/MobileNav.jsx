import React from 'react';
import './mobilenav.css';

const MobileNav = ({ isOpne, toggleMenu }) => {
    return (
        <div>
             <div className={`mobile-menu ${isOpne ? "active" : ""}`} onClick={toggleMenu}>
                <div className="mobil-cont">
                    <ul>
                        <li><a className='menu-item'>Inicio</a></li>
                        <li><a className='menu-item'>Skills</a></li>
                        <li><a className='menu-item'>Experience</a></li>
                        <li><a className='menu-item'>Contact me</a></li>
                        <button className='btn-contact' >Hire me</button>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MobileNav;
