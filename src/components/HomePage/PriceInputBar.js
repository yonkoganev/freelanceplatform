import { Box, Button, InputBase } from "@mui/material";
import { grey } from "@mui/material/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { darkBrand, lightBrand } from "@/theme/colors";

export default function PriceInputBar() {
  return (
    <Box
      sx={{
        px: 1,
        mt: 4,
        height: 50,
        bgcolor: "#fff",
        borderRadius: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <InputBase
        placeholder="To start, describe what you need done."
        inputProps={{
          style: {
            padding: 0,
            height: "100%",
            lineHeight: "50px", // ensures vertical centering
          },
        }}
        sx={{
          ml: 2,
          flex: 1,
          fontSize: 18,
          color: grey[700],
          "&::placeholder": { color: grey[600] },
        }}
      />

      <Button
        variant="contained"
        endIcon={<ArrowForwardIosIcon sx={{ fontSize: 16 }} />}
        sx={{
          ml: 2,
          px: 3,
          py: 1,
          fontSize: 14,
          fontWeight: 600,
          borderRadius: 50,
          textTransform: "none",
          color: "#fff",
          height: 40, // matches nicely inside 50px container
          background: `
            radial-gradient(circle at 80% 50%, ${darkBrand} 1%, #111, #111)
          `,
          boxShadow: "0 2px 10px rgba(200, 255, 0, 0.3)",
          "&:hover": {
            background: `
              radial-gradient(circle at 30% 30%, ${darkBrand}, #111)
            `,
            boxShadow: "0 3px 12px rgba(200, 255, 0, 0.4)",
          },
        }}
      >
        Next
      </Button>
    </Box>
  );
}
