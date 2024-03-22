import React from 'react';
import './products.css';
import CardHome from '../cardHome/CardHome';

const Products = () => {
    return (
        <div className='products'>
            <div className="p-container">
                <h1>Productos</h1>
                <div className="p-content">
                    <CardHome/>
                    <CardHome/>
                    <CardHome/>
                </div>
            </div>
        </div>
    );
}

export default Products;
