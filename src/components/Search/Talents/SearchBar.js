import { useState } from "react";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { orange, grey } from "@mui/material/colors";

const SearchBar = () => {
  const [focused, setFocused] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: 600,
        border: `1.5px solid ${focused ? orange[400] : grey[400]}`,
        borderRadius: "9999px", // full rounded
        px: 2,
        py: 0.5,
        transition: "all 0.25s ease",
        "&:hover": {
          borderColor: orange[400],
        },
      }}
    >
      <SearchIcon
        sx={{
          color: focused ? orange[400] : grey[600],
          mr: 1,
          transition: "color 0.25s ease",
        }}
      />
      <InputBase
        placeholder="Search"
        fullWidth
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        sx={{
          color: grey[900],
          "& .MuiInputBase-input": {
            fontSize: 16,
            py: 1,
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
