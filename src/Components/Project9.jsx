import React, { useEffect, useRef } from "react";
import "../css/Project9.css"; 

const Project9 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project9-animate"); 
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="project9-wrapper">
      {/* Left Text Section */}
      <div ref={leftRef} className="project9-left project9-hidden-left">
        <div className="project9-logo-circle">
          <img src="image/gyro-logo.png" alt="App Mockup" />
        </div>
        <h2>Gyro</h2>
        <p>
   Gyro – Advanced  Web Solutions for Healthcare Organizations
   <br />
Gyro is an all-in-one Web platform built to streamline inventory management, medical device installation, and service operations for healthcare organizations.
From real-time stock tracking to seamless device deployment and efficient after-sales support, Gyro integrates all departments, enhancing operational efficiency and delivering exceptional patient care.
        </p>

        <div className="project9-stats">
          <div>
            <h3>14k</h3>
            <p>Downloads</p>
          </div>
          <div>
            <h3>4.9/5</h3>
            <p>Avg. Rating</p>
          </div>
          <div>
            <h3>$400k+</h3>
            <p>Funding Raised</p>
          </div>
        </div>

        <div className="project9-buttons">
          <button className="project9-btn-primary">View Case Study</button>
          <button className="project9-btn-secondary">Get In Touch</button>
        </div>
      </div>

      {/* Right Image Section */}
      <div ref={rightRef} className="project9-right project9-hidden-bottom">
        <img
          src="image/gyro deshboard-front.png"
          alt="App Mockup"
          className="project9-phone-img"
        />
      </div>
    </section>
  );
};

export default Project9;
