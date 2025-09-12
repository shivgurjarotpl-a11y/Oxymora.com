import React from 'react'
import MissionPage from '../Components/MissionPage'
import MissionImg from '../Components/MissionImg'
import "../css/Mission.css";
import Footer from '../Components/Footer';
import FloatingButtons from '../Components/FloatingButtons';

const Mission = () => {
  return (
    <div>
       <MissionImg/>
       <div className='messeon'>
      <MissionPage/>
      <Footer/>
      <FloatingButtons/>
      </div>
    </div>
  )
}

export default Mission