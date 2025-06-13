import React from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';

const Chat = () => (
  <div className="p-4">
    <h2>Chat</h2>
    <ListGroup style={{ height: '300px', overflowY: 'scroll' }}>
      <ListGroup.Item>João: Olá! Bora jogar futebol?</ListGroup.Item>
      <ListGroup.Item>Você: Claro! Amanhã às 17h?</ListGroup.Item>
    </ListGroup>
    <Form className="mt-3">
      <Form.Control as="textarea" rows={2} placeholder="Digite sua mensagem..." />
      <Button variant="primary" className="mt-2">Enviar</Button>
    </Form>
  </div>
);
export default Chat;