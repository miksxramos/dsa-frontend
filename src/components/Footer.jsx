import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-white py-4 mt-auto">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h5>Contato</h5>
          <p>gameon@gmail.com</p>
        </div>
        <div className="col-md-6 text-md-end">
          <p className="mb-0">&copy; {new Date().getFullYear()} Game On</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;