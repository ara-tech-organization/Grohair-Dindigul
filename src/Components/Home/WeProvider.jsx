import React, { useEffect } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutImg from '../Images/2.jpeg'; // make sure it's a girl image

const Section = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      id="about"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        Height: '100vh',
        px: { xs: 2, md: 8 ,sm:1},
        py: 6,
        gap: 6,
        backgroundColor: '#fff',
        position: 'relative',
        mb: { md: 10 },
        ml: { sm: 3, lg: 1 ,md:7},
      }}
    >
      {/* Left Side - Text */}
      <Box
        data-aos="fade-up"
        sx={{
          flex: 1,
          textAlign: { xs: 'center', md: 'left' },
          ml: { sm: -5, lg: 2 },
        }}
      >
        <Typography
          sx={{
            color: '#000000ff',
            fontWeight: 'bold',
            mb: 1,
            fontSize: { xs: '1rem', sm: '1.5rem', md: '1.2rem' },
          }}
        >
          We Provide
        </Typography>

        <Typography
          sx={{
            fontWeight: 700,
            color: '#E2231A',
            fontSize: {
              xs: '1.3rem',
              sm: '1.8rem',
              md: '2.5rem',
              lg: '2.8rem',
            },
            mb: 3,
            lineHeight: 1.4,
          }}
        >
          Welcome to GroHair & GloSkin <br /> Dindigul
        </Typography>

        <Typography
          sx={{
            color: '#555',
            fontSize: { xs: '0.90rem', sm: '1.3rem', md: '1.05rem' },
            mb: 2,
            maxWidth: '500px',
            mx: { xs: 'auto', md: 0 },
          }}
        >
          GroHair and GloSkin combine their deep expertise in hair and skin wellness
          with the serene pace of Dindigul. Our clinic blends clinical precision
          with a luxurious experience, delivered by trained professionals in a safe,
          sterile setting.
        </Typography>

        <Typography
          sx={{
            color: '#555',
            fontSize: { xs: '0.95rem', sm: '1.3rem', md: '1.05rem' },
            maxWidth: '500px',
            mx: { xs: 'auto', md: 0 },
          }}
        >
          At our Dindigul center, you’ll find the best of science, technology, and
          personalized care. Whether it’s hair thinning, pigmentation issues, premature
          aging, or any other concern—you’ll find solutions tailored just for you,
          backed by trusted professionals.
        </Typography>
      </Box>

      {/* Right Side - Semicircle Background + Image */}
      <Box
        data-aos="fade-down"
        sx={{
          flex: 1,
          position: 'relative',
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'end',
          mr: {lg:10,xs:1,md:10},
          maxWidth: 500,
          height: { xs: '300px', sm: '400px', md: '500px' },
        }}
      >
        {/* Semicircle background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            borderRadius: '100% 0 0 0',
            backgroundColor: '#f8d7da',
            zIndex: 0,
          }}
        />

        {/* Girl image cropped in top-right semicircle */}
        <Box
          component="img"
          src={AboutImg}
          alt="About Girl"
          sx={{
            width: '90%',
            height: '100%',
            mt: -0.5,
            objectFit: 'cover',
            clipPath: 'ellipse(100% 100% at 100% 0%)',
            zIndex: 1,
            ml: 6,
            position: 'relative',
          }}
        />
      </Box>
    </Box>
  );
};

export default Section;