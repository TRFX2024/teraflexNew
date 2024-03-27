import React from 'react';
import './header.css';
import Map from './map/Map';
import Formulario from './formulario/Formulario';


const Header = () => {
    return (
        <div className='header-c'>
            <Map/>
            <Formulario/>
        </div>
    );
}

export default Header;
