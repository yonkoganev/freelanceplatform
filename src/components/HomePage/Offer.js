import { Box, Button, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Offer = () => {
    return(
        <Grid container width="100%" display="flex" justifyContent="center" mt={12}>
            <Grid container width="76%" height={70}>
                <Box
                    sx={{
                        px: 3,
                        width: '100%',
                        height: '100%',
                        borderRadius: 5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'linear-gradient(to right, #e6f8cd, #cff6d1)'
                    }}
                >
                    <Typography color={grey[900]} fontSize={24} fontWeight={500} letterSpacing="-1px">
                        Early clients save more — sign up before <span style={{ fontWeight: 900 }}>15th of January</span> to claim exclusive platform credits.
                    </Typography>
                    <Button
                        endIcon={<KeyboardArrowRightIcon />}
                        sx={{
                            fontSize: 16,
                            color: grey[900],
                            textTransform: 'none',
                            textDecoration: 'underline',
                            ':hover': { background: 'transparent' }
                        }}
                    >
                        Get offer
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Offer;
