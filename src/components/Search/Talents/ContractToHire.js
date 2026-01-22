import { grey, orange } from "@mui/material/colors";
import { Checkbox, FormControlLabel, Typography, } from "@mui/material";

const ContractToHire = () => {

  return (
    <FormControlLabel
      sx={{ mt: 2 }}
      control={
        <Checkbox
          size="medium"
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
          Open to contract-to-hire
        </Typography>
      }
    />
  );
};

export default ContractToHire;
