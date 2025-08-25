import React from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from '../Components/Footer'
import Touch from '../Components/Contact/Touch'

export default function Contact() {
  return (
    <div>
        <Helmet>
          <title>Contact Us - GroHair & GloSkin</title>
          <meta name="description" content="Get in touch with GroHair & GloSkin, the leading hair and skin care clinic in Dindigul." />
        </Helmet>
        <Touch/>
      <Footer/>
    </div>
  )
}
