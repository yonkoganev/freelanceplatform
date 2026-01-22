import { useState } from "react";
import { Box, Slider, Typography } from "@mui/material";
import { grey, orange } from "@mui/material/colors";

// Example data (11 bars for 0–100)
const histogram = [5, 9, 6, 4, 3, 5, 2, 3, 2, 1, 4];

function valuetext(value) {
  return `$${value}`;
}

const HourlyRateSlider = () => {
  const [value, setValue] = useState([10, 90]);
  const [min, max] = [0, 100];
  const step = 10;

  const handleChange = (event, newValue) => setValue(newValue);

  const formatLabel = (v) => {
    if (v === min) return "< $10";
    if (v === max) return "$100+";
    return `$${v}`;
  };

  return (
    <Box sx={{ width: "100%", display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      {/* Histogram */}
      <Box
        sx={{
          width: '110%',
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          height: 145,
          mb: -2.35, // overlap nicely with slider
          px: "10px", // keep bars centered relative to slider track
        }}
      >
        {histogram.map((barHeight, i) => {
          const barValue = i * step;
          const inRange = barValue >= value[0] && barValue <= value[1];
          return (
            <Box
              key={i}
              sx={{
                width: "calc(100% / 11 - 18px)", // evenly space bars
                height: `${barHeight * 15}px`,
                borderRadius: "3px",
                backgroundColor: inRange ? orange[400] : grey[300],
                transition: "background-color 0.25s ease",
              }}
            />
          );
        })}
      </Box>

      {/* Slider */}
      <Slider
        value={value}
        onChange={handleChange}
        step={step}
        min={min}
        max={max}
        valueLabelDisplay="on"
        valueLabelFormat={formatLabel}
        getAriaValueText={valuetext}
        sx={{
          color: orange[400],
          height: 6,
          "& .MuiSlider-thumb": {
            width: 18,
            height: 18,
            backgroundColor: orange[400],
            border: `2px solid ${orange[400]}`
          },
          "& .MuiSlider-rail": {
            color: grey[300],
            opacity: 1,
          },
          "& .MuiSlider-track": {
            border: "none",
          },
          "& .MuiSlider-valueLabel": {
            background: "#fff",
            color: grey[900],
            fontWeight: 600,
            borderRadius: "6px",
            px: 1,
            py: 0.5,
            "&::before": { display: "none" },
          },
        }}
      />
    </Box>
  );
};

export default HourlyRateSlider;
