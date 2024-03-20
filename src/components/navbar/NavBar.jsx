import React from 'react';
import "./navbar.css";
import logo from "../../imgs/logoGrande.png";
import { ApiOutlined, DatabaseOutlined, DownOutlined, ProjectOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const NavBar = () => {
    const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              Proyectos
            </a>
          ),
          icon: <ProjectOutlined/>,
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              Convenio de Mantenimiento
            </a>
          ),
          icon: <ApiOutlined/>,
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Datos y Electricidad
            </a>
          ),
          icon: <DatabaseOutlined/>,
        }
      ];
    return (
        <div className='navbar'>
            <div className="links">
                <img src={logo} className='logo' alt="" />
                <a href="#" className='link'>Inicio</a>
                <a href="#" className='link'>Quiénes somos</a>
                <a href="#" className='link'>Contacto</a>
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
                            <DownOutlined/>
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </div>
    );
}

export default NavBar;
