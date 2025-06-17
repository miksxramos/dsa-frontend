import React from 'react';
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';

const Perfil = () => {
  return (
    <div className="p-4">
      <h2 className="mb-4">Meu Perfil</h2>

      <Card className="p-3 mb-4 shadow-sm">
        <Row className="align-items-center">
          <Col md={3} className="text-center">
            <img
              src="user-avatar.jpg"
              className="rounded-circle img-fluid"
              width="120"
              alt="Avatar"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/120';
              }}
            />
          </Col>

          <Col md={9}>
            <h3 className="mb-1">Thiago</h3>
            <p className="mb-2 text-muted">Modalidade: <strong>Futebol</strong></p>
            <p className="mb-0">Nível: <strong>Intermediário</strong></p>
          </Col>
        </Row>
      </Card>

      <Card className="p-3 shadow-sm">
        <h4 className="mb-3">Estatísticas</h4>
        <p className="mb-2">Partidas Marcadas: <strong>12</strong></p>
        <div>
          <small className="text-muted">Progresso no Nível:</small>
          <ProgressBar now={60} label="60%" className="mt-1" />
        </div>
      </Card>
    </div>
  );
};

export default Perfil;
