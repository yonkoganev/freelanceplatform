import { useState } from "react";
import { green, grey } from "@mui/material/colors";
import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, darken, Grid, Typography } from "@mui/material";
import { darkBrand, gradientBox, lightBrand } from "@/theme/colors";

const Plans = () => {
    const [selected, setSelected] = useState()
    return(
        <Grid container width="100%" display="flex" justifyContent="center" mb={10} position="relative" mt={20} px={2}>
            <Typography color={grey[900]} fontSize={38} lineHeight={1.1} fontWeight={550} letterSpacing="-1px" zIndex={998}>
                Choose a <span style={{ color: grey[800], background: `linear-gradient(to right, ${gradientBox}, transparent)`, paddingLeft: 5 }}>plan</span> accordingly
            </Typography>
            <Grid size={{ lg: 9.2, xs: 12, sm: 12, md: 11 }} px={2} display="flex" justifyContent="center" gap={2} mt={5} zIndex={998} flexDirection={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }}>
                <Box
                    onMouseEnter={() => setSelected(0)}
                    onMouseLeave={() => setSelected(null)}
                    sx={{
                        p: 4,
                        border: 1,
                        width: { lg: '35%', md: '48%', sm: '100%', xs: '100%'},
                        borderRadius: 5,
                        overflow: 'hidden',
                        background: '#fff',
                        position: 'relative',
                        borderColor: grey[300],
                        transition: 'transform 0.2s ease-in-out',
                        boxShadow: selected === 0 ? `0px 10px 20px ${grey[300]}` : 0,
                        ':hover': { borderColor: darkBrand, transform: { lg: 'scale(1.05)', md: 'scale(1.05)', sm: 'scale(1.02)', xs: 'scale(1.02)' } }
                    }}
                >
                    <Typography color={grey[900]} fontSize={18} fontWeight={600}>
                        Basic
                    </Typography>
                    <Typography color={grey[700]} fontSize={14}>
                        For starting out
                    </Typography>
                    <Typography color={grey[800]} fontSize={14} mt={2}>
                        5 Free Applications
                    </Typography>
                    <Typography color={grey[700]} fontSize={16} mt={2}>
                        Basic plan includes:
                    </Typography>
                    <Grid container gap={1} display="flex" alignItems="center" mt={3}>
                        <CheckIcon style={{ color: grey[900], fontSize: 20 }} />
                        <Typography color={grey[900]} fontSize={14}>
                            Pay as work is completed
                        </Typography>
                    </Grid>
                    <Grid container gap={1} display="flex" alignItems="center" mt={2}>
                        <CheckIcon style={{ color: grey[900], fontSize: 20 }} />
                        <Typography color={grey[900]} fontSize={14}>
                            Project tracking tools
                        </Typography>
                    </Grid>
                    <Grid container gap={1} display="flex" alignItems="center" mt={2}>
                        <CheckIcon style={{ color: grey[900], fontSize: 20 }} />
                        <Typography color={grey[900]} fontSize={14}>
                            Variety of searching tools
                        </Typography>
                    </Grid>
                    <Button
                        fullWidth
                        sx={{
                            mt: 4,
                            border: 2,
                            fontWeight: 600,
                            borderRadius: 2,
                            textTransform: 'none',
                            borderColor: darkBrand,
                            color: selected === 0 ? grey[50] : darkBrand,
                            background: selected === 0 ? darkBrand : 'transparent'
                        }}
                    >
                        Get started for free
                    </Button>
                </Box>
                <Box
                    onMouseEnter={() => setSelected(1)}
                    onMouseLeave={() => setSelected(null)}
                    sx={{
                        p: 4,
                        border: 1,
                        width: { lg: '35%', md: '48%', sm: '100%', xs: '100%'},
                        borderRadius: 5,
                        overflow: 'hidden',
                        background: '#fff',
                        position: 'relative',
                        borderColor: darkBrand,
                        transition: 'transform 0.2s ease-in-out',
                        boxShadow: selected === 1 ? `0px 10px 20px ${grey[300]}` : 0,
                        ':hover': { borderColor: darkBrand, transform: { lg: 'scale(1.05)', md: 'scale(1.05)', sm: 'scale(1.02)', xs: 'scale(1.02)' } }
                    }}
                >
                    <Typography color={grey[900]} fontSize={18} fontWeight={600}>
                        Freelancer Plus
                    </Typography>
                    <Typography color={grey[700]} fontSize={14}>
                        For growing
                    </Typography>
                    <Typography color={grey[800]} fontSize={14} mt={2}>
                        10 Applications / month
                    </Typography>
                    <Typography color={grey[700]} fontSize={16} mt={2}>
                        Everything in Basic, plus:
                    </Typography>
                    <Grid container gap={1} display="flex" alignItems="center" mt={3}>
                        <CheckIcon style={{ color: grey[900], fontSize: 20 }} />
                        <Typography color={grey[900]} fontSize={14}>
                            Instant access to pre-vetted top 1% of talent
                        </Typography>
                    </Grid>
                    <Grid container gap={1} display="flex" alignItems="center" mt={2}>
                        <CheckIcon style={{ color: grey[900], fontSize: 20 }} />
                        <Typography color={grey[900]} fontSize={14}>
                            Allows contracts
                        </Typography>
                    </Grid>
                    <Grid container gap={1} display="flex" alignItems="center" mt={2}>
                        <CheckIcon style={{ color: grey[900], fontSize: 20 }} />
                        <Typography color={grey[900]} fontSize={14}>
                            Invoicing assistant
                        </Typography>
                    </Grid>
                    <Button
                        fullWidth
                        sx={{
                            mt: 4,
                            border: 2,
                            fontWeight: 600,
                            borderRadius: 2,
                            textTransform: 'none',
                            borderColor: darkBrand,
                            color: grey[50],
                            background: darkBrand
                        }}
                    >
                        Start with this plan
                    </Button>
                    <Box
                        sx={{
                            top: 0,
                            py: 0.5,
                            px: 1.5,
                            right: 0,
                            position: 'absolute',
                            background: lightBrand,
                            borderBottomLeftRadius: 15
                        }}
                    >
                        <Typography color={darkBrand} fontSize={12}>POPULAR</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid container width="100%" display="flex" justifyContent="center" mt={2}>
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
                        transition: 'transform 0.2s ease-in-out',
                        width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                        ':hover': { background: darken(darkBrand, 0.1), boxShadow: `0px 0px 20px ${lightBrand}`, transform: 'scale(1.05)' }
                    }}
                >
                    View all plans
                </Button>
            </Grid>
            <Box
                zIndex={9}
                sx={{
                    top: 20,
                    height: 300,
                    width: '100%',
                    borderBottom: 1,
                    overflow: 'hidden',
                    position: 'absolute',
                    borderColor: grey[200],
                    backgroundImage: `
                        repeating-linear-gradient(
                            45deg,
                            ${grey[100]} 0,
                            ${grey[300]} 2px,
                            transparent 2px,
                            transparent 20px
                        )
                    `
                }}
            >
                <Box
                    sx={{
                        width: '50%',
                        height: '100%',
                        zIndex: 998,
                        position: 'absolute',
                        background: 'linear-gradient(to bottom right, #fff 10%, transparent, #fff 80%)'
                    }}
                />
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        zIndex: 998,
                        position: 'absolute',
                        background: 'linear-gradient(to bottom left, #fff 20%, transparent, #fff 80%)'
                    }}
                />
                <Box
                    sx={{
                        left: '40%',
                        width: 300,
                        zIndex: 998,
                        bottom: -30,
                        height: 200,
                        opacity: 0.3,
                        position: 'absolute',
                        filter: "blur(25px)",
                        borderTopLeftRadius: 200,
                        borderTopRightRadius: 200,
                        transform: "rotate(180deg)",
                        background: `radial-gradient(circle at center, ${lightBrand}, ${darkBrand}, transparent 70%)`
                    }}
                />
            </Box>
        </Grid>
    );
};

export default Plans;
