import { gradientBox, lightBrand } from "@/theme/colors";
import { Button, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const ProVersion = () => {
    return(
        <Grid container width="100%" display="flex" justifyContent="center" my={8} px={2}>
            <Grid container
                size={{ lg: 8, md: 10, sm: 12, xs: 12 }}
                sx={{
                    px: 8,
                    py: 10,
                    borderRadius: 5,
                    justifyContent: 'space-between',
                    background: `linear-gradient(to bottom, ${lightBrand}, ${gradientBox})`
                }}
            >
                <Grid size={{ lg: 5, md: 5, sm: 12, xs: 12 }}>
                    <Typography color={grey[900]} fontSize={30} letterSpacing="-2px">
                        <span style={{ fontWeight: 900 }}>ulance</span> pro.
                    </Typography>
                    <Grid container width="100%" mt={5}>
                        <Typography color={grey[900]} fontSize={45} letterSpacing="-1px" fontWeight={100} lineHeight={1.1}>
                            High-quality work, or your <span style={{ fontWeight: 900, color: grey[800] }}>money back</span>
                        </Typography>
                        <Typography color={grey[900]} fontSize={16} mt={2}>
                            On uLance Pro, you can bring your vision to life risk-free. Every project with vetted Pro freelancers is
                            backed by our money-back guarantee, so you can accomplish any high-stakes project with total confidence.
                        </Typography>
                        <Button
                            sx={{
                                px: 3,
                                py: 1,
                                mt: 2,
                                fontSize: 16,
                                fontWeight: 600,
                                borderRadius: 2,
                                color: lightBrand,
                                textTransform: 'none',
                                background: grey[900]
                            }}
                        >
                            Try now
                        </Button>
                    </Grid>
                </Grid>
                <Grid size={{ lg: 6.2, md: 5, sm: 12, xs: 12 }} display={{ xs: 'none', sm: 'none', md: 'flex' }}>
                    <video
                        src="/assets/workingvideo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: 15, // optional for rounded corners
                        }}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProVersion;
