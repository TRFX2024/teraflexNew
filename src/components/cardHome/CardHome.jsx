import React, { useState } from 'react';
import './cardhome.css';
import { Card } from 'antd'
const { Meta } = Card;
const CardHome = ({data}) => {
    return (    
        <div className='card'>
            <div className="card-content">
                <Card
                    style={{
                        width: 350
                    }}
                    cover={
                        
                        <img
                            alt="example"
                            src={data.img}
                            className='img-card'
                        />
                    }
                    // actions={[
                    //     <ButtonMas name={name}/>,
                    //     <EllipsisOutlined key="ellipsis" />,
                    // ]}
                >
                    <Meta
                        title={data.name}
                        description={data.detalle}
                    />
                </Card>
            </div>
        </div>
    );
}

export default CardHome;
