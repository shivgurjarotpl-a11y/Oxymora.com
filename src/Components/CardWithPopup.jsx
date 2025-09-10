import React, { useState } from "react";
import "../css/CardWithPopup.css";

const CardWithPopup = ({ image, title, shortText, longText, isReverse }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="custom-card-page">
    <div className="custom-card-container">
      <div className={`custom-card ${isReverse ? "custom-card-reverse" : ""}`}>
        {/* Left Section: Image */}
        <div className="custom-card-left">
          <img src={image} alt={title} />
        </div>

        {/* Right Section: Content */}
        <div className="custom-card-right">
          <h2 className="custom-card-title">{title}</h2>
          <p className="custom-card-short-text">{shortText}</p>
          <button
            className="custom-card-button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>

      {/* Popup Content */}
      {showMore && (
        <div className="custom-card-popup">
          <p>{longText}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default CardWithPopup;
