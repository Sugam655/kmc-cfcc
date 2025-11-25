import React from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faCheckCircle, 
  faTrophy, 
  faGift 
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Points",
      value: "1,250",
      icon: faStar,
      color: "primary",
      progress: 65,
    },
    {
      title: "Activities Completed",
      value: "24",
      icon: faCheckCircle,
      color: "blue",
      progress: 40,
    },
    {
      title: "Current Rank",
      value: "#42",
      icon: faTrophy,
      color: "purple",
      progress: 25,
    },
    {
      title: "Rewards Earned",
      value: "8",
      icon: faGift,
      color: "yellow",
      progress: 80,
    },
  ];

  const getColorClass = (color) => {
    return `stat-icon ${color}`;
  };

  const getProgressStyle = (color, progress) => {
    const gradients = {
      primary: "linear-gradient(90deg, #2563eb, #3b82f6)",
      blue: "linear-gradient(90deg, #3b82f6, #6366f1)",
      purple: "linear-gradient(90deg, #8b5cf6, #ec4899)",
      yellow: "linear-gradient(90deg, #facc15, #fb923c)",
    };
    return { width: `${progress}%`, background: gradients[color] || gradients.primary };
  };

  return (
    <section className="dashboard-stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-content">
            <div className="stat-text">
              <p className="stat-title">{stat.title}</p>
              <p className="stat-value">{stat.value}</p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={getProgressStyle(stat.color, stat.progress)}
                ></div>
              </div>
            </div>
            <div className={getColorClass(stat.color)}>
              <FontAwesomeIcon icon={stat.icon} size="2x" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Dashboard;
