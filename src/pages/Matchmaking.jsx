import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Matchmaking = () => (
  <div className="text-center p-4">
    <h2>Encontre Companheiros</h2>
    <Card className="mx-auto" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="placeholder-user.jpg" />
      <Card.Body>
        <Card.Title>João (Futebol)</Card.Title>
        <Card.Text>Nível: Intermediário</Card.Text>
        <Button variant="danger" className="me-2">✖ Recusar</Button>
        <Button variant="success">✓ Aceitar</Button>
      </Card.Body>
    </Card>
  </div>
);
export default Matchmaking;