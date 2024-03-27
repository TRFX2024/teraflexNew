import React, { useState } from 'react';
import "./navbar.css";
import logo from "../../imgs/logoGrande.png";
import { Link } from 'react-router-dom';
import MobileNav from './mobileNav/MobileNav';
import { MenuOutlined } from '@ant-design/icons';
const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  }

  return (
    <>
      <MobileNav isOpne={isOpen} toggleMenu={toggleMenu} />
      <div className='navbar'>
        <div className="links">
          <Link to={"/"}><img src={logo} className='logo' alt="" /></Link>
          <Link to={"/"} className='link'><a href="#" className='link'>Inicio</a> </Link>
          <Link className='link' to={"/quienes"}> <a className='link'>Quiénes somos</a></Link>
          <Link className='link' to={'/contacto'}><a className='link'>Contacto</a></Link>
          <a href="https://soporte.montepalermo.cl/" className='link'>Soporte</a>
          <a href="#" className='link'>Sistema de pórticos</a>
          <a href="https://isa.hik-connect.com/views/login/index.html?returnUrl=http://isa.hik-connect.com/devices/page&r=6577528085788024406&host=isa.hik-connect.com&from=c17392dc2e6c405a931b#/main/overview" className='link'>Revisa tus cámaras</a>
        </div>
        <button className='btn-resp' onClick={toggleMenu}>
          <MenuOutlined classID='menu-icon'/>
        </button>
      </div>
    </>

  );
}

export default NavBar;
