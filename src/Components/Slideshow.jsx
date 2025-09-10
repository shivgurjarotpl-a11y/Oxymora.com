import React, { useState, useEffect } from "react";
// import Topbar from '../Components/Topbar';
import "../css/Slideshow.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Slideshow = ({ autoPlay = true, autoPlayInterval = 6000 }) => {
  const slides = [
    {
      type: "video",
      src: "/videos/video6.mp4",
      text: "Technology for Smart Living",
    },
    {
      type: "video",
      src: "/videos/video7.mp4",
      text: "Empowering Future Together",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slideshow">
      {/* <Topbar /> */}

      <div className="slide">
        {slides[currentSlide].type === "image" ? (
          <img src={slides[currentSlide].src} alt="" />
        ) : (
          <video
            src={slides[currentSlide].src}
            autoPlay
            muted
            loop
            playsInline
            className="background-video"
          />
        )}
        {/* Prev/Next Navigation Buttons */}
        <button className="nav-btn left" onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <button className="nav-btn right" onClick={nextSlide}>
          <FaArrowRight />
        </button>

        {slides[currentSlide].text && (
          <div className={`overlay-text slide-${currentSlide}`}>
            {/* Text Animation */}
            <div
              className="animated-text"
              key={`text-${slides[currentSlide].text}`}
            >
              {slides[currentSlide].text.split("").map((char, i) => (
                <span
                  key={i}
                  style={{ animationDelay: `${i * 0.05}s` }}
                  className="fade-char"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>

            {/* Button Animation */}
            <button className="more-btn" key={`btn-${currentSlide}`}>
              MORE{" "}
              <span className="arrow-icon">
                <FaArrowRight />
              </span>
            </button>
          </div>
        )}
      </div>

      <div className="slide-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
