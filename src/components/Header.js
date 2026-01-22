import { useState } from "react";
import { grey } from "@mui/material/colors";
import { useRouter } from 'next/router'
import { darkBrand } from "@/theme/colors";
import { styled } from "@mui/material/styles";
import { useTranslation } from "next-i18next";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Box, Button, darken, Grid, MenuItem, Select, Typography } from "@mui/material";
import ProfileMenu from "./Header/ProfileMenu";

const flags = {
  bg: "🇧🇬",
  en: "🇬🇧"
};

const links = ["/search/talents", "/search/businesses", "/search/talents", "/search/talents", "/pricing/freelancer"]

// Styled Select for a cleaner modern look
const StyledSelect = styled(Select)(({ theme }) => ({
    minWidth: 50,
    border: 0,
    "& .MuiOutlinedInput-notchedOutline": {
        border: 0,
        width: 50
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        width: 50,
    },
    "& .MuiSelect-select": {
        display: "flex",
        width: 50,
        alignItems: "center",
        gap: "8px",
    },
}));

const Header = () => {
    const router = useRouter();
    const { t } = useTranslation("login");
    const rawButtons = t("buttons", { returnObjects: true });
    const buttons = Array.isArray(rawButtons) ? rawButtons : [];
    const [language, setLanguage] = useState("en");

    const handleChange = (event) => {
        const lang = event.target.value;
        setLanguage(lang);
        if (!router.isReady) return;
        router.push(router.asPath, undefined, { locale: lang });
    };
    return(
        <Grid container width="100%" py={2} top={0} position="fixed" justifyContent="center" display="flex" bgcolor="#fff" zIndex={999} alignItems="center">
            <Grid size={{ lg: 10, md: 10, sm: 10, xs: 12 }} gap={2} display="flex" flexDirection="row" justifyContent="space-between">
                <Grid size={{ lg: 8, md: 8, sm: 10, xs: 12 }}>
                    {buttons.map((button, id) => (
                        <Button
                            onClick={() => router.push(links[id])}
                            key={id}
                            sx={{
                                fontSize: 14,
                                color: grey[900],
                                textTransform: 'none',
                                background: 'transparent',
                                ':hover': { background: 'transparent' }
                            }}
                        >
                            {button.title}
                        </Button>
                    ))}
                </Grid>
                <Grid container gap={1}>
                    <Button
                        sx={{
                            fontSize: 14,
                            color: grey[900],
                            textTransform: 'none',
                            background: 'transparent',
                            ':hover': { background: 'transparent' }
                        }}
                    >
                        {t("login")}
                    </Button>
                    <Button
                        onClick={() => router.push('/signup')}
                        sx={{
                            px: 3,
                            py: 1,
                            fontSize: 14,
                            fontWeight: 600,
                            color: grey[50],
                            borderRadius: 3,
                            textTransform: 'none',
                            background: darkBrand,
                            ':hover': { background: darken(darkBrand, 0.1), boxShadow: `0px 0px 20px ${darkBrand}` }
                        }}
                    >
                        {t("signup")}
                    </Button>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, width: 50 }}>
                        <StyledSelect
                            value={language}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            IconComponent={() => null}
                        >
                            {Object.entries(flags).map(([code, flag]) => (
                            <MenuItem key={code} value={code}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: 'center' }}>
                                    <Typography fontSize={20} textAlign="center">{flag}</Typography>
                                </Box>
                            </MenuItem>
                            ))}
                        </StyledSelect>
                    </Box>
                    <ProfileMenu />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Header;
