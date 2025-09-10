import React, { useState } from "react";
import "../css/ProjectList.css";

const ProjectCard = ({ title, desc, image }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="project-card">
        <div className="project-card-image">
          <img src={image} alt={title} />
        </div>

        <div className="project-card-content">
          <div>
            <h3 className="project-card-title">{title}</h3>
            <p className="project-card-desc">{desc}</p>
          </div>
          <button
            className="project-learn-btn"
            onClick={() => setOpen(true)}
          >
            Learn More
          </button>
        </div>

        <div className="project-go-corner">
          <div className="project-go-arrow">→</div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="project-modal-overlay">
          <div className="project-modal">
            <button
              className="project-modal-close"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <img
              className="project-modal-image"
              src={image}
              alt={title}
            />
            <h2 className="project-modal-title">{title}</h2>
            <p className="project-modal-desc">{desc}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
