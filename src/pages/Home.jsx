import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Home = () => (
  <div className="d-flex flex-column min-vh-100">
    {/* <Header /> */}
    {/* <Navbar /> */}
    
    <div className="container-fluid flex-grow-1">
      <div className="row">
        <Sidebar />
        
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3">
          <section className="mb-5">
            <h2>Seção Principal</h2>
            <p>Conteúdo da seção principal aqui...</p>
          </section>
          
          <section className="row g-4">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Card 1</h5>
                  <p className="card-text">Conteúdo do card</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Card 2</h5>
                  <p className="card-text">Conteúdo do card</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    
    {/* <Footer /> */}
  </div>
);

export default Home;