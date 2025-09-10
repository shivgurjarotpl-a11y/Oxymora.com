import React, { useEffect, useRef } from 'react';
import '../css/Card.css';

const Card = () => {
  const newsData = [
    {
      image: "/image/software design.jpg",
      title: "Hardware Design",
    },
    {
      image: "/image/Embedded Software.jpg",
      title: "Embedded Software",
    },
    {
      image: "/image/Iot.jpg",
      title: "Apps/Web/Iot",
    },
    {
      image: "/image/Iot.jpg",
      title: "Apps/Web/Iot",
    },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            entry.target.style.transitionDelay = `${index * 0.2}s`; // Stagger delay
            entry.target.classList.add("news-card-visible");
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="news-card-wrapper">
      {newsData.map((news, index) => (
        <div
          className="news-card-item"
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          data-index={index}
        >
          <div className="news-card-image-container">
            <img src={news.image} alt={`News ${index + 1}`} />
            <div className="news-card-text-overlay">
              <h2 className="news-card-title">{news.title}</h2>
              <p className="news-card-date">{news.date}</p>
            </div>
          </div>
          <div className="news-card-text-below">
            <h2 className="news-card-title">{news.title}</h2>
            <p className="news-card-date">{news.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
