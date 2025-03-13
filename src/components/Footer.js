import React from 'react';
import facebookIcon from '../assets/images/bxl_facebook-square.png';
import twitterIcon from '../assets/images/fa6-brands_twitter-square.png';
import instagramIcon from '../assets/images/akar-icons_instagram-fill.png';
import icon from '../assets/svg/icon.svg';

function Footer() {
  return (
    <footer>
      <div className="icon-menu" style={{ backgroundImage: `url(${icon})` }}></div>
      <div className="contact">
        <h3>Our Contact</h3>
        <p className="text-contact">Office: 4042 Imperial Road, UK</p>
        <p className="text-contact">Help: (0411) 425 277 / 425</p>
        <p className="text-contact">Email: inbox@finarice.com</p>
      </div>
      <div className="about">
        <h3>About Us</h3>
        <p className="text-contact">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.<br />Commodo amet posuere porta vitae mi accumsan.<br />Ultricies</p>
      </div>
      <div className="subscribe">
        <h3>Subscribe</h3>
        <input type="email" placeholder="Your Email" />
        <button className="sub">&gt;</button>
        <div className="follow">
          <h3>Follow Us</h3>
          <div className="social">
            <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
            <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;