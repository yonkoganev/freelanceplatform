"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRoundedIcon from '@mui/icons-material/StarRounded';

import { Avatar, Box, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { darkBrand } from "@/theme/colors";

// Dynamically import react-slick (prevents SSR issues in Next.js)
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const items = [
  { title: "uLance significantly increases the objectivity of evaluation in the recruiting process.!", name: "Yonko Ganev", position: "Co-Founder of 'uLance'" },
  { title: "uLance significantly increases the objectivity of evaluation in the recruiting process.!", name: "Yonko Ganev", position: "Co-Founder of uLance" },
  { title: "uLance significantly increases the objectivity of evaluation in the recruiting process.!", name: "Yonko Ganev", position: "Co-Founder of uLance" },
  { title: "uLance significantly increases the objectivity of evaluation in the recruiting process.!", name: "Yonko Ganev", position: "Co-Founder of uLance" },
];

export default function ReviewsCarousel() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box
      sx={{
        py: 6,
        width: "100%",
        overflow: "hidden",
        position: "relative",
        justifyContent: 'center'
      }}
    >
      {/* Optional gradient overlay edges */}
      <Box
        sx={{
          top: 0,
          left: 0,
          zIndex: 2,
          width: "100%",
          height: "100%",
          position: "absolute",
          pointerEvents: "none",
          background: "linear-gradient(to right, #fff 5%, transparent 20%, transparent 80%, #fff 90%)",
        }}
      />

      <Slider {...settings}>
        {items.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              border: 1,
              borderRadius: 1,
              display: "flex",
              borderColor: grey[300]
            }}
          >
            <Grid container width="100%" borderBottom={1} borderColor={grey[300]} py={2} px={3} display="flex" justifyContent="space-between">
              <Grid container direction="column">
                <Typography color={grey[900]} fontSize={13}>
                  {item.name}
                </Typography>
                <Typography color={grey[600]} fontSize={13} fontWeight={600}>
                  {item.position}
                </Typography>
              </Grid>
              <Grid container>
                <Avatar />
              </Grid>
            </Grid>
            <Grid container width="100%" px={3} py={2} direction="column">
              <Typography sx={{ color: grey[900], fontSize: 16, fontWeight: 500 }}>
                {item.title}
              </Typography>
              <Grid container>
                {Array.from({ length: 5 }).map((_, id) => (
                  <StarRoundedIcon key={id} style={{ color: darkBrand }} />
                ))}
              </Grid>
            </Grid>
          </Box>
        ))}
      </Slider>
      </Box>
  );
}
