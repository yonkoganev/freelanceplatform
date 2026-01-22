import { darkBrand } from "@/theme/colors";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";

export default function ScalingText() {
  const texts = ["1. Describe your job", "2. Check for estimated price", "3. Hire an expert"];
  const [index, setIndex] = useState(0);
  const [scaling, setScaling] = useState(true);

  useEffect(() => {
    // Step 1: scale down after being visible for 2s
    const visibleTimer = setTimeout(() => setScaling(false), 1500);

    // Step 2: while scaled down, switch text and scale back up
    const swapTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
      setScaling(true);
    }, 2000); // 600 ms later (matches shrink animation duration)

    return () => {
      clearTimeout(visibleTimer);
      clearTimeout(swapTimer);
    };
  }, [index]);

  return (
    <Box
      sx={{
        mb: 4,
        zIndex: 2,
        width: 420,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        color={grey[300]}
        fontSize={26}
        sx={{
          px: 3,
          py: 0.5,
          border: 2,
          width: '100%',
          borderRadius: 50,
          textAlign: 'center',
          borderColor: darkBrand,
          opacity: scaling ? 1 : 0,
          transform: scaling ? "scale(1)" : "scale(0)",
          transition: "transform 0.6s ease, opacity 0.6s ease",
          background: `linear-gradient(to right, ${grey[900]}, #000, ${grey[900]})`
        }}
      >
        {texts[index]}
      </Typography>
    </Box>
  );
}
