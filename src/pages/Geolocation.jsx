import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // ✅ Importa o CSS do Leaflet

const Geolocation = () => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Jogadores Próximos</h2>
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer
        center={[38.736946, -9.142685]}
        zoom={13}
        style={{ height: '100%', width: '100%' }} // ✅ Garante o tamanho correto
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[38.736946, -9.142685]} />
      </MapContainer>
    </div>
  </div>
);

export default Geolocation;
