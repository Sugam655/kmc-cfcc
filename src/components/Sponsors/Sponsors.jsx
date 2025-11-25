import React, { useState, useEffect } from 'react';
import './Sponsors.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faLeaf, 
  faStore, 
  faCoffee, 
  faHeart, 
  faWifi, 
  faChevronLeft, 
  faChevronRight 
} from '@fortawesome/free-solid-svg-icons';

const Sponsors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sponsors = [
    { name: 'City Bank', type: 'Financial Partner', icon: faBuilding, color: 'blue' },
    { name: 'EcoSolutions', type: 'Sustainability Partner', icon: faLeaf, color: 'green' },
    { name: 'Local Market', type: 'Retail Partner', icon: faStore, color: 'purple' },
    { name: 'Urban Brew', type: 'Hospitality Partner', icon: faCoffee, color: 'yellow' },
    { name: 'HealthFirst', type: 'Wellness Partner', icon: faHeart, color: 'red' },
    { name: 'TechNet', type: 'Technology Partner', icon: faWifi, color: 'indigo' }
  ];

  const visibleSlides = typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 5;
  const totalSlides = sponsors.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => setCurrentIndex((currentIndex + 1) % totalSlides);
  const prevSlide = () => setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);

  const getColorClasses = (color) => ({
    blue: 'blue-card',
    green: 'green-card',
    purple: 'purple-card',
    yellow: 'yellow-card',
    red: 'red-card',
    indigo: 'indigo-card'
  })[color] || 'blue-card';

  const getIconColor = (color) => ({
    blue: 'blue-icon',
    green: 'green-icon',
    purple: 'purple-icon',
    yellow: 'yellow-icon',
    red: 'red-icon',
    indigo: 'indigo-icon'
  })[color] || 'blue-icon';

  return (
    <section className="sponsors-section" id="sponsors">
      <div className="sponsors-header">
        <h2>Our Valued Sponsors</h2>
        <div className="sponsors-buttons">
          <button onClick={prevSlide}><FontAwesomeIcon icon={faChevronLeft} /></button>
          <button onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>

      <div className="sponsors-container">
        <p className="sponsors-description">
          These organizations help make our community rewards program possible through their generous support.
        </p>

        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
              width: `${(100 / visibleSlides) * totalSlides}%`
            }}
          >
            {sponsors.map((sponsor, index) => (
              <div key={index} className="carousel-slide" style={{ width: `${100 / totalSlides}%` }}>
                <div className={`sponsor-card ${getColorClasses(sponsor.color)}`}>
                  <div className={`sponsor-icon ${getIconColor(sponsor.color)}`}>
                    <FontAwesomeIcon icon={sponsor.icon} size="2x" />
                  </div>
                  <h3>{sponsor.name}</h3>
                  <p>{sponsor.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-dots">
          {sponsors.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={index === currentIndex ? 'dot active' : 'dot'}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
