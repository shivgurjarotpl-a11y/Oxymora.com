import React, { useEffect, useRef } from "react";
import "../css/Project8.css";

const Project8 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const elements = [leftRef.current, rightRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project8-animate");
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
    <section className="project8-wrapper">
      {/* Right Image Section */}
      <div ref={rightRef} className="project8-right project8-hidden-bottom">
        <img
          src="image/metallicz.png"
          alt="App Mockup"
          className="project8-phone-img"
        />
      </div>

      {/* Left Text Section */}
      <div ref={leftRef} className="project8-left project8-hidden-left">
        <div className="project8-logo-circle">
          <img src="image/metallicz-logo.png" alt="App Mockup" />
        </div>
        <h2>Metallicz Media</h2>
        <p>
          Metallicz Media – Vendor App by Oxymora Technology <br />
          <br />
          The Metallicz Media app is designed exclusively for Metallicz Media
          vendors to streamline the site recee and installation process. This
          powerful tool allows vendors to easily view assigned sites, visit
          them, and send photo/video reports directly to the admin panel — all
          from their mobile device.
        </p>

        <div className="project8-stats">
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

        <div className="project8-buttons">
          <button className="project8-btn-primary">View Case Study</button>
          <button className="project8-btn-secondary">Get In Touch</button>
        </div>
      </div>
    </section>
  );
};

export default Project8;
