import React from 'react';
import '../css/Footer.css';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
    <hr />
    <footer className="footer">
       
      <div className="footer-top">
        <div className="footer-logo-address">
          <img src="/oxymora_logo (1).png" alt="Foxconn Logo" className="footer-logo" />
          <p>
            271,Lower Ground Floor, 2nd, Mahavir Nagar, Maharani Farm, Phase-II, Durgapura, Jaipur, Rajasthan 302018 <br />
            +917060828710
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>About</h4>
            <ul>
              <li>Vision and Mission</li>
              <li>Overview</li>
              <li>Key Milestones</li>
              <li>Global Footprint</li>
              <li>Advocacy and Promotion</li>
            </ul>
          </div>

          <div>
            <h4>Services and Products</h4>
            <ul>
              <li>Event Highlights</li>
              <li>Development Strategy and Blueprint</li>
            </ul>
          </div>

          <div>
            <h4>R&D and Technology</h4>
            <ul>
              <li>Hon Hai Research Institute</li>
              <li>MIH Consortium</li>
            </ul>
          </div>

          <div>
            <h4>Press Center</h4>
            <ul>
              <li>News</li>
              <li>Events</li>
              <li>Corporate Events</li>
              <li>Factory Tour</li>
              <li>Media Center</li>
            </ul>
          </div>

          <div>
            <h4>Investor Relations</h4>
            <ul>
              <li>Leadership Vision</li>
              <li>Calendar</li>
              <li>Investor Meetings and Roadshows</li>
              <li>Financials</li>
              <li>Shareholders Meeting</li>
              <li>FAQ</li>
              <li>Contacts</li>
              <li>Subscription Center</li>
            </ul>
          </div>

          <div>
            <h4>Corporate Sustainability</h4>
            <ul>
              <li>CSR Overview</li>
              <li>Our Focuses</li>
              <li>Implementation of the Sustainable Development</li>
              <li>Stakeholders</li>
              <li>Resources</li>
              <li>Foxconn Education Foundation</li>
            </ul>
          </div>

          <div>
            <h4>Careers</h4>
          </div>

          <div>
            <h4>Contact Us</h4>
          </div>
        </div>

        <div className="footer-social">
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 OTPL. All rights reserved.</p>
        <div className="footer-policy">
          <a href="#">Legal Notice & Trademark Info</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies Policy</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
