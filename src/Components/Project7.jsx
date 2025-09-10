import React, { useEffect, useRef } from "react";
import "../css/Project7.css"; 

const Project7 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project7-animate"); 
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
    <section className="project7-wrapper">
      {/* Left Text Section */}
      <div ref={leftRef} className="project7-left project7-hidden-left">
        <div className="project7-logo-circle">
           <img src="image/Aeroby-logo.png" alt="App Mockup" />
        </div>
        <h2>Aerobay</h2>
        <p>
          The Aerobay Flutter app is an advanced IoT-based application designed
          to interact with various smart machines using BLE (Bluetooth Low
          Energy) and MQTT protocols. The app supports user-specific
          functionalities, categorized into two roles—Teacher and Student. It
          provides a seamless experience from signing up to controlling devices
          via sliders, joysticks, and monitoring weather-related data.
        </p>

        <div className="project7-stats">
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

        <div className="project7-buttons">
          <button className="project7-btn-primary">View Case Study</button>
          <button className="project7-btn-secondary">Get In Touch</button>
        </div>
      </div>

      {/* Right Image Section */}
      <div ref={rightRef} className="project7-right project7-hidden-bottom">
        <img
          src="image/Aeroby.png"
          alt="App Mockup"
          className="project7-phone-img"
        />
      </div>
    </section>
  );
};

export default Project7;
