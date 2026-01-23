import { Button, darken, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import HeroVector from "./HeroVector";
import { darkBrand, gradientBox } from "@/theme/colors";
import { Trans, useTranslation } from "next-i18next"

const highlightStyle = {
  color: grey[900],
  background: `linear-gradient(to right, ${gradientBox}, transparent)`,
  paddingLeft: 10,
  paddingBottom: 2,
};


const HeroSection2 = () => {
    const { t } = useTranslation("hero");
    return(
        <Grid container width="100%" display="flex" justifyContent="center" px={2} my={20}>
            <Grid size={{ lg: 8, md: 10, sm: 12, xs: 12 }} display="flex" justifyContent="space-between" sx={{ flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' } }}>
                <Grid size={{ lg: 5.5, md: 7, sm: 12, xs: 12 }} direction="column">
                    <Typography suppressHydrationWarning color={grey[900]} fontWeight={900} letterSpacing="-3px" lineHeight={1} sx={{ fontSize: { lg: 60, md: 50, sm: 40, xs: 40 }, width: { lg: '100%', md: '100%', sm: '70%' } }}>
                        <Trans i18nKey="headline" ns="hero" components={{ highlight: ( <span style={highlightStyle} /> ) }} />
                    </Typography>
                    <Typography color={grey[600]} fontSize={18} mt={2}>
                        {t("description")}
                    </Typography>
                    <Button
                        onClick={() => router.push('/signup')}
                        sx={{
                            mt: 3,
                            px: 5,
                            py: 1,
                            fontSize: 16,
                            fontWeight: 600,
                            color: grey[50],
                            borderRadius: 50,
                            textTransform: 'none',
                            background: darkBrand,
                            ':hover': { background: darken(darkBrand, 0.1), boxShadow: `0px 0px 20px ${grey[400]}` }
                        }}
                    >
                        {t("cta")}
                    </Button>
                    <Typography color={grey[600]} fontSize={14} mt={1}>
                        {t("shortdescription")}
                    </Typography>
                </Grid>
                <Grid size={{ lg: 5, md: 5, sm: 12, xs: 12 }} direction="column" sx={{ mt: { lg: 0, md: 0, sm: 8, xs: 8 } }}>
                    <HeroVector />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HeroSection2;
