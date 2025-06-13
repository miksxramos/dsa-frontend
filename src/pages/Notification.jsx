import React from 'react';
import { Badge, ListGroup } from 'react-bootstrap';

const Notifications = () => (
  <div className="p-4">
    <h2>Notificações <Badge bg="danger">3</Badge></h2>
    <ListGroup>
      <ListGroup.Item>Novo match com Maria!</ListGroup.Item>
      <ListGroup.Item>João aceitou seu convite</ListGroup.Item>
      <ListGroup.Item>Lembrete: Jogo amanhã às 17h</ListGroup.Item>
    </ListGroup>
  </div>
);
export default Notifications;