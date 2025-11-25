import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function Header({ onOpenAuthModal }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Smooth scroll function
  const scrollToSection = (id, e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Smart SudurPaschim</h1>

        <nav className="nav">
          <a href="#hero" onClick={(e) => scrollToSection("hero", e)}>Home</a>
          <a href="#activities" onClick={(e) => scrollToSection("activities", e)}>Activities</a>
          <a href="#rewards" onClick={(e) => scrollToSection("rewards", e)}>Rewards</a>
          <a href="#sponsors" onClick={(e) => scrollToSection("sponsors", e)}>Sponsors</a>
        </nav>

        <div className="auth-buttons">
          <a href="#" onClick={() => onOpenAuthModal("signin")} className="btn-outline">
            <FontAwesomeIcon icon={faUser} /> Sign In
          </a>
          <a href="#" onClick={() => onOpenAuthModal("register")} className="btn-primary">
            <FontAwesomeIcon icon={faUser} /> Sign Up
          </a>
        </div>

        <div className="more-menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faEllipsisV} size="lg" />
          {menuOpen && (
            <div className="dropdown-menu">
              <a href="#">Profile</a>
              <a href="#">Settings</a>
              <a href="#">Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
