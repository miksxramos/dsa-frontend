import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './context/UserContext'; // 🆕 Add this line

import Home from './pages/Home.jsx';
import Perfil from './pages/Perfil.jsx';
import Admin from './pages/Admin.jsx';
import Chat from './pages/Chat.jsx';
import Filters from './pages/Filters.jsx';
import Geolocation from './pages/Geolocation.jsx';
import Matchmaking from './pages/Matchmaking.jsx';
import Notifications from './pages/Notification.jsx';
import Schedule from './pages/Schedule.jsx';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';


import './assets/css/styles.css';

function App() {
  const [userData, setUserData] = useState({ name: '', email: '', tipo: '' }); // 🆕 Add this state

  return (
    <UserContext.Provider value={{ userData, setUserData }}> {}
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/match" element={<Matchmaking />} />
          <Route path="/mapa" element={<Geolocation />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/agendar" element={<Schedule />} />
          <Route path="/filtros" element={<Filters />} />
          <Route path="/notificacoes" element={<Notifications />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
        </Router>
      
    </UserContext.Provider>
  );
}

export default App;
