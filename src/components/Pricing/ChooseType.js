import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import { grey, orange } from "@mui/material/colors";
import Groups3Icon from '@mui/icons-material/Groups3';
import { Box, Grid, Typography } from "@mui/material";
import { gradientBox } from "@/theme/colors";
import { useRouter } from "next/router";

const ChooseType = () => {
    const router = useRouter();
    return(
        <Grid container width="100%" alignItems="center" gap={3} direction="column" mt={10} mb={30}>
            <Grid size={{ lg: 9, md: 9, sm: 12, xs: 12 }} zIndex={999}>
                <Typography textAlign="left" fontSize={28} mt={15} color={grey[900]} zIndex={999}>
                    Start your <span style={{ background: `linear-gradient(to right, ${gradientBox}, transparent)`, paddingLeft: 7, fontWeight: 600 }}>journery</span> with uLance.
                </Typography>
                <Typography textAlign="left" fontSize={28} mt={0} color={grey[900]} zIndex={999}>
                    Choose how you want to join the community.
                </Typography>
                <Typography textAlign="left" fontSize={18} mt={2} mb={3} color={grey[700]} zIndex={999}>
                    Whether you’re hiring top talent or finding your next big project — we’ve got you covered.
                </Typography>
                <Grid container gap={2}>
                    <Box
                        onClick={() => router.push("/pricing/freelancer")}
                        sx={{
                            p: 3,
                            width: 300,
                            zIndex: 999,
                            color: grey[50],
                            borderRadius: 3,
                            transition: 'all 0.2s ease-in-out',
                            background: `linear-gradient(to right bottom, ${orange[200]}, ${orange[800]})`,
                            ':hover': { cursor: 'pointer', boxShadow: `0px 0px 20px ${orange[300]}`, transform: 'translateY(-4px)' }
                        }}
                    >
                        <Grid container display="flex" width="100%" alignItems="center" gap={2}>
                            <PersonIcon style={{ fontSize: 40 }} />
                            <Typography color={grey[50]} fontWeight={600}>
                                I&apos;m a Freelancer
                            </Typography>
                        </Grid>
                    </Box>
                    <Box
                        onClick={() => router.push("/pricing/business")}
                        sx={{
                            p: 3,
                            width: 300,
                            zIndex: 999,
                            color: grey[50],
                            borderRadius: 3,
                            transition: 'all 0.2s ease-in-out',
                            background: `linear-gradient(to right bottom, ${orange[200]}, ${orange[800]})`,
                            ':hover': { cursor: 'pointer', boxShadow: `0px 0px 20px ${orange[300]}`, transform: 'translateY(-4px)' }
                        }}
                    >
                        <Grid container display="flex" width="100%" alignItems="center" gap={2}>
                            <Groups3Icon style={{ fontSize: 40 }} />
                            <Typography color={grey[50]} fontWeight={600}>
                                I&apos;m a Business
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Grid
                container
                top={0}
                left={0}
                zIndex={998}
                width="100%"
                display="flex"
                height="100vh"
                position="absolute"
                justifyContent="center"
                sx={{
                    backgroundColor: "#fff",
                    backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                    WebkitMaskImage: `
                    radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)
                    `,
                    WebkitMaskSize: "100% 100%",
                    maskImage: `
                    radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)
                    `,
                    maskSize: "100% 100%",
                }}
            />
        </Grid>
    );
};

export default ChooseType;
