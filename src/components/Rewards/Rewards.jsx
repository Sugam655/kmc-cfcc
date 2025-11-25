import React, { useState } from 'react';
import './Rewards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTicketAlt, 
  faMugHot, 
  faShoppingBag, 
  faParking, 
  faCoins 
} from '@fortawesome/free-solid-svg-icons';

const Rewards = () => {
  const [userPoints, setUserPoints] = useState(1000); // Example user points
  const [selectedReward, setSelectedReward] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const rewards = [
    { title: 'Movie Tickets', description: '2 tickets to any local cinema', points: 500, icon: faTicketAlt, gradient: 'grad-yellow-orange' },
    { title: 'Coffee Voucher', description: 'Free coffee at participating cafes', points: 200, icon: faMugHot, gradient: 'grad-green-teal' },
    { title: 'Shopping Discount', description: '20% off at local stores', points: 300, icon: faShoppingBag, gradient: 'grad-blue-indigo' },
    { title: 'Free Parking', description: '2 hours free city parking', points: 150, icon: faParking, gradient: 'grad-purple-pink' }
  ];

  const handleRedeem = (reward) => {
    if (userPoints >= reward.points) {
      setSelectedReward(reward);
      setShowModal(true);
    } else {
      alert('Not enough points to redeem this reward!');
    }
  };

  const confirmRedeem = () => {
    if (selectedReward) {
      setUserPoints(prev => prev - selectedReward.points);
      alert(`Successfully redeemed ${selectedReward.title}!`);
      setShowModal(false);
      setSelectedReward(null);
    }
  };

  const cancelRedeem = () => {
    setShowModal(false);
    setSelectedReward(null);
  };

  return (
    <section className="rewards-section" id="rewards">
      <div className="rewards-header">
        <h2>Available Rewards</h2>
        <span>User Points: {userPoints}</span>
      </div>

      <div className="rewards-grid">
        {rewards.map((reward, index) => (
          <div key={index} className="reward-card">
            <div className={`reward-icon-wrapper ${reward.gradient}`}>
              <FontAwesomeIcon icon={reward.icon} size="2x" />
            </div>
            <div className="reward-content">
              <h3>{reward.title}</h3>
              <p>{reward.description}</p>
              <div className="reward-footer">
                <div className="reward-points">
                  <FontAwesomeIcon icon={faCoins} />
                  <span>{reward.points} pts</span>
                </div>
                <button
                  className="redeem-btn"
                  disabled={userPoints < reward.points}
                  onClick={() => handleRedeem(reward)}
                >
                  Redeem
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedReward && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Redeem</h3>
            <p>Are you sure you want to redeem <strong>{selectedReward.title}</strong> for <strong>{selectedReward.points} points</strong>?</p>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={confirmRedeem}>Yes, Redeem</button>
              <button className="cancel-btn" onClick={cancelRedeem}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Rewards;
