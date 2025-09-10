import React from 'react';
import Slideshow from '../Components/Slideshow';
import NewsSection from '../Components/NewsSection';
import TechShowcase from '../Components/TechShowcase';
import HorizontalScrollCards from '../Components/HorizontalScrollCards';
import JoinUsSection from '../Components/JoinUsSection';
import Footer from '../Components/Footer';
import "../css/Home.css";

import FloatingButtons from '../Components/FloatingButtons';


const Home = () => {
  return (
    <div> 
     
      <Slideshow />
      <div className="main-content">
        <NewsSection />
        <TechShowcase />
        <HorizontalScrollCards />
        <JoinUsSection />
        <Footer />
        <FloatingButtons/>
      </div>
    </div>
  );
};


export default Home;
