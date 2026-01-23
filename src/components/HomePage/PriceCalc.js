import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Grid } from "@mui/system";
import PriceInputBar from "./PriceInputBar";
import PriceAnim from "./PriceAnim";
import ScalingText from "./ScalingText";

const PriceCalc = () => {
    return(
        <Grid container width="100%" display="flex" justifyContent="center" my={8} px={2}>
            <Grid size={{ lg: 8, md: 10, sm: 12, xs: 12 }}
                sx={{
                    p: 1,
                    height: 400,
                    borderRadius: 5,
                    display: 'flex',
                    flexDirection: 'row',
                    background: '#181818'
                }}
            >
                <Grid
                    size={{ lg: 6 }}
                    sx={{
                        px: 4,
                        border: 1,
                        zIndex: 998,
                        height: '100%',
                        borderRadius: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        borderColor: grey[800],
                        background: '#1a1a1a',
                        backgroundImage: `
                            repeating-linear-gradient(
                                45deg,                /* diagonal angle */
                                rgba(255, 255, 255, 0.05) 0,   /* light stripe color */
                                rgba(255, 255, 255, 0.05) 2px, /* stripe thickness */
                                transparent 2px,
                                transparent 20px               /* spacing between stripes */
                            )
                        `
                    }}
                >
                    <Typography color={grey[50]} fontWeight={600} fontSize={50} lineHeight={1.1}>
                        Get insights into freelancer pricing
                    </Typography>
                    <Typography color={grey[50]} fontSize={16} mt={4}>
                        We`ll calculate the average cost for freelancers with the skills you need.
                    </Typography>
                    <PriceInputBar />
                </Grid>
                <Grid size={{ lg: 6 }} height="100%" display={{ lg: 'flex', md: 'none', sm: 'none', xs: 'none' }} justifyContent="center" alignItems="center" position="relative">
                    <Box sx={{ position: "absolute", top: "60%", transform: "translateY(-60%)", zIndex: 998 }}>
                        <ScalingText />
                    </Box>
                    <PriceAnim />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PriceCalc;
