import React from 'react'
import Topbar from '../Components/Topbar'
import ContectImg from '../Components/ContectImg'
import ContectCard from '../Components/ContectCard'
import Footer from '../Components/Footer'
import SocialCards from '../Components/SocialCards'
import FloatingButtons from '../Components/FloatingButtons'
import "../css/ContactUs.css";

const ContactUs = () => {
  return (
    <>
    {/* <Topbar/> */}
    <ContectImg/>
    <div className='ContectUs-contanior'>
    <SocialCards/>
    <ContectCard/>
    <Footer/>
    <FloatingButtons/>
    </div>
    </>
  )
}

export default ContactUs



