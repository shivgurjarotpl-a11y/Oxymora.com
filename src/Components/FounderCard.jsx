// FounderCard.jsx
import React, { useEffect, useRef, useState } from "react";
import "../css/FounderCard.css";

const FounderCard = ({ name, position, company, image, description }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current); // ek hi baar animate hoga
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`founder-card ${isVisible ? "show" : ""}`}
    >
      <h2 className="founder-heading">Founder</h2>
      <div className="founder-content">
        <div className="founder-image">
          <img src={image} alt={name} />
        </div>
        <div className="founder-info">
          <h3 className="founder-name">{name}</h3>
          <p className="founder-position">
            {position} <br />
            {company}
          </p>
          {description.map((para, index) => (
            <p key={index} className="founder-desc">{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
