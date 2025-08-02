import React, { useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import BgImage from "../Images/1.png"; // Replace with actual image path

const HeroSection = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      id="home"
      data-aos="fade-up"
      sx={{
        position: "relative",
        width: { xs: "91%", sm: "95%", md: "100%",lg:"100%" },
        height: { xs: "90vh", sm: "85vh", lg: "100vh" },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 6,lg:2 },
        textAlign: "center",
        mb: { md: 10 },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:` url("${BgImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(2px)",
          opacity: 0.4,
          zIndex: 1,
        }}
      />

      {/* Text Content */}
      <Box 
        sx={{
          zIndex: 2,
          maxWidth: { xs: "90%", sm: "80%", md: "700px", lg: "800px" },
          ml: -1,
        }}
      >
        {/* Main Heading */}
        <Typography data-aos="fade-down"
          variant="h3"
          sx={{
            fontWeight: 700,
            color: "#E2231A",
            fontSize: {
              xs: "1.6rem",
              sm: "2rem",
              md: "2.5rem",
              lg: "2.5rem",
              xl: "3.5rem",
            },
            mt: { xs: 12, sm: 10, md: 10, lg: 10, xl: 6 },
            maxWidth: "150%",
          }}
        >
          Hair & Skin Wellness in <br /> Dindigul – Tailored to Your Lifestyle
        </Typography>

        {/* Subheading Paragraph */}
        <Typography data-aos="fade-down"
          sx={{
            mt: { xs: 3, sm: 4, md: 5 },
            fontSize: {
              xs: "0.95rem",
              sm: "1.1rem",
              md: "1.50rem",
              lg: "1.5rem",
              xl: "1.4rem",
            },
            color: "#333",
            maxWidth: "100%",
            mx: "auto",
          }}
        >
          GroHair and GloSkin proudly bring expert care in hair restoration and
          skin health to Dindigul. Our certified trichologists and skincare
          professionals deliver customized treatments focused on effective,
          lasting results.
        </Typography>

        {/* Final Statement */}
        <Typography data-aos="fade-down"
          sx={{
            mt: { xs: 2.5, sm: 3, md: 4 },
            fontSize: {
              xs: "0.85rem",
              sm: "1rem",
              md: "1.5rem",
              lg: "1.25rem",
            },
            color: "#666",
            maxWidth: "100%",
            mx: "auto",
          }}
        >
          Trusted by countless clients for life-changing transformations and
          clinical excellence.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;