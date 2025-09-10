// Work.jsx
import React, { useState } from 'react';
import WorkImg from '../Components/WorkImg';
import CategorySelector from '../Components/CategorySelector';
import "../css/Work.css";
import Project1 from '../Components/Project1';
import Project2 from '../Components/Project2';
import Project3 from '../Components/Project3';
import Project4 from '../Components/Project4';
import Project5 from '../Components/Project5';
import Project6 from '../Components/Project6';
import Project7 from '../Components/Project7';
import Project8 from '../Components/Project8';
import Project9 from '../Components/Project9';

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Projects array with category
  const projects = [
    { id: 1, type: "application", component: <Project1 /> },
    { id: 2, type: "application", component: <Project2 /> },
    { id: 3, type: "application", component: <Project3 /> },
    { id: 4, type: "application", component: <Project4 /> },
    { id: 5, type: "application", component: <Project5 /> },
    { id: 6, type: "website", component: <Project6 /> },
    { id: 7, type: "application", component: <Project7 /> },
    { id: 8, type: "application", component: <Project8 /> },
    { id: 9, type: "website", component: <Project9 /> },
  ];

  // Filter projects based on active category
  const displayedProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(proj => proj.type === activeCategory);

  return (
    <div>
      <WorkImg />
      <div className='Work-Contanior'>
        {/* Category selector with props */}
        <CategorySelector 
          active={activeCategory} 
          setActive={setActiveCategory} 
        />

        {/* Render filtered projects */}
        {displayedProjects.map(proj => (
          <div key={proj.id}>{proj.component}</div>
        ))}
      </div>
    </div>
  );
};

export default Work;
