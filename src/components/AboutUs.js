import React from 'react';
import img3 from '../assets/images/Rectangle 3.png';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <section id="about-us">
      <div className="main-content">
        <div className="image-about">
          <img src={img3} alt="" className="img3" />
        </div>
        <div className="text-container">
          <p className="label">About Us</p>
          <p className="about-label">Design & Develop<br />For Better Solution</p>
          <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, habitasse nec mauris sagittis imperdiet lobortis porttitor. Ipsum mi sed uta aliquet ut. Turpis viverra volutpat sed eu porta morbi egesta ut hac rutrum ut augue vitae, nec, ut. Nibh nibh quam</p>
          <Link to="/portfolio" className="button_about">Learn More</Link>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;