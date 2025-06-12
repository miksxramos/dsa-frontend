import React, { useState } from 'react';

export default function CriarEvento() {
  const [evento, setEvento] = useState({
    desporto: '',
    local: '',
    data: '',
    hora: '',
  });

  const handleChange = (e) => {
    setEvento({
      ...evento,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Evento criado:', evento);
    alert('Evento criado com sucesso!');
    // Limpar formulário
    setEvento({
      desporto: '',
      local: '',
      data: '',
      hora: '',
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Criar Novo Evento</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Desporto</label>
          <input
            type="text"
            name="desporto"
            className="form-control"
            value={evento.desporto}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Local</label>
          <input
            type="text"
            name="local"
            className="form-control"
            value={evento.local}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Data</label>
          <input
            type="date"
            name="data"
            className="form-control"
            value={evento.data}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Hora</label>
          <input
            type="time"
            name="hora"
            className="form-control"
            value={evento.hora}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Criar Evento</button>
      </form>
    </div>
  );
}
