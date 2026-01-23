import { useState } from "react";
import { grey } from "@mui/material/colors";
import Vector from "./Vector";
import { Box, Grid, Typography } from "@mui/material";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { darkBrand, gradientBox, lightBrand } from "@/theme/colors";

const pros = [
    { title: 'Verified talent you can trust' },
    { title: 'Transparent reviews' },
    { title: 'Hire for short or long terms' }
];

const ChooseFromTheBest = () => {
    const [hovered, setHovered] = useState();
    return(
        <Grid container width="100%" display="flex" justifyContent="center" mb={15} mt={10}>
            <Grid size={{ lg: 8, md: 10, sm: 12, xs: 12 }} px={2} display="flex" flexDirection={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }} justifyContent="space-between" alignItems="center">
                {/* Left Side */}
                <Grid sx={{ width: { lg: '45%', md: '45%', sm: '100%', xs: '100%' } }}>
                    <Typography color={grey[900]} fontSize={38} fontWeight={550} lineHeight={1.1}>
                        Collaborate with <span style={{ color: grey[900], background: `linear-gradient(to right, ${gradientBox}, transparent)`, paddingLeft: 5 }}>Confidence</span>
                    </Typography>
                    <Typography color={grey[700]} fontSize={16} mt={2}>
                        Connect with top professionals from a wide range of fields and hire the right experts for your business needs — all in one place.
                    </Typography>
                    <Grid container width="100%" direction="column">
                        {pros.map((pro, id) => (
                            <Grid
                                key={id}
                                container
                                mt={2}
                                display="flex"
                                direction="row"
                                alignItems="center"
                                onMouseEnter={() => setHovered(id)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <Box
                                    sx={{
                                        mr: 1.5,
                                        width: 28,
                                        height: 28,
                                        display: 'flex',
                                        borderRadius: '50%',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: hovered === id ? darkBrand : lightBrand
                                    }}
                                >
                                    <CheckRoundedIcon style={{ color: hovered === id ? lightBrand : darkBrand, fontSize: 18 }} />
                                </Box>
                                <Typography color={grey[700]} fontSize={16}>
                                    {pro.title}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                {/* Right Side */}
                <Grid sx={{ width: { lg: 350, md: 350, sm: '80%', xs: '100%' }, mt: { xs: 5, sm: 5, md: 0, lg: 0 } }}>
                    <Vector />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ChooseFromTheBest;
