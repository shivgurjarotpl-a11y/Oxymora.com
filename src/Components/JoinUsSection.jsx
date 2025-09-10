import React, { useEffect, useRef, useState } from 'react';
import '../css/JoinUsSection.css';
import { FaArrowRight } from "react-icons/fa";

const JoinUsSection = () => {
  const contentRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section className="join-us-section">
      <video className="background-video" autoPlay muted loop playsInline>
        <source src="/videos/video5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        ref={contentRef}
        className={`join-us-content ${inView ? 'animate' : ''}`}
      >
        <h1>Join Us</h1>
        <div className="underline"></div>
        <p>
          We welcome talented individuals with passion and vision to join us.
          Let’s create value and realize dreams together.
        </p>
        <button className="join-btn">
          More <span className="arrow-icon"><FaArrowRight /></span>
        </button>
      </div>

      <hr />
    </section>
  );
};

export default JoinUsSection;
