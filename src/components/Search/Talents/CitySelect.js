import { useState } from "react";
import { styled } from "@mui/material/styles";
import { orange, grey } from "@mui/material/colors";
import { MenuItem, Select, Typography, FormControl } from "@mui/material";

// List of major Bulgarian cities/regions
const bulgarianCities = [
  "Sofia",
  "Plovdiv",
  "Varna",
  "Burgas",
  "Ruse",
  "Stara Zagora",
  "Pleven",
  "Sliven",
  "Dobrich",
  "Shumen",
  "Pernik",
  "Haskovo",
  "Yambol",
  "Pazardzhik",
  "Blagoevgrad",
  "Veliko Tarnovo",
  "Vratsa",
  "Gabrovo",
  "Kardzhali",
  "Kyustendil",
  "Lovech",
  "Montana",
  "Razgrad",
  "Silistra",
  "Smolyan",
  "Targovishte",
  "Vidin"
];

// Styled Select
const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: 8,
  backgroundColor: "#fff",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: grey[400],
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: orange[400],
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: orange[400],
  },
  "& .MuiSelect-select": {
    color: grey[900],
    padding: "10px 14px",
    fontSize: 14,
  },
}));

const CitySelect = () => {
  const [city, setCity] = useState("");

  return (
    <FormControl fullWidth size="small">
      <StyledSelect
        displayEmpty
        value={city}
        sx={{ height: 35 }}
        onChange={(e) => setCity(e.target.value)}
        renderValue={(selected) => {
          if (!selected) {
            return (
              <Typography color={grey[500]}>
                City or region
              </Typography>
            );
          }
          return selected;
        }}
      >
        {bulgarianCities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default CitySelect;
