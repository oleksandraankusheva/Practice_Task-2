import React from 'react';
import designIcon from '../assets/svg/icon-design.svg';
import developmentIcon from '../assets/svg/icon-development.svg';
import qaIcon from '../assets/svg/icon-qa.svg';

function Service({ icon, label }) {
  let iconSrc;
  switch (icon) {
    case 'design':
      iconSrc = designIcon;
      break;
    case 'development':
      iconSrc = developmentIcon;
      break;
    case 'qa':
      iconSrc = qaIcon;
      break;
    default:
      iconSrc = null;
  }

  return (
    <div className="service">
      <div className="icon-container">
        <div className={`icon-${icon}`} style={{ backgroundImage: `url(${iconSrc})` }}></div>
      </div>
      <div className="text-container">
        <p className="label-service">{label}</p>
        <p className="service-text">Lorem ipsum dolor sit amet, conse<br />adipiscing elit. Curabi sed metus<br />id et viverra augue.</p>
      </div>
    </div>
  );
}

export default Service;