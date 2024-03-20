import React from 'react';
import "./layout.css";
import NavBar from '../components/navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
const Layout = () => {
    return (
        <div>
            <NavBar/>
            <div className="content">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;
