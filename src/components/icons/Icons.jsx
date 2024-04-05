import React from 'react';
import './icons.css';
import { BookOutlined, FileProtectOutlined, LikeOutlined } from '@ant-design/icons'

const Icons = () => {
    return (
        <div className='icons-container'>
            <div className="icons">
                <div className="text-icons">
                    <BookOutlined className='icon' />
                    <a href="#Quienes"><p className='text'>Quienes Somos</p></a>
                </div>
                <div className="text-icons">
                    <FileProtectOutlined className='icon'/>
                    <a href="#Contacto"><p className='text'>Contacto</p></a>
                </div>
            </div>
        </div>
    );
}

export default Icons;
