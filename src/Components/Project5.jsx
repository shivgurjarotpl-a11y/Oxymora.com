import React, { useEffect, useRef } from "react";
import "../css/Project5.css"; 

const Project5 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project5-animate"); 
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
    <section className="project5-wrapper">
      {/* Left Text Section */}
      <div ref={leftRef} className="project5-left project5-hidden-left">
        <div className="project5-logo-circle">
           <img src="image/gyro-logo.png" alt="App Mockup" />
        </div>
        <h2>Gyro</h2>
        <p>
      Gyro is an all-in-one mobile solution designed for medical organizations to streamline inventory, installation, and service management of medical equipment.  <br />

Whether you're managing stock, installing medical devices, or providing after-sales service, this app connects all departments to improve efficiency and ensure quality care.
        </p>

        <div className="project5-stats">
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

        <div className="project5-buttons">
          <button className="project5-btn-primary">View Case Study</button>
          <button className="project5-btn-secondary">Get In Touch</button>
        </div>
      </div>

      {/* Right Image Section */}
      <div ref={rightRef} className="project5-right project5-hidden-bottom">
        <img
          src="image/gyro.png"
          alt="App Mockup"
          className="project5-phone-img"
        />
      </div>
    </section>
  );
};

export default Project5;
