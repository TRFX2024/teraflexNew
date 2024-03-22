import React, { useState } from 'react';
import './cardhome.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd'
const { Meta } = Card;
import producto from '../../imgs/camera1.jpg';
import ButtonMas from './button/BtnMas';
const CardHome = () => {
    const name = "default";
    return (    
        <div className='card'>
            <div className="card-content">
                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src={producto}
                        />
                    }
                    actions={[
                        <ButtonMas name={name}/>,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        title="TANDEMVU"
                        description="Panorama general y detalles en una sola vista. Las cámaras TandemVu PTZ cuentan con el diseño de cámaras de próxima generación de Hikvision, integrando múltiples lentes en una cámara de seguridad para proporcionar una imagen grande y pequeños detalles.....
                        "
                    />
                </Card>
            </div>
        </div>
    );
}

export default CardHome;
