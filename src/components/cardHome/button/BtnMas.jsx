import React, { useState } from 'react';
import { Button, Modal} from 'antd'
import "./button.css";

const ButtonMas = ({name}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Button type="primary" className='btn-mas' onClick={showModal}>
                Ver más
            </Button>
            <Modal title={name} width={1000} className='modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
}

export default ButtonMas;
