import { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  Collapse,
  Button
} from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

const categories = [
  "Development & IT",
  "Design & Creative",
  "AI Services",
  "Sales & Marketing",
  "Writing & Translation",
  "Admin & Support",
  "Finance & Accounting",
  "Legal",
  "HR & Training",
  "Other",
];

const CategoryFilter = () => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleToggle = () => setExpanded(!expanded);

  const handleCheckboxChange = (category) => {
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      {/* Category Header Button */}
      <Button
        disableRipple
        onClick={handleToggle}
        fullWidth
        endIcon={expanded ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
        sx={{
          px: 0,
          justifyContent: "space-between",
          textTransform: "none",
          fontSize: 13,
          fontWeight: 600,
          color: grey[900],
          backgroundColor: "transparent",
        }}
      >
        Category
      </Button>

      {/* Expandable Checkbox List */}
      <Collapse in={expanded} unmountOnExit
        timeout={{
          enter: 400,
          exit: 300,
        }}
        easing={{
          enter: "cubic-bezier(0.4, 0, 0.2, 1)",
          exit: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Box
          sx={{
            mt: 0,
            p: 2,
            borderRadius: 2,
            backgroundColor: grey[100],
          }}
        >
          <Grid container direction="column" spacing={0.5}>
            {categories.map((category) => (
              <Grid item key={category}>
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      disableRipple
                      checked={selected.includes(category)}
                      onChange={() => handleCheckboxChange(category)}
                      sx={{
                        color: grey[700],
                        "&.Mui-checked": { color: orange[400] },
                        "&:hover": { color: orange[400], backgroundColor: "transparent" },
                      }}
                    />
                  }
                  label={
                    <Typography fontSize={14} color={grey[900]}>
                      {category}
                    </Typography>
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Collapse>
    </Box>
  );
};

export default CategoryFilter;
