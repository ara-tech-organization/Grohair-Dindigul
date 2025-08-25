import { Box } from "@mui/material"; // ✅
import { Helmet } from "react-helmet-async";

import Herosection from "../Components/Home/Herosection";
import Header from "../Components/Header";
import Clients from '../Components/Home/Clients'


import Trust from "../Components/Home/Trust";

import Footer from '../Components/Footer'

import HairSection from "../Components/Home/Hair";
import Skinsection from "../Components/Home/Skin";
import Section from "../Components/Home/WeProvider";
import HighlightSection from "../Components/Home/Leading";
function Home() {
  return (
    <Box>
      <Helmet>
        <title>GroHair & GloSkin - Leading Hair and Skin Care Clinic in Dindigul</title>
        <meta name="description" content="GroHair & GloSkin is the premier hair and skin care clinic in Dindigul, offering expert treatments and personalized care for all your beauty needs." />
      </Helmet>
      <Header />
      <Herosection />
      <Section />
      <HighlightSection />
      <HairSection />
      <Skinsection />
      <Trust />
      <Clients />
      <Footer/>
    </Box>
  );
}

export default Home;
