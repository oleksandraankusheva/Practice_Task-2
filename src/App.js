import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import AboutUs from './components/AboutUs';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import './styles/style.css';
import background from './assets/svg/background.svg';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh', margin: 0 }}>
      {location.pathname !== '/portfolio' && <Header />} {/* Умовний рендеринг Header */}
      <Routes>
        <Route path="/" element={<>
          <Content />
          <AboutUs />
          <News />
          <Contact />
        </>} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      {location.pathname !== '/portfolio' && <Footer />} {/* Умовний рендеринг Footer */}
    </div>
  );
}

export default App;