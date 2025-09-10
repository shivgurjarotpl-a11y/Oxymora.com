import React from 'react'
import VisionImg from '../Components/VisionImg'
import VisionSection from '../Components/VisionSection'
import "../css/Vision.css";
import Footer from '../Components/Footer';


const Vision = () => {
  return (
    <div>
      <VisionImg/>
      <div className='viision-Contanior'>
          <VisionSection/>
          <Footer/>
      </div>
    </div>
  )
}

export default Vision;