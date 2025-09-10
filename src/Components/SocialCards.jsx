import React from "react";
import "../css/SocialCards.css";
import { FaInstagram, FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const cards = [
  {
    name: "Instagram",
    desc: "Follow us on Instagram",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://instagram.com/",
    icon: <FaInstagram size={40} color="#fff" />,
    bg: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    link: "https://www.instagram.com/oxymoratechnology/"
  },
  {
    name: "Facebook",
    desc: "Follow us on Facebook",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://facebook.com/",
    icon: <FaFacebook size={40} color="#fff" />,
    bg: "#1877F2",
    link: "https://www.facebook.com/OxYmoraTechnology/"
  },
  {
    name: "X",
    desc: "Follow us on X",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://x.com/",
    icon: <FaXTwitter size={40} color="#fff" />,
    bg: "#000000",
    link: "https://x.com/OxymoraT/status/1440262924614836230"
  },
  {
    name: "LinkedIn",
    desc: "Follow us on LinkedIn",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://linkedin.com/",
    icon: <FaLinkedin size={40} color="#fff" />,
    bg: "#0077B5",
    link: "https://in.linkedin.com/company/oxymora-technology"
  }
];

const SocialCards = () => {
  return (
    <div className="social-section">
      <h2>Follow us on social media to get the latest news!</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            style={{ background: card.bg }}
            key={index}
          >
            <div className="card-header">
              {card.icon}
              <h3>{card.desc}</h3>
            </div>
            <img src={card.qr} alt={`${card.name} QR`} className="qr-code" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialCards;
