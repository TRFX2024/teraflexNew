import React from 'react';
import './icons.css';
import { BookOutlined, FileProtectOutlined, LikeOutlined } from '@ant-design/icons'

const Icons = () => {
    return (
        <div className='icons-container'>
            <div className="icons">
                <div className="text-icons">
                    <BookOutlined className='icon' />
                    <p className='text'>Blog</p>
                </div>
                <div className="text-icons">
                    <LikeOutlined className='icon'/>
                    <p className='text'>Historias de exito</p>
                </div>
                <div className="text-icons">
                    <FileProtectOutlined className='icon'/>
                    <p className='text'>Tecnología</p>
                </div>
            </div>
        </div>
    );
}

export default Icons;
