import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/scss/custom.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { UserProvider } from './context/UserContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
