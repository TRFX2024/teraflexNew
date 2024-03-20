import React from 'react';
import banner1 from "../../imgs/banner1.jpg"
import banner2 from "../../imgs/banner2.jpg"
import banner3 from "../../imgs/banner3.jpg"
import banner5 from "../../imgs/banner5.jpg"
import { Carousel } from 'antd';

const Header = () => {
    return (
        <div>
            <div className="homeContent">
                <Carousel autoplay autoplaySpeed={5000} className='carruselCont'>
                    <div className='ban-cont'>
                        <button className='btn-conocenos'>Quiénes somos</button>
                        <img src={banner1} className='banner' alt="" />

                    </div>
                    <div className='ban-cont'>
                        <img src={banner2} className='banner' alt="" />
                    </div>
                    <div className='ban-cont'>
                        <img src={banner3} className='banner' alt="" />
                    </div>
                    <div className='ban-cont'>
                        <img src={banner5} className='banner' alt="" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Header;
