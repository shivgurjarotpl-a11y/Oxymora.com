import React from 'react'
import VisionImg from '../Components/VisionImg'
import VisionSection from '../Components/VisionSection'
import "../css/Vision.css";
import Footer from '../Components/Footer';
import FloatingButtons from '../Components/FloatingButtons';


const Vision = () => {
  return (
    <div>
      <VisionImg/>
      <div className='viision-Contanior'>
          <VisionSection/>
          <Footer/>
          <FloatingButtons/>
      </div>
    </div>
  )
}

export default Vision;