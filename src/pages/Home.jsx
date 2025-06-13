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

        // Atualiza os dados do usuário no contexto global
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
          <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3">
            <section className="mb-5">
              <h2>Seção Principal</h2>
              <p>Conteúdo da seção principal aqui...</p>
              <p className="text-danger">
                Olá {userData.name || '...'}, seu email é {userData.email || '...'} e tens permissão de {userData.tipo || '...'}
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
