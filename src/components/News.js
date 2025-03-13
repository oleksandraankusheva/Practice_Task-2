import React from 'react';
import img6 from '../assets/images/Rectangle 6.png';
import img7 from '../assets/images/Rectangle 7.png';
import img8 from '../assets/images/Rectangle 8.png';

function News() {
  return (
    <section id="news">
      <div className="blog-header">
        <p className="label">Blog</p>
        <h2>Read Our News</h2>
      </div>
      <div className="blog-grid">
        <div className="blog-item">
          <img src={img6} alt="Minimalist decor with book" />
          <p className="blog-meta">09 April, 2022 by Admin</p>
          <p className="blog-text">Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam</p>
          <a href="#" className="read-more">Read More</a>
        </div>
        <div className="blog-item">
          <img src={img7} alt="Dried leaf close-up" />
          <p className="blog-meta">09 April, 2022 by Admin</p>
          <p className="blog-text">Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam</p>
          <a href="#" className="read-more">Read More</a>
        </div>
        <div className="blog-item">
          <img src={img8} alt="Lemons on white table" />
          <p className="blog-meta">09 April, 2022 by Admin</p>
          <p className="blog-text">Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam</p>
          <a href="#" className="read-more">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default News;