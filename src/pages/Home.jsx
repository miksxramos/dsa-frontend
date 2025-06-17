import React, { useEffect, useContext } from 'react';
import Sidebar from '../components/Sidebar';
import { UserContext } from '../context/UserContext';

const Home = () => {
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    const login = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: 'teste@example.com',
            password: '123456',
          }),
        });

        const data = await response.json();
        console.log('Login response:', data);

        setUserData({
          name: data.user.name,
          email: data.user.email,
          tipo: data.user.tipo,
        });

      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
    };

    login();
  }, [setUserData]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container-fluid flex-grow-1">
        <div className="row">

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
            <section className="mb-5">
              <h2 className="mb-3">Bem-vindo{userData.name ? `, ${userData.name}` : ''}!</h2>
              <p className="lead">
                Este é o painel principal da aplicação. Aqui encontras uma visão geral da tua conta.
              </p>
            </section>

            <div className="row g-4">
              <div className="col-md-6 col-xl-4">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="card-title">Informações Pessoais</h5>
                    <p className="card-text mb-1"><strong>Nome:</strong> {userData.name || 'Carregando...'}</p>
                    <p className="card-text mb-1"><strong>Email:</strong> {userData.email || 'Carregando...'}</p>
                    <p className="card-text"><strong>Tipo de Utilizador:</strong> {userData.tipo || 'Carregando...'}</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-4">
                <div className="card shadow-sm border-0 bg-light">
                  <div className="card-body">
                    <h5 className="card-title">Notificações</h5>
                    <p className="card-text">Nenhuma nova notificação no momento.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-4">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="card-title">Ações Rápidas</h5>
                    <button className="btn btn-primary btn-sm me-2">Editar Perfil</button>
                    <button className="btn btn-secondary btn-sm">Ver Estatísticas</button>
                  </div>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
