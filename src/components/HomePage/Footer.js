import { Button, Grid, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';

const clientsmenu = [
    { title: 'How to hire', url: '' },
    { title: 'Hire in Europe', url: '' },
    { title: 'Hire in USA', url: '' },
    { title: 'Hire worldwide', url: '' },
    { title: 'Contract plans', url: '' },
]

const talentmenu = [
    { title: 'How to find work', url: '' },
    { title: 'Contract plans', url: '' },
    { title: 'Find jobs worldwide', url: '' },
    { title: 'Find jobs in the USA', url: '' },
    { title: 'Find jobs in Europe', url: '' },
]

const resourcesmenu = [
    { title: 'Help & support', url: '' },
    { title: 'Resources', url: '' },
    { title: 'Blog', url: '' },
    { title: 'Reviews & ratings', url: '' }
]

const companymenu = [
    { title: 'About us', url: '' },
    { title: 'Our story', url: '' },
    { title: 'Contact us', url: '' },
    { title: 'Partners', url: '' },
    { title: 'Trust & security', url: '' },
    { title: 'The vision', url: '' },
]

const socials = [
    { icon: <FacebookRoundedIcon style={{ color: grey[50] }} />, url: '' },
    { icon: <XIcon style={{ color: grey[50] }} />, url: '' },
    { icon: <YouTubeIcon style={{ color: grey[50] }} />, url: '' },
    { icon: <LinkedInIcon style={{ color: grey[50] }} />, url: '' },
    { icon: <InstagramIcon style={{ color: grey[50] }} />, url: '' }
]

const Footer = () => {
    return(
        <Grid container width="100%" justifyContent="center" display="flex" mb={5} zIndex={999}>
            <Grid
                size={{ lg: 11, md: 7.2, sm: 10, xs: 12 }}
                sx={{
                    px: 12,
                    py: 8,
                    gap: 2,
                    zIndex: 999,
                    display: 'flex',
                    borderRadius: 3,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: `linear-gradient(to right bottom, ${grey[900]} 30%, #000)`,
                }}
            >
                <Grid container width="100%">
                    <Grid size={{ lg: 2.8, md: 2.8, sm: 11, xs: 11 }}>
                        <Typography color={grey[400]} fontSize={14} mb={2}>For Clients</Typography>
                        {clientsmenu.map((item, id) => (
                            <Typography
                                key={id}
                                sx={{
                                    mt: 1,
                                    fontSize: 14,
                                    color: grey[50],
                                    ':hover': { textDecoration: 'underline', cursor: 'pointer' }
                                }}
                            >
                                {item.title}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid size={{ lg: 2.8, md: 2.8, sm: 11, xs: 11 }}>
                        <Typography color={grey[400]} fontSize={14} mb={2}>For Talent</Typography>
                        {talentmenu.map((item, id) => (
                            <Typography
                                key={id}
                                sx={{
                                    mt: 1,
                                    fontSize: 14,
                                    color: grey[50],
                                    ':hover': { textDecoration: 'underline', cursor: 'pointer' }
                                }}
                            >
                                {item.title}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid size={{ lg: 2.8, md: 2.8, sm: 11, xs: 11 }} display="flex" flexDirection="column">
                        <Typography color={grey[400]} fontSize={14} mb={2}>Resources</Typography>
                        {resourcesmenu.map((item, id) => (
                            <Typography
                                key={id}
                                sx={{
                                    mt: 1,
                                    fontSize: 14,
                                    color: grey[50],
                                    ':hover': { textDecoration: 'underline', cursor: 'pointer' }
                                }}
                            >
                                {item.title}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid size={{ lg: 2.8, md: 2.8, sm: 11, xs: 11 }}>
                        <Typography color={grey[400]} fontSize={14} mb={2}>Company</Typography>
                        {companymenu.map((item, id) => (
                            <Typography
                                key={id}
                                sx={{
                                    mt: 1,
                                    fontSize: 14,
                                    color: grey[50],
                                    ':hover': { textDecoration: 'underline', cursor: 'pointer' }
                                }}
                            >
                                {item.title}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
                <Grid container width="100%" mt={2} display="flex" alignItems="center" justifyContent="space-between" borderBottom={1} pb={2} borderColor={grey[800]}>
                    <Grid size={{ lg: 5 }} display="flex" alignItems="center">
                        <Typography fontSize={14} color={grey[400]} mr={2}>Follow us</Typography>
                        {socials.map((item, id) => (
                            <IconButton
                                key={id}
                                sx={{
                                    ml: 1,
                                    ':hover': { background: grey[900] },
                                    ':active': { background: 'transparent' }
                                }}
                            >
                                {item.icon}
                            </IconButton>
                        ))}
                    </Grid>
                    <Grid size={{ lg: 5 }} display="flex" alignItems="center" justifyContent="right">
                        <Typography fontSize={14} color={grey[400]} mr={2}>Mobile app</Typography>
                        <IconButton sx={{ ml: 0, ':hover': { background: grey[900] }, ':active': { background: 'transparent' } }}>
                            <AppleIcon style={{ color: grey[50], fontSize: 20 }} />
                        </IconButton>
                        <IconButton sx={{ ml: 2, ':hover': { background: grey[900] }, ':active': { background: 'transparent' } }}>
                            <AdbIcon style={{ color: grey[50], fontSize: 20 }} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container width="100%" display="flex" alignItems="center" gap={2}>
                    <Typography color={grey[400]} fontSize={14}>@2025 uLance® Global LLC</Typography>
                    <Typography color={grey[50]} sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer', fontSize: 14, ml: 4 }}>
                        Terms of Service
                    </Typography>
                    <Typography color={grey[50]} sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer', fontSize: 14 }}>
                        Privacy Policy
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Footer;
