import React, { useState } from "react";
import "../css/Topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Topbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="topbar">
      <div className="topbar-container">
        {/* Logo */}
        <div className="topbar-logo">
          <img src="/oxymora_logo (1).png" alt="Logo" className="logo" />
        </div>

        {/* Hamburger */}
        <div className="topbar-toggle" onClick={toggleNav}>
          {isNavOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>

        {/* Navigation Drawer */}
        <nav className={`topbar-nav ${isNavOpen ? "active" : ""}`}>
          <Link to="/home" onClick={toggleNav}>
            Home
          </Link>

          {/* Dropdown - About Us */}
          <div
            className={`dropdown ${activeDropdown === "about" ? "active" : ""}`}
          >
            <span
              className="dropbtn"
              onClick={() => toggleDropdown("about")}
            >
              About Us
            </span>
            <div className="dropdown-content">
              <div className="submenu">
                <span>About</span>
                <Link to="/about/mission" onClick={toggleNav}>
                  Mission
                </Link>
                <Link to="/about/vision" onClick={toggleNav}>
                  Vision
                </Link>
                <Link to="/about/core-team" onClick={toggleNav}>
                  Core Team
                </Link>
              </div>
              <div className="submenu">
                <span>Media</span>
                <Link to="/about/office-gallery" onClick={toggleNav}>
                  Office Gallery
                </Link>
              </div>
            </div>
          </div>

          <Link to="/services" onClick={toggleNav}>
            Services
          </Link>
          <Link to="/products" onClick={toggleNav}>
            Products
          </Link>
          <Link to="/projects" onClick={toggleNav}>
            Projects
          </Link>
          <Link to="/work" onClick={toggleNav}>
            Work
          </Link>
          <Link to="/career" onClick={toggleNav}>
            Career
          </Link>
          <Link to="/contact" onClick={toggleNav}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
