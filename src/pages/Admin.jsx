import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Admin = () => (
  <div className="p-4">
    <h2>Painel Admin</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Utilizador</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>João</td>
          <td><Button variant="warning" size="sm">Aviso</Button></td>
        </tr>
      </tbody>
    </Table>
  </div>
);
export default Admin;