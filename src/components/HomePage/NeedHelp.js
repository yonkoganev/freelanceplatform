import { Button, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NeedHelp = () => {
    return(
        <Grid container width="100%" display="flex" justifyContent="center" mb={10}>
            <Grid
                size={{ lg: 9.2 }}
                sx={{
                    px: 10,
                    py: 20,
                    display: 'flex',
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'linear-gradient(to top right, #6b2d3eff 1%, #c55d7b)'
                }}
            >
                <Grid size={{ lg: 5 }}>
                    <Typography color={grey[50]} fontSize={50} fontWeight={100} lineHeight={1.1}>
                        Need an expert for a specific task?
                    </Typography>
                    <Typography color={grey[50]} fontSize={16} lineHeight={1.1} mt={3}>
                        Discover qualified experts who build, optimize, and market your project effectively.
                    </Typography>
                    <Button
                        sx={{
                            mt: 3,
                            px: 2.5,
                            py: 1.5,
                            fontWeight: 600,
                            color: grey[900],
                            borderRadius: 2,
                            background: grey[50],
                            textTransform: 'none'
                        }}
                    >
                        Find an expert
                    </Button>
                </Grid>
                <Grid size={{ lg: 5 }} borderRadius={5} overflow="hidden" justifyContent="right" display="flex">
                    <DotLottieReact src="/assets/webdev.lottie" loop autoplay />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NeedHelp;
