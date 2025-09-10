import React from 'react'
import ServicesSection from '../Components/ServicesSection'
import ServiceImg from '../Components/ServiceImg'
import Footer from '../Components/Footer'
import "../css/Services.css";

const Services = () => {
  return (
    <>
      <ServiceImg/>
      <div className='s-contanior'>
      <ServicesSection/>
      <Footer/>
      </div>
    </>
  )
}

export default Services