import React, { useEffect, useRef } from "react";
import "../css/Project2.css";

const Project2 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project2-animate"); // ✅ corrected
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
    <section className="project2-wrapper">
      {/* Right Image Section */}
      <div ref={rightRef} className="project2-right project2-hidden-bottom">
        <img
          src="image/neo.png"
          alt="App Mockup"
          className="project2-phone-img"
        />
      </div>

      {/* Left Text Section */}
      <div ref={leftRef} className="project2-left project2-hidden-left">
        <div className="project2-logo-circle">
          <img src="image/neo-logo.png" alt="App Mockup" />
        </div>
        <h2>Neon Attack</h2>
        <p>
          Neon Attack – Ultimate Neon Lighting Control Neon Attack is a powerful
          remote control app for your Neon Lighting System, allowing you to
          customize and control your lights effortlessly. Whether you want to
          create a relaxing ambiance, sync lights with music, or adjust
          brightness and speed, Neon Attack gives you full control at your
          fingertips.
        </p>

        <div className="project2-stats">
          <div>
            <h3>5k</h3>
            <p>Downloads</p>
          </div>
          <div>
            <h3>4.1/5</h3>
            <p>Avg. Rating</p>
          </div>
          <div>
            <h3>$400k+</h3>
            <p>Funding Raised</p>
          </div>
        </div>

        <div className="project2-buttons">
          <button className="project2-btn-primary">View Case Study</button>
          <button className="project2-btn-secondary">Get In Touch</button>
        </div>
      </div>
    </section>
  );
};

export default Project2;
