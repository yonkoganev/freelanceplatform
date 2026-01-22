import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import { darkBrand, lightBrand } from "@/theme/colors";
import { Box, Button, Grid, Typography } from "@mui/material";
import { green, grey, orange, red } from "@mui/material/colors";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Link from "next/link";

const basicplan = [
  { checked: true, feature: 'Up to 2 active job postings' },
  { checked: true, feature: 'Receive up to 10 applications per job' },
  { checked: true, feature: 'Basic search filters (by skills & location)' },
  { checked: true, feature: 'Standard candidate messaging' },
  { checked: true, feature: 'Save favorite freelancers' },
  { checked: true, feature: 'Standard support' },
  { checked: false, feature: 'Featured job placement (top of listings)' },
  { checked: false, feature: 'Direct freelancer invites' },
  { checked: false, feature: 'Applicant analytics or insights' },
  { checked: false, feature: 'Team collaboration tools' },
  { checked: false, feature: 'Verified Business badge' }
];

const plusplan = [
  { checked: true, feature: 'Unlimited job postings' }, // upgrade from 2
  { checked: true, feature: 'Receive unlimited applications per job' }, // upgrade from 10
  { checked: true, feature: 'Advanced search & filtering tools' }, // upgrade from basic filters
  { checked: true, feature: 'Priority candidate messaging' }, // upgrade from standard messaging
  { checked: true, feature: 'Save and shortlist freelancers' }, // upgrade from save favorites
  { checked: true, feature: 'Priority customer support' }, // upgrade from standard support
  { checked: true, feature: 'Featured job placement (top of listings)' }, // upgrade from none
  { checked: true, feature: 'Direct freelancer invites (contact top talent directly)' }, // upgrade from none
  { checked: true, feature: 'Applicant analytics (views, response rates)' }, // upgrade from none
  { checked: true, feature: 'Team collaboration (multiple hiring managers)' }, // upgrade from none
  { checked: true, feature: 'Verified Business badge' } // upgrade from none
];

const BusinessPricing = () => {
    const [selected, setSelected] = useState()
    return(
        <Grid container width="100%" display="flex" justifyContent="center" mb={10} position="relative" mt={20}>
            <Grid size={{ lg: 9, md: 9, sm: 12, xs: 12 }} px={2} zIndex={998}>
                <Typography color={grey[900]} fontSize={36} fontWeight={500} letterSpacing="-1px" zIndex={998}>Pricing plans for every business</Typography>
                <Grid container width="100%" mt={1} mb={5}>
                    <Typography color={grey[700]} fontSize={18} fontWeight={500} zIndex={998}>
                        Job seeker?
                    </Typography>
                    <Link href="/pricing/freelancer">
                        <Typography color={darkBrand} fontSize={18} zIndex={998} sx={{ textDecoration: 'underline' }} ml={0.5}>
                            Join as a freelancer
                        </Typography>
                    </Link>
                </Grid>
                <Grid container width="100%" display="flex" justifyContent="center" gap={2} mt={5} zIndex={998}>
                    {/* Basic Plan */}
                    <Box
                        sx={{
                            pb: 4,
                            px: 4,
                            pt: 4.4,
                            border: 1,
                            width: '35%',
                            borderRadius: 5,
                            overflow: 'hidden',
                            background: '#fff',
                            position: 'relative',
                            borderColor: grey[300]
                        }}
                    >
                        {/* Description */}
                        <Grid container width="100%" direction="column">
                            <Typography color={grey[900]} fontSize={18} fontWeight={600}>
                                Basic
                            </Typography>
                            <Typography color={grey[700]} fontSize={14}>
                                For starting out
                            </Typography>
                            <Typography color={grey[800]} fontSize={16} mt={2} fontWeight={600}>
                                Free
                            </Typography>
                        </Grid>
                        <Button
                            fullWidth
                            sx={{
                                mt: 2,
                                border: 2,
                                fontWeight: 600,
                                borderRadius: 50,
                                color: darkBrand,
                                textTransform: 'none',
                                borderColor: darkBrand,
                            }}
                        >
                            Get started for free
                        </Button>
                        <Typography color={grey[900]} fontSize={16} mt={3} fontWeight={600} borderTop={1} borderColor={grey[400]} pt={3}>
                            Basic plan includes:
                        </Typography>
                        <Grid container width="100%">
                            {basicplan.map((feature, id) => (
                                <Grid container key={id} gap={1} display="flex" alignItems="center" mt={3} width="100%">
                                    {feature.checked === true ? <CheckIcon style={{ color: green[600], fontSize: 20 }} /> : <CloseRoundedIcon style={{ color: red[600], fontSize:20 }} />}
                                    <Typography color={grey[900]} fontSize={14}>
                                        {feature.feature}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    {/* Plus Plan */}
                    <Box
                        sx={{
                            p: 0.5,
                            width: '35%',
                            display: 'flex',
                            borderRadius: 6,
                            overflow: 'hidden',
                            position: 'relative',
                            alignItems: 'center',
                            justifyContent: 'center',
                            ':hover': { transform: 'scale(1.01)' },
                            transition: 'transform 0.2s ease-in-out',
                            boxShadow: `0px 0px 40px ${orange[100]}`,
                            background: `linear-gradient(to bottom, ${orange[800]}, ${orange[100]})`
                        }}
                    >
                        <Box
                            sx={{
                                p: 4,
                                width: '100%',
                                height: '100%',
                                borderRadius: 5,
                                overflow: 'hidden',
                                background: '#fff',
                                position: 'relative'
                            }}
                        >
                            {/* Description */}
                            <Grid container direction="column">
                                <Typography color={grey[900]} fontSize={18} fontWeight={600}>
                                    Business Plus
                                </Typography>
                                <Typography color={grey[700]} fontSize={14}>
                                    For growing
                                </Typography>
                                <Typography color={grey[800]} fontSize={16} mt={2} fontWeight={600}>
                                    $19.99 / month or $179.99 yearly
                                </Typography>
                            </Grid>
                            <Button
                                fullWidth
                                sx={{
                                    mt: 2,
                                    border: 2,
                                    fontWeight: 600,
                                    color: grey[50],
                                    borderRadius: 50,
                                    borderColor: darkBrand,
                                    textTransform: 'none',
                                    background: darkBrand,
                                    transition: 'transform 0.2s ease-in-out',
                                    ':hover':  { transform: 'scale(1.03)' }
                                }}
                            >
                                Start with this plan
                            </Button>
                            <Typography color={grey[900]} fontSize={16} mt={3} fontWeight={600} borderTop={1} borderColor={grey[400]} pt={3}>
                                Plus plan includes:
                            </Typography>
                            <Grid container width="100%">
                                {plusplan.map((feature, id) => (
                                    <Grid container key={id} gap={1} display="flex" alignItems="center" mt={3} width="100%">
                                        {feature.checked === true ? <CheckIcon style={{ color: green[600], fontSize: 20 }} /> : <CloseRoundedIcon style={{ color: red[600], fontSize:20 }} />}
                                        <Typography color={grey[900]} fontSize={14}>
                                            {feature.feature}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                        <Box
                            sx={{
                                top: 3,
                                py: 1,
                                px: 2,
                                right: 3,
                                position: 'absolute',
                                background: darkBrand,
                                borderBottomLeftRadius: 15
                            }}
                        >
                            <Typography color={lightBrand} fontSize={12}>POPULAR</Typography>
                        </Box>
                    </Box>
                </Grid>
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

export default BusinessPricing;
