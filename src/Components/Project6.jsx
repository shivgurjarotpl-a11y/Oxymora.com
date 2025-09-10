import React, { useEffect, useRef } from "react";
import "../css/Project6.css";

const Project6 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project6-animate"); // ✅ updated
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
    <section className="project6-wrapper">
      {/* Right Image Section */}
      <div ref={rightRef} className="project6-right project6-hidden-bottom">
        <img
          src="image/Envioronmental Dashboard-front.png"
          alt="App Mockup"
          className="project6-phone-img"
        />
      </div>

      {/* Left Text Section */}
      <div ref={leftRef} className="project6-left project6-hidden-left">
        <div className="project6-logo-circle">
          <img src="image/Temperature-humidity-datalogger-logo.png" alt="App Mockup" />
        </div>
        <h2>Temperature-humidity-datalogger </h2>
        <p>
   Environmental Dashboard – A cutting-edge React application engineered for real-time environmental monitoring, capturing critical parameters such as temperature, humidity, and airborne particulate matter. The platform incorporates a secure authentication system, an interactive dashboard, a streamlined home interface, and a dedicated device management module for adding and configuring sensors. Leveraging live data streams, the application stores, processes, and dynamically visualizes information to deliver actionable insights. Built with scalability and performance in mind, it ensures seamless user experience while providing robust data analytics capabilities for environmental assessment and decision-making.
        </p>

        <div className="project6-stats">
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

        <div className="project6-buttons">
          <button className="project6-btn-primary">View Case Study</button>
          <button className="project6-btn-secondary">Get In Touch</button>
        </div>
      </div>
    </section>
  );
};

export default Project6;
