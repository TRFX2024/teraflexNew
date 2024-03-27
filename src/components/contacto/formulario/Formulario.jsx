import React from 'react';
import './formulario.css';
import { Button, ConfigProvider, Input } from 'antd';
import { MailOutlined, PhoneOutlined, PushpinOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const Formulario = () => {

    return (
        <div className='formulario'>
            <div className="contactanos">
                <h1>Contactanos</h1>
                <div className="conIcons">
                    <PushpinOutlined />
                    <p>Av. Alemania 0999 oficina 308, Temuco, Chile</p>
                </div>
                <div className="conIcons">
                    <MailOutlined/>
                    <a href="ailto:contacto@montepalermo.com">contacto@montepalermo.com</a>
                </div>
                <div className="conIcons">
                    <PhoneOutlined/>
                    <p>+56 452 668373</p>
                </div>
            </div>
            <div className="form">
                <h1>Formulario de Contacto</h1>
                <div className="form-container">
                    <ConfigProvider
                        theme={{
                            components: {
                                Input: {
                                    activeBorderColor: "#ad0e0e",
                                    hoverBorderColor: "#ad0e0e",
                                },
                            },
                        }}
                    >
                        <div className="inputs">
                            <p>Nombre</p>
                            <Input placeholder="Nombre" className='form-text' />
                        </div>
                        <div className="inputs">
                            <p>Correo electronico</p>
                            <Input placeholder="Correo electronico" className='form-text' />
                        </div>
                        <div className="inputs">
                            <p>Mensaje</p>
                            <TextArea placeholder="Mensaje" className='form-area' />
                        </div>
                        <Button type='primary' className='btn-form'>Enviar</Button>
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
}

export default Formulario;