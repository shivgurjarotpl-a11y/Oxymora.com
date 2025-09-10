import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/CategoryCard.css";

const CategoryCard = ({ name, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/gallery/${encodeURIComponent(name)}`);
  };

  return (
    <div className="category-card-container" onClick={handleClick}>
      <img src={image} alt={name} className="category-card-image" />
      <div className="category-card-overlay">
        <span className="category-card-title">{name}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
