import React from 'react'
import Header from '../Components/Header'

import Skinsection from '../Components/Home/Skin'
import HairSection from '../Components/Home/Hair'
import Footer from '../Components/Footer'
import ServicesSection from '../Components/Services/ServiceSection'

function Services() {
  return (
    <div>
        
      <Header/>
      <ServicesSection/>
      <Skinsection/>
      <HairSection/>
      <Footer/>
    </div>
  )
}

export default Services