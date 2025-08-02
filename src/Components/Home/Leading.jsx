import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import FaceIcon from "@mui/icons-material/FaceRetouchingNatural";
import SpaIcon from "@mui/icons-material/Spa";
import HealingIcon from "@mui/icons-material/Healing";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import AOS from "aos";
import "aos/dist/aos.css";

const iconData = [
  { icon: <FaceIcon />, label: "Hair Care" },
  { icon: <SpaIcon />, label: "Skin Treatments" },
  { icon: <HealingIcon />, label: "Laser Therapies" },
  { icon: <EmojiEmotionsIcon />, label: "Cosmetic Procedures" },
  { icon: <AutoAwesomeIcon />, label: "Anti-Aging" },
];

const HighlightSection = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const radius = isMdDown ? 100 : 150;
  const angleStep = (2 * Math.PI) / iconData.length;

  return (
    <Box
      sx={{
        width: { xs: "90%", lg: "100%", sm: "98%",md:'100%' },
        minHeight: { lg: "70vh", md: "90vh", xs: "90vh", sm: "100vh" },
        px: { xs: 2, sm: 1, md: 6, lg: 10 },
        py: { xs: 4 },
        ml: { sm: 1, lg: 1 },
        backgroundColor: "#f9f6f4",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        ml={{lg:3,md:2}}
        
        direction={{ xs: "column", md: "row" }}
      >
        {/* Left Circle (Responsive Position) */}
        <Grid
          item
          xs={12}
          md={6}
          data-aos="zoom-in"
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            order: { xs: 2, md: 1 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: isMdDown ? 220 : 250,
              height: isMdDown ? 220 : 250,
              mt: isMdDown ? 5 : "70%",
              mx: isMdDown ? "auto" : 0,
            }}
          >
            {iconData.map((item, i) => {
              const angle = -Math.PI / 2 + angleStep * i;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              const isActive = i === activeIndex;

              return (
                <Box
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setActiveIndex(i)}
                  sx={{
                    position: "absolute",
                    top: { lg: "25%", xs: "50%", md: "155%",lg:'50%' },
                    left: { lg: "90%", xs: "50%", sm: "50%", md: "200%" },
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${
                      isActive ? 1.2 : 1
                    })`,
                    width: { xs: 60, sm: 80, md: 100 },
                    height: { xs: 60, sm: 80, md: 100 },
                    borderRadius: "50%",
                    backgroundColor: isActive ? "#E2231A" : "#fff",
                    color: isActive ? "#fff" : "#000",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: 2,
                    textAlign: "center",
                    p: 1,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.icon}
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.75rem" },
                      mt: 0.5,
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Grid>

        {/* Right Content */}
        <Grid
          item
          xs={12}
          md={6}
          data-aos="fade-up"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: { xs: "center", md: "flex-start" },
            height: "100%",
            textAlign: { xs: "center", md: "left" },
            px: { xs: 1, md: 1, lg: 10 },
            mt: { xs: 0, sm: 4, md: -13,lg:10 },
            order: { xs: 1, md: 2 },
            ml: { lg: 50, xs: 1 },
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.4rem", sm: "1.5rem", md: "2rem" },
              color: "#E2231A",
              mb: 2,
              width: { lg: "500px", md: "500px", sm: "450px" },
            }}
          >
            Leading Hair & Skin Treatments at GroHair & GloSkin – Dindigul
          </Typography>

          <Typography
            sx={{
              color: "#555",
              fontSize: { xs: "0.9rem", sm: "1.3rem", md: "1.05rem" },
              mb: 2,
              maxWidth: "500px",
              mx: { xs: "auto", md: 0 },
            }}
          >
            At GroHair & GloSkin Dindigul, we use proven hair restoration
            techniques and modern dermatological skincare. Our team pairs
            advanced tech with clinical expertise for results that are not just
            visible, but long-lasting.
          </Typography>

          <Typography
            sx={{
              color: "#555",
              fontSize: { xs: "0.9rem", sm: "1.3rem", md: "1.05rem" },
              maxWidth: "500px",
              mx: { xs: "auto", md: 0 },
            }}
          >
            Whether restoring hair volume or enhancing skin clarity, our
            Dindigul clinic is equipped with world-class expertise and results.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HighlightSection;