import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Smart Civic</h3>
          <p>Building a smarter, connected community with citizen engagement, rewards, and data-driven solutions.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#rewards">Rewards</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
            <li><a href="#leaderboard">Leaderboard</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@smartcivic.com</p>
          <p>Phone: +977-980-000-0000</p>
          <p>Address: Dhangadhi, Nepal</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2025 Smart Civic. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
