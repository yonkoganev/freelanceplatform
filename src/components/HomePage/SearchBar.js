import { Box, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <Box
      sx={{
        p: 0.5,
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: 600,
        height: 50,
        backgroundColor: "#fff",
        borderRadius: "50px",
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.2)",
      }}
    >
      <InputBase
        placeholder="Search by role, skills, or keywords"
        sx={{
          flex: 1,
          pl: 3,
          pr: 2,
          fontSize: 18,
          color: "grey.700",
        }}
      />

      <Button
        variant="contained"
        sx={{
          pr: 3,
          fontSize: 18,
          height: "100%",
          color: "#fff",
          fontWeight: 600,
          borderRadius: 50,
          textTransform: "none",
          backgroundColor: "#111"
        }}
        startIcon={
          <SearchIcon style={{ color: "#c8ff00", fontSize: 30 }} />
        }
      >
        Search
      </Button>
    </Box>
  );
}
