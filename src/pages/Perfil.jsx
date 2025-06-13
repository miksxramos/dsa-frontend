import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Perfil = () => (
  <div className="p-4">
    <h2>Meu Perfil</h2>
    <div className="text-center mb-4">
      <img src="user-avatar.jpg" className="rounded-circle" width="100" alt="Avatar" />
      <h3>Thiago</h3>
      <p>Futebol | Nível: Intermediário</p>
    </div>
    <h4>Estatísticas</h4>
    <p>Partidas Marcadas: 12</p>
    <ProgressBar now={60} label="Nível 60%" className="mb-3" />
  </div>
);
export default Perfil;