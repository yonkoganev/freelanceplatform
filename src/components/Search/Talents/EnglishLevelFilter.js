import { useState } from "react";
import {
  Box,
  Collapse,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button
} from "@mui/material";
import { orange, grey } from "@mui/material/colors";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

const englishLevels = [
  "Any level",
  "Basic",
  "Conversational",
  "Fluent",
  "Native or bilingual",
];

const EnglishLevelFilter = () => {
  const [expanded, setExpanded] = useState(true);
  const [selected, setSelected] = useState("Any level");

  const handleToggle = () => setExpanded(!expanded);

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      {/* Header Button */}
      <Button
        disableRipple
        onClick={handleToggle}
        fullWidth
        endIcon={expanded ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
        sx={{
          px: 0,
          fontSize: 13,
          fontWeight: 600,
          color: grey[900],
          textTransform: "none",
          justifyContent: "space-between",
          ':hover': { background: 'transparent' }
        }}
      >
        English level
      </Button>

      {/* Expandable Radio List */}
      <Collapse
        in={expanded}
        timeout={{
          enter: 400,
          exit: 300,
        }}
        easing={{
          enter: "cubic-bezier(0.4, 0, 0.2, 1)",
          exit: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        unmountOnExit
      >
        <Box sx={{ pl: 1, }}>
          <RadioGroup
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {englishLevels.map((level) => (
              <FormControlLabel
                key={level}
                value={level}
                control={
                  <Radio
                    disableRipple
                    sx={{
                      color: grey[700],
                      "&.Mui-checked": { color: orange[400] },
                      "&:hover": { color: orange[400], backgroundColor: "transparent" },
                    }}
                  />
                }
                label={
                  <Typography fontSize={14} color={grey[900]}>
                    {level}
                  </Typography>
                }
              />
            ))}
          </RadioGroup>
        </Box>
      </Collapse>
    </Box>
  );
};

export default EnglishLevelFilter;
