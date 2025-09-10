import React from "react";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import "../css/FloatingButtons.css";

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/917060828710"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn whatsapp"
      >
        <FaWhatsapp />
        <span className="btn-text">WhatsApp</span>
      </a>

      <a
        href="mailto:contact.oytech@gmail.com"
        className="contact-btn email"
      >
        <FaEnvelope />
        <span className="btn-text">Email</span>
      </a>

      <a
        href="tel:+917060828710"
        className="contact-btn call"
      >
        <FaPhone />
        <span className="btn-text">Call</span>
      </a>
    </div>
  );
};

export default FloatingButtons;
