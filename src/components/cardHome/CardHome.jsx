import React from 'react';
import './cardhome.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
import producto from '../../imgs/camera1.jpg';
const CardHome = () => {
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
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        title="TANDEMVU"
                        description="Panorama general y detalles en una sola vista. Las cámaras TandemVu PTZ cuentan con el diseño de cámaras de próxima generación de Hikvision, integrando múltiples lentes en una cámara de seguridad para proporcionar una imagen grande y pequeños detalles.
                        "
                    />
                    <button>Hola</button>
                </Card>
            </div>
        </div>
    );
}

export default CardHome;
