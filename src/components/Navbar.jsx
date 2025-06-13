import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // 🆕 import the context

const Navbar = () => {
  const { userData } = useContext(UserContext); // 🆕 access userData

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/match">Encontrar Jogadores</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mapa">Jogadores Próximos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/chat">Mensagens</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/agendar">Agendar Jogos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/perfil">Meu Perfil</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                Mais
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/filtros">Filtros</NavLink></li>
                <li><NavLink className="dropdown-item" to="/notificacoes">Notificações</NavLink></li>
                {userData.tipo === 'admin' && (
                  <li><NavLink className="dropdown-item" to="/admin">Painel Admin</NavLink></li>
                )}
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Buscar jogadores..." />
            <button className="btn btn-outline-light" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
