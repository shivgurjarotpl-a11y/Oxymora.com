import React from "react";
import CategoryCard from "./CategoryCard";
import "../css/CategoryCards.css";

const CategoryCards = ({ setSelectedCategory }) => {
  const sections = [
    {
      title: "Office Space",
      cards: [
        { name: "Meeting Rooms", image: "/image/img1.jpg" },
        { name: "Workspaces", image: "/image/img2.jpg" },
        { name: "Recreation Area", image: "/image/img3.jpg" },
        { name: "Events & Functions", image: "/image/img5.jpg" },
      ],
    },
    {
      title: "Team at Work",
      cards: [
        { name: "Developers", image: "/image/img1.jpg" },
        { name: "Designers", image: "/image/img1.jpg" },
        { name: "Marketing", image: "/image/img1.jpg" },
        { name: "HR Team", image: "/image/img1.jpg" },
      ],
    },
    {
      title: "Events & Celebrations",
      cards: [
        { name: "Annual Party", image: "/image/img1.jpg" },
        { name: "Festivals", image: "/image/img1.jpg" },
        { name: "Team Outings", image: "/image/img1.jpg" },
        { name: "Award Ceremonies", image: "/image/img1.jpg" },
      ],
    },
    {
      title: "Company Culture",
      cards: [
        { name: "Work Environment", image: "/image/img1.jpg" },
        { name: "Team Bonding", image: "/image/img1.jpg" },
        { name: "Innovation", image: "/image/img1.jpg" },
        { name: "Learning", image: "/image/img1.jpg" },
      ],
    },
    {
      title: "Behind the Scenes",
      cards: [
        { name: "Setup & Prep", image: "/image/img1.jpg" },
        { name: "Office Life", image: "/image/img1.jpg" },
        { name: "Events Prep", image: "/image/img1.jpg" },
        { name: "Daily Work", image: "/image/img1.jpg" },
      ],
    },
  ];

  return (
    <div className="category-section-container">
      {sections.map((section, idx) => (
        <div key={idx} className="category-section">
          <h2 className="category-section-heading">{section.title}</h2>
          <div className="category-cards-grid">
            {section.cards.map((card, i) => (
              <CategoryCard key={i} {...card} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
