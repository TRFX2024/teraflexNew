import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

const Map = () => {
    return (
        <div className=''>
            <MapContainer center={[-38.732467, -72.617231]} className='map' zoom={20} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-38.732467, -72.617231]}>
                    <Popup>
                        Teraflex Spa
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;
