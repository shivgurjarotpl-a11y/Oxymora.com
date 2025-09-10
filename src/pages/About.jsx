import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      {/* Subpages (Mission, Vision, Core Team, Office Gallery) will render here */}
      <Outlet />
    </div>
  );
};

export default About;
