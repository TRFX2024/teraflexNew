import React, { useState } from 'react';
import "./navbar.css";
import logo from "../../imgs/logoGrande.png";
import { ApiOutlined, DatabaseOutlined, DownOutlined, ProjectOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import MobileNav from './mobileNav/MobileNav';
const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  }
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Proyectos
        </a>
      ),
      icon: <ProjectOutlined />,
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Convenio de Mantenimiento
        </a>
      ),
      icon: <ApiOutlined />,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Datos y Electricidad
        </a>
      ),
      icon: <DatabaseOutlined />,
    }
  ];
  return (
    <>
      <MobileNav isOpne={isOpen} toggleMenu={toggleMenu} />
      <div className='navbar'>
        <div className="links">
          <Link to={"/"}><img src={logo} className='logo' alt="" /></Link>
          <Link to={"/"} className='link'><a href="#" className='link'>Inicio</a> </Link>
          <Link className='link' to={"/quienes"}> <a className='link'>Quiénes somos</a></Link>
          <Link className='link' to={'/contacto'}><a className='link'>Contacto</a></Link>
          <a href="#" className='link'>Soporte</a>
          <a href="#" className='link'>Sistena de pórticos</a>
          <a href="#" className='link'>Revisa tus cámaras</a>
          <Dropdown
            className='dropdown'
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className='link-a'>
                <p>Servicios</p>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          
        </div>
        <button className='btn-resp' onClick={toggleMenu}>
            <span class="material-symbols-outlined">
              menu
            </span>
          </button>
      </div>
    </>

  );
}

export default NavBar;
