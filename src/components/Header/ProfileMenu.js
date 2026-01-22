import { useState } from "react";
import { darkBrand } from "@/theme/colors";
import { grey, orange } from "@mui/material/colors";
import DiamondIcon from "@mui/icons-material/Diamond";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import CardMembershipOutlinedIcon from "@mui/icons-material/CardMembershipOutlined";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Switch, Typography, Grid, lighten } from "@mui/material";

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [online, setOnline] = useState(true);
  const [theme, setTheme] = useState("light");

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      {/* Profile icon button */}
      <IconButton onClick={handleClick}>
        <Avatar alt="Pulse O" sx={{ bgcolor: "orange" }}>
          Y
        </Avatar>
      </IconButton>

      {/* Dropdown menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 4,
          sx: {
            borderRadius: 3,
            mt: 1,
            maxWidth: 280,
            overflow: "visible",
            filter: "drop-shadow(0px 4px 12px rgba(0,0,0,0.1))",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {/* Profile section */}
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography fontWeight={600}>Yonko G</Typography>
          <Typography variant="body2" color="text.secondary">
            Basic
          </Typography>

          <Box
            mt={1.5}
            mb={0.5}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize={14} color={grey[900]}>
              Online for messages
            </Typography>
            <Switch
                checked={online}
                size="small"
                onChange={() => setOnline(!online)}
                sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                    color: orange[600]
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: orange[600]
                    }
                }}
            />
          </Box>

          {/* Business Plus promo card */}
          <Box
            onClick={() => alert("Try Business Plus clicked")}
            sx={{
              mt: 1,
              border: `1px solid ${orange[100]}`,
              backgroundColor: orange[50],
              borderRadius: 2,
              p: 1.5,
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": { backgroundColor: lighten(orange[50], 0.5) },
            }}
          >
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item display="flex" alignItems="center" gap={1}>
                <DiamondIcon sx={{ color: darkBrand, fontSize: 18 }} />
                <Typography fontWeight={600} fontSize={14}>
                  Try Freelancer Plus
                </Typography>
              </Grid>
              <ArrowForwardIosRoundedIcon sx={{ fontSize: 14 }} />
            </Grid>
            <Typography color="text.secondary" mt={0.5} fontSize={12}>
                Upgrade to Freelancer Plus for higher profile visibility and unlimited job applications.
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 1 }} />

        {/* Menu items */}
        <MenuItem>
          <CardMembershipOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
          Membership plan
        </MenuItem>
        <MenuItem>
          <MarkEmailUnreadOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
          Messages
        </MenuItem>
        <MenuItem>
          <HelpOutlineRoundedIcon fontSize="small" sx={{ mr: 1 }} />
          Help & Support
        </MenuItem>
        <MenuItem>
          <SettingsOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
          Account settings
        </MenuItem>

        <Divider sx={{ my: 1 }} />

        <MenuItem sx={{ color: "error.main" }}>
          <ExitToAppOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
          Log out
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
