import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Geolocation = () => (
  <div className="p-4">
    <h2>Jogadores Próximos</h2>
    <div style={{ height: '400px' }}>
      <MapContainer center={[38.736946, -9.142685]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[38.736946, -9.142685]} />
      </MapContainer>
    </div>
  </div>
);
export default Geolocation; 