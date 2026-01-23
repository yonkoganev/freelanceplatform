import { useState } from "react";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { darkBrand } from "@/theme/colors";
import { useTranslation } from "next-i18next";

import { Box, Button, darken, Grid, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import BusinessIcon from "@mui/icons-material/Business";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import ProfileMenu from "./Header/ProfileMenu";

// Routes
const links = ["/search/talents", "/search/businesses", "/", "/", "/pricing/freelancer"];

// Icons per menu item
const menuIcons = [
  <SearchIcon />,
  <BusinessIcon />,
  <HomeIcon />,
  <WorkIcon />,
  <AttachMoneyIcon />
];

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation("login");

  const rawButtons = t("buttons", { returnObjects: true });
  const buttons = Array.isArray(rawButtons) ? rawButtons : [];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (state) => () => setDrawerOpen(state);

  return (
    <>
    {/* HEADER */}
    <Grid
        container
        width="100%"
        py={2}
        px={2}
        position="fixed"
        top={0}
        bgcolor="#fff"
        zIndex={999}
        justifyContent="center"
    >
        <Grid
          size={{ lg: 10, md: 10, sm: 10, xs: 12 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
            {/* LEFT: HAMBURGER (MOBILE ONLY) */}
            <Box display={{ xs: "flex", sm: "flex", md: "none" }}>
                <IconButton onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
            </Box>
            {/* CENTER: DESKTOP MENU */}
            <Box
                display={{ xs: "none", sm: "none", md: "flex" }}
                flexGrow={1}
                justifyContent="left"
            >
                {buttons.map((button, id) => (
                    <Button
                        key={id}
                        onClick={() => router.push(links[id])}
                        sx={{
                            fontSize: 14,
                            color: grey[900],
                            fontWeight: 600,
                            textTransform: "none",
                            background: "transparent",
                            ":hover": { background: "transparent" }
                        }}
                    >
                        {button.title}
                    </Button>
                ))}
            </Box>

            {/* RIGHT: AUTH + PROFILE */}
            <Box display="flex" alignItems="center" gap={1}>
                <Button
                    sx={{
                        fontSize: 14,
                        color: grey[900],
                        textTransform: "none",
                        background: "transparent",
                        ":hover": { background: "transparent" }
                    }}
                >
                    {t("login")}
                </Button>

                <Button
                    sx={{
                        px: 3,
                        py: 1,
                        fontSize: 14,
                        fontWeight: 600,
                        color: grey[50],
                        borderRadius: 3,
                        textTransform: "none",
                        background: darkBrand,
                        ":hover": {
                        background: darken(darkBrand, 0.1),
                        boxShadow: `0px 0px 20px ${darkBrand}`
                        }
                    }}
                >
                    {t("signup")}
                </Button>

                <ProfileMenu />
            </Box>
        </Grid>
    </Grid>

    {/* DRAWER (MOBILE) */}
    <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
            "& .MuiDrawer-paper": {
            width: 260,
            p: 2
            }
        }}
    >
        <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
            </IconButton>
        </Box>
        <List>
            {buttons.map((button, id) => (
            <ListItemButton
                key={id}
                onClick={() => {
                router.push(links[id]);
                setDrawerOpen(false);
                }}
            >
                <ListItemIcon sx={{ minWidth: 36 }}>{menuIcons[id]}</ListItemIcon>
                <ListItemText primary={button.title} />
            </ListItemButton>
            ))}
        </List>
    </Drawer>
    </>
  );
};

export default Header;
