// NavBar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import corresponding styles

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar mt-0">
      <div className="navbar-logo"><Link to="/" className="navbar-link" onClick={toggleMenu}>
      Your Logo
        </Link></div>

      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="navbar-link" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/DoctorsConsultation" className="navbar-link" onClick={toggleMenu}>
          Doctors Consultation
        </Link>
        <Link to="/BMICalculatorPage" className="navbar-link" onClick={toggleMenu}>
          BMI Calculator
        </Link>
        <Link to="/contact" className="navbar-link" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
