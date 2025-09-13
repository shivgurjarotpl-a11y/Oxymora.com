import React from 'react'
import FounderList from '../Components/FounderList'
import FounderImg from '../Components/FounderImg'
import Footer from '../Components/Footer'
import FloatingButtons from '../Components/FloatingButtons'
import "../css/CoreTeam.css";

const CoreTeam = () => {
  return (
    <div>
     
     <FounderImg/>
     <div className='Core-contanior'>
      <FounderList/>
      <Footer/>
      <FloatingButtons/>
      </div>
    </div>
  )
}

export default CoreTeam