import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Filters = () => (
  <div className="p-4">
    <h2>Filtrar Companheiros</h2>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Desporto</Form.Label>
        <Form.Select>
          <option>Futebol</option>
          <option>Basquete</option>
          <option>Ténis</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nível</Form.Label>
        <Form.Select>
          <option>Iniciante</option>
          <option>Intermediário</option>
          <option>Avançado</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary">Aplicar Filtros</Button>
    </Form>
  </div>
);
export default Filters;