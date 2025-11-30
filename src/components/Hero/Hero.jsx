import React, { useEffect, useState } from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGift } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const images = [
    "/images/streetdirty.webp",
    "/images/street.jpg",
    "/images/roaddamage.jpg",
    "/images/streelight2.jpg",
    "/images/dead.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [showReport, setShowReport] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            Make Your City Better, Earn <span className="highlight">Rewards</span>
          </h1>

          <p className="hero-subtitle">
            Participate in civic activities, report issues, and contribute to your community while earning exciting rewards.
          </p>

          <button className="hero-btn" onClick={() => setShowReport(true)}>
            Report an Issue <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
          </button>
        </div>

        <div className="floating-gift">
          <FontAwesomeIcon icon={faGift} className="gift-icon" />
        </div>
      </section>

      {/* REPORT FORM MODAL */}
      {showReport && (
        <div className="report-modal">
          <div className="report-content">

            <h2>Report an Issue</h2>

            {/* CATEGORY SELECT */}
            <select className="report-input">
              <option value="">Select Category</option>
              <option value="road_damage">Road Damage</option>
              <option value="street_light">Street Light Issue</option>
              <option value="garbage">Garbage / Cleanliness</option>
              <option value="water">Water Supply Issue</option>
              <option value="animal">Dead Animal</option>
              <option value="other">Other Issue</option>
            </select>

            {/* TITLE */}
            <input type="text" placeholder="Issue Title" className="report-input" />

            {/* DESCRIPTION */}
            <textarea placeholder="Describe the issue..." className="report-textarea"></textarea>

            {/* PHOTO UPLOAD */}
            <label className="upload-label">
              Upload Photo (optional)
              <input type="file" accept="image/*" />
            </label>

            {/* VIDEO UPLOAD */}
            <label className="upload-label">
              Upload Video (optional)
              <input type="file" accept="video/*" />
            </label>

            {/* SUBMIT */}
            <button className="submit-btn">Submit Report</button>

            {/* CLOSE */}
            <button className="close-btn" onClick={() => setShowReport(false)}>Close</button>

          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
