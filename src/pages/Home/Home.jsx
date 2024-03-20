import React from 'react';
import "./home.css"
import banner1 from "../../imgs/banner1.jpg"
import banner2 from "../../imgs/banner2.jpg"
import banner3 from "../../imgs/banner3.jpg"
import banner5 from "../../imgs/banner5.jpg"
import { BookOutlined, FileProtectOutlined, LikeOutlined } from '@ant-design/icons'
import { Carousel } from 'antd';
import Products from '../../components/products/Products';
import Header from '../../components/header/Header';
const Home = () => {

    return (
        <div className='home'>
            <Header/>
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
            <Products/>
        </div >
    );
}

export default Home;
