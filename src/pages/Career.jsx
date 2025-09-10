import React from 'react'
import CareerImg from '../Components/CareerImg'
import Footer from '../Components/Footer'
import CareerSection from '../Components/CareerSection'
import "../css/Career.css";
import JobOpenings from '../Components/JobOpenings';
import ResumeForm from '../Components/ResumeForm';
import Topbar from '../Components/Topbar';
import FloatingButtons from '../Components/FloatingButtons';

const Career = () => {
  return (
    <>
      <CareerImg/>
      <div className='C-Contanior'>
        <CareerSection/> 
        <JobOpenings/>
        <ResumeForm/>
       <Footer/>
       <FloatingButtons/>
      </div>
    </>
  )
}

export default Career