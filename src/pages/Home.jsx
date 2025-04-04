import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

// Importe as imagens (ajuste os nomes conforme seus arquivos)
import img1 from '../assets/images/image1.jpg';
import img2 from '../assets/images/image2.jpg';
import img3 from '../assets/images/image3.jpg';

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

          {/* Carrossel Bootstrap */}
          <div id="mainCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2"></button>
            </div>
            
            <div className="carousel-inner rounded-3">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="Imagem 1" style={{height: "400px", objectFit: "cover"}} />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3">
                  <h5>Primeiro Slide</h5>
                  <p>Descrição da primeira imagem</p>
                </div>
              </div>
              
              <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="Imagem 2" style={{height: "400px", objectFit: "cover"}} />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3">
                  <h5>Segundo Slide</h5>
                  <p>Descrição da segunda imagem</p>
                </div>
              </div>
              
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="Imagem 3" style={{height: "400px", objectFit: "cover"}} />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3">
                  <h5>Terceiro Slide</h5>
                  <p>Descrição da terceira imagem</p>
                </div>
              </div>
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Próximo</span>
            </button>
          </div>
          
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