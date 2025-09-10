import React from "react";
import ProjectCard from "./ProjectCard";
import "../css/ProjectList.css";

const ProjectList = () => {
  const projectData = [
    {
      title: "E-Commerce Website",
      desc: "A modern e-commerce platform with shopping cart and payment integration.",
      image: "/images/project1.jpg",
    },
    {
      title: "Portfolio Website",
      desc: "A responsive portfolio with animations and interactive design.",
      image: "/images/project2.jpg",
    },
    {
      title: "Dashboard UI",
      desc: "Analytics dashboard with real-time data visualization.",
      image: "/images/project3.jpg",
    },
    {
      title: "Mobile App Design",
      desc: "Cross-platform mobile app design for booking services.",
      image: "/images/project4.jpg",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-heading">My Projects</h2>
      <div className="project-grid">
        {projectData.map((p, idx) => (
          <ProjectCard
            key={idx}
            title={p.title}
            desc={p.desc}
            image={p.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
