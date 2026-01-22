import { Box, Button, Grid, Typography } from "@mui/material"
import { grey } from "@mui/material/colors";
import { useState } from "react";
import SearchBar from "./SearchBar";

const HeroSection = () => {
    const [selected, setSelected] = useState(0);
    return(
        <Grid width="100%" display="flex" justifyContent="center" mt={20}>
            <Grid
                container
                sx={{
                    width: '76%',
                    height: 630,
                    borderRadius: 5,
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 0%',
                    p: { lg: 6, md: 5, sm: 4, xs: 3 },
                    backgroundImage: 'url(/assets/herosection.png)'
                }}
            >
                {/* Overlay */}
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.45)', zIndex: 1 }} />
                <Grid size={{ lg: 7.9, md: 6, sm: 12, xs: 12 }} sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography fontSize={70} color={grey[50]} fontWeight={550} letterSpacing="0px" lineHeight={1.1}>
                        Bringing your projects to life through freelance expertise
                    </Typography>
                </Grid>
                <Grid container zIndex={2} width="100%" position="relative">
                    <Grid size={{ lg: 6.6, md: 6, sm: 12, xs: 12 }}
                        sx={{
                            p: 3,
                            border: 1,
                            zIndex: 2,
                            borderRadius: 5,
                            position: 'relative',
                            borderColor: grey[800],
                            background: 'rgba(0, 0, 0, 0.5)',
                            backdropFilter: 'blur(30px)'
                        }}
                    >
                        {/* Options */}
                        <Box
                            width="100%"
                            display="flex"
                            overflow="hidden"
                            justifyContent="center"
                            sx={{ background: `linear-gradient(to right, ${grey[800]}, ${grey[500]})`, borderRadius: 50 }}
                        >
                            <Button
                                onClick={() => setSelected(0)}
                                sx={{
                                    flexGrow: 1,
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: grey[50],
                                    borderRadius: 50,
                                    textTransform: 'none',
                                    background: 'transparent',
                                    border: selected == 0 ? 2 : 0,
                                    borderColor: grey[50]
                                }}
                            >
                                Find talent
                            </Button>
                            <Button
                                onClick={() => setSelected(1)}
                                sx={{
                                    flexGrow: 1,
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: grey[50],
                                    borderRadius: 50,
                                    textTransform: 'none',
                                    background: 'transparent',
                                    border: selected == 1 ? 2 : 0,
                                    borderColor: grey[50]
                                }}
                            >
                                Browse jobs
                            </Button>
                        </Box>
                        <Grid container width="100%" mt={4}>
                            <SearchBar />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HeroSection