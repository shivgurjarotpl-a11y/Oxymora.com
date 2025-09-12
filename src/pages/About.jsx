import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
   
    
      <Outlet />
    </div>
  );
};

export default About;
