import React, { useEffect, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../css/TechShowcase.css";

const data = [
  { title: "Firmware Development", image: "/image/img10.jpg", date: "2025/07/25" },
  { title: "Firmware Development", image: "/image/img14.jpg", date: "2025/07/25" },
  { title: "Firmware Development", image: "/image/img11.jpg", date: "2025/07/25" },
  { title: "Firmware Development", image: "/image/img13.jpg", date: "2025/07/25" },
  { title: "Firmware Development", image: "/image/img11.jpg", date: "2025/07/25" },
  { title: "Hardware Development", image: "/image/img14.jpg", date: "2025/07/26" },
  { title: "Prototyping Development", image: "/image/img10.jpg", date: "2025/07/27" },
  { title: "Testing & QA", image: "/image/img14.jpg", date: "2025/07/28" },
  { title: "Manufacturing", image: "/image/img12.jpg", date: "2025/07/29" },
];

const TechShowcase = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Trigger first visible card animation on mount
    setTimeout(() => {
      const firstCard = scrollRef.current?.querySelector(".showcase-card");
      if (firstCard) {
        firstCard.querySelector(".showcase-text")?.classList.add("animate-text");
        firstCard.querySelector(".showcase-overlay")?.classList.add("animate-text");

        setTimeout(() => {
          firstCard.querySelector(".showcase-text")?.classList.remove("animate-text");
          firstCard.querySelector(".showcase-overlay")?.classList.remove("animate-text");
        }, 600);
      }
    }, 300);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const scroll = (direction) => {
    const scrollAmount = 400;
    if (scrollRef.current) {
      const visibleCards = scrollRef.current.querySelectorAll(".showcase-card");

      visibleCards.forEach((card) => {
        const textDown = card.querySelector(".showcase-text");
        const overlayText = card.querySelector(".showcase-overlay");

        if (textDown) textDown.classList.add("animate-text");
        if (overlayText) overlayText.classList.add("animate-text");

        setTimeout(() => {
          if (textDown) textDown.classList.remove("animate-text");
          if (overlayText) overlayText.classList.remove("animate-text");
        }, 600);
      });

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="showcase">
      <div className="showcase-left animate-on-scroll">
        <h2>
          Manufacturing <br /> Services
        </h2>
        <p>
          Discover the seamless synergy of ideas and precision with our
          Electronic Product Manufacturing Services.
        </p>
        <button className="showcase-btn">
          MORE <span className="showcase-btn-icon"><FaArrowRight /></span>
        </button>
      </div>

      <div className="showcase-scroll-container">
        <button className="showcase-scroll-btn left" onClick={() => scroll("left")}>
          <FaArrowLeft />
        </button>
        <div className="showcase-card-row" ref={scrollRef}>
          {data.map((item, index) => (
            <div className="showcase-card animate-on-scroll" key={index}>
              <div className="showcase-photo-container">
                <img src={item.image} alt={item.title} />
                <div className="showcase-overlay">
                  <h2>{item.title}</h2>
                </div>
              </div>
              <div className="showcase-text">
                <h2>{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
        <button className="showcase-scroll-btn right" onClick={() => scroll("right")}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TechShowcase;
