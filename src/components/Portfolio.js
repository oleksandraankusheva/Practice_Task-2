import React from 'react';
import card1 from '../assets/images/card_1.png';
import card2 from '../assets/images/card_2.png';
import card3 from '../assets/images/card_3.png';
import { useNavigate } from 'react-router-dom';

function Portfolio() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  return (
    <section className="portfolio">
      <div className="portfolio-header">
        <h2>View Our Case Studies</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, hab.</p>
        <a href="#" className="view-all">VIEW ALL →</a>
      </div>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src={card1} alt="Leaf with water drops" />
          <a href="#" className="arrow">→</a>
        </div>
        <div className="portfolio-item">
          <img src={card2} alt="Modern kitchen" />
          <a href="#" className="arrow">→</a>
        </div>
        <div className="portfolio-item">
          <img src={card3} alt="Minimalist dining table" />
          <a href="#" className="arrow">→</a>
        </div>
      </div>
      <button className="button_about" onClick={handleReturn}>Return</button>
    </section>
  );
}

export default Portfolio;