import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Schedule = () => (
  <div className="p-4">
    <h2>Agendar Jogo</h2>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Data e Hora</Form.Label>
        <Form.Control type="datetime-local" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Local</Form.Label>
        <Form.Control type="text" placeholder="Ex: Campo de Futebol ISCTE" />
      </Form.Group>
      <Button variant="success">Confirmar</Button>
    </Form>
  </div>
);
export default Schedule;