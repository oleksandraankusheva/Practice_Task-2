import React from 'react';
import img1 from '../assets/images/Rectangle 2.png';
import img2 from '../assets/images/Rectangle 1.png';
import Service from './Service';

function Content() {
  return (
    <section id="content">
      <div className="main-content">
        <div className="text-content">
          <p className="label">Creative work, creative mind</p>
          <p className="content-label">We Are Digital<br />Creative Agency</p>
          <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Curabi sed metus id et viverra augue.</p>
          <button className="button_content">Get in Touch</button>
        </div>
        <div className="image-content">
          <img src={img1} alt="Creative Office" className="img1" />
          <img src={img2} alt="Sticky Notes" className="img2" />
        </div>
      </div>
      <div className="services">
        <Service icon="design" label="Design" />
        <Service icon="development" label="Development" />
        <Service icon="qa" label="Testing & QA" />
      </div>
    </section>
  );
}

export default Content;