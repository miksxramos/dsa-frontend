import React from 'react';

const eventos = [
  {
    id: 1,
    desporto: 'Futebol',
    local: 'Campo Municipal',
    data: '2025-06-15',
    hora: '10:00',
  },
  {
    id: 2,
    desporto: 'Basquetebol',
    local: 'Ginásio Central',
    data: '2025-06-16',
    hora: '18:30',
  },
  {
    id: 3,
    desporto: 'Vôlei de Praia',
    local: 'Praia da Cidade',
    data: '2025-06-18',
    hora: '15:00',
  },
];

export default function Eventos() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Eventos Desportivos</h2>
      {eventos.map((evento) => (
        <div key={evento.id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{evento.desporto}</h5>
            <p className="card-text">
              <strong>Local:</strong> {evento.local}<br />
              <strong>Data:</strong> {evento.data}<br />
              <strong>Hora:</strong> {evento.hora}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
