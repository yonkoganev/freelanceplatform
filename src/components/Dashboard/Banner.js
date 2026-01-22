import Link from "next/link";
import { useState } from "react";
import { CiGift } from "react-icons/ci";
import { grey, orange } from "@mui/material/colors";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, Grid, IconButton, Typography } from "@mui/material";

const Banner = () => {
    const [isHidden, setIsHidden] = useState();
    return(
        <>
            {!isHidden &&
                <Box
                    sx={{
                        px: 2,
                        gap: 1,
                        py: 1.5,
                        borderRadius: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: `linear-gradient(to right, ${orange[200]}, ${orange[700]})`
                    }}
                >
                    <Grid container display="flex" alignItems="center">
                        <CiGift style={{ color: grey[900], fontSize: 30 }} />
                        <Typography color={grey[900]} fontSize={14}>
                            Access top-rated freelancers with Business Plus. Priority listings, faster hires, smarter results.
                        </Typography>
                    </Grid>
                    <Grid container display="flex" alignItems="center" gap={2}>
                        <Link href="/pricing/business">
                            <Typography color={grey[900]} fontSize={14} sx={{ textDecoration: 'underline' }}>
                                Upgrade now
                            </Typography>
                        </Link>
                        <IconButton disableRipple sx={{ ':hover': { background: 'transparent' } }} onClick={() => setIsHidden(true)}>
                            <CloseRoundedIcon sx={{ fontSize: 25, color: grey[900] }} />
                        </IconButton>
                    </Grid>
                </Box>
            }
        </>
    );
};

export default Banner;
