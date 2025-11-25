import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGift } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const handleGetStarted = () => {
    const rewardsSection = document.getElementById('rewards'); // Section ID to scroll to
    if (rewardsSection) {
      rewardsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero"> 
      <div className="circle top-right"></div>
      <div className="circle bottom-left"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Make Your City Better, Earn <span className="highlight">Rewards</span>
        </h1>
        <p className="hero-subtitle">
          Participate in civic activities, report issues, and contribute to your community while earning exciting rewards.
        </p>
        <button className="hero-btn" onClick={handleGetStarted}>
          Get Started <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
        </button>
      </div>

      <div className="floating-gift">
        <FontAwesomeIcon icon={faGift} className="gift-icon" />
      </div>
    </section>
  );
};

export default Hero;
