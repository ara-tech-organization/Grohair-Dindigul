import React from 'react'
import { Helmet } from 'react-helmet-async'
import BookAppointment from '../Components/Booknow/Booknow'
import Footer from '../Components/Footer'

function Booknow() {
  return (
    <div>
      <Helmet>
        <title>Book Appointment - GroHair & GloSkin</title>
        <meta name="description" content="Book your appointment with GroHair & GloSkin, the leading hair and skin care clinic in Dindigul." />
      </Helmet>
      <BookAppointment/>
      <Footer/>
    </div>
  )
}

export default Booknow
