import React, { useState } from 'react';
import '../css/Topbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Topbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
    <header className="topbar">
      <div className="topbar-container">
        {/* Logo */}
        <div className="topbar-logo">
          <img src="/oxymora_logo (1).png" alt="Logo" className="logo" />
        </div>

        {/* Hamburger for mobile */}
        <div className="topbar-toggle" onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* Navigation */}
        <nav className={`topbar-nav ${isNavOpen ? 'active' : ''}`}>
          <Link to="/home">Home</Link>

          <div
            className={`dropdown ${activeDropdown === 'about' ? 'active' : ''}`}
            onClick={() => toggleDropdown('about')}
          >
            <span className="dropbtn">About Us</span>
            <div className="dropdown-content">
              <div className="submenu">
                <span>About</span>
                <Link to="/about/mission">Mission</Link>
                <Link to="/about/vision">Vision</Link>
                <Link to="/about/core-team">Core Team</Link>
              </div>
              <div className="submenu">
                <span>Media</span>
                <Link to="/about/office-gallery">Office Gallery</Link>
              </div>
            </div>
          </div>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/work">Work</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact Us</Link>
         

        </nav>
      </div>
    </header>
    </>
  );
};

export default Topbar;
