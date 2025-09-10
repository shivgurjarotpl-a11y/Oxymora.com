import React, { useEffect, useRef, useState } from "react";
import "../css/JobOpenings.css";
import ResumeForm from "./ResumeForm";

// Import icons from react-icons
import { FaPaintBrush, FaUserAlt, FaPhp, FaMagento, FaApple, FaAndroid, FaAngular, FaClipboardCheck } from "react-icons/fa";

const JobOpenings = () => {
  const jobs = [
    { title: "UI DESIGNER", exp: "2-4 yrs", vacancies: 1, icon: <FaPaintBrush />, color: "#ff5722" },
    { title: "UX DEVELOPER", exp: "2-4 yrs", vacancies: 1, icon: <FaUserAlt />, color: "#4caf50" },
    { title: "PHP DEVELOPER", exp: "2-4 yrs", vacancies: 1, icon: <FaPhp />, color: "#9c27b0" },
    { title: "MAGENTO DEVELOPER", exp: "2-4 yrs", vacancies: 1, icon: <FaMagento />, color: "#ff9800" },
    { title: "IOS DEVELOPER", exp: "2-4 yrs", vacancies: 1, icon: <FaApple />, color: "#000000" },
    { title: "ANDROID DEVELOPER", exp: "2-4 yrs", vacancies: 1, icon: <FaAndroid />, color: "#3ddc84" },
    { title: "ANGULAR JS", exp: "2-4 yrs", vacancies: 1, icon: <FaAngular />, color: "#dd0031" },
    { title: "QUALITY ANALYST", exp: "2-4 yrs", vacancies: 1, icon: <FaClipboardCheck />, color: "#03a9f4" },
  ];

  const cardRefs = useRef([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="job-section">
      <div className="job-header">
        <h2>Positions Open! Apply Today For A Rewarding Career</h2>
        <p>
          Be a part of a leading IT company. Apply for positions matching your
          skills and we will arrange a meeting.
        </p>
      </div>

      <div className="job-grid">
        {jobs.map((job, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="job-card"
          >
            <div className="job-icon" style={{ color: job.color }}>
              {job.icon}
            </div>
            <h3>{job.title}</h3>
            <p>Exp. {job.exp}</p>
            <p>No. of Vacancies: {job.vacancies}</p>
            <button className="apply-btn" onClick={() => setShowForm(true)}>
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Render ResumeForm when showForm is true */}
      {showForm && (
        <div className="resume-overlay">
          <div className="resume-container">
            <button className="close-btn" onClick={() => setShowForm(false)}>Close</button>
            <ResumeForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default JobOpenings;
