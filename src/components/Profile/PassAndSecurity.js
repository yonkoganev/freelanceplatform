import { useRouter } from "next/router";
import { green, grey } from "@mui/material/colors";
import { Button, Grid, Link, Typography } from "@mui/material";
import { darkBrand } from "@/theme/colors";

const settingsbuttons = [
    { title: 'My Info', active: false, link: '/profile/myinfo' },
    //{ title: 'Team & Members', active: false, link: '/profile/teamandmembers' },
    { title: 'Membership', active: false, link: '/profile/membership' },
    { title: 'Password & Security', active: true, link: '/profile/security' }
];

const PassAndSecurity = () => {
    const router = useRouter()
    return(
        <Grid container width="100%" my={10} display="flex" justifyContent="center">
            <Grid size={{ lg: 9.2, md: 9.2, sm: 12, xs: 12 }} display="flex" justifyContent="space-between" alignItems="flex-start">
                <Grid size={{ lg: 3, md: 3, xs: 12, sm: 12 }}>
                    <Typography color={grey[900]} fontSize={40} fontWeight={600}>Settings</Typography>
                    <Grid container direction="column" mt={3}>
                        {settingsbuttons.map((button, id) => (
                            <Button
                                TouchRippleProps={{ style: { color: "transparent" } }}
                                onClick={() => router.push(button.link)}
                                key={id}
                                sx={{
                                    pl: 2,
                                    fontSize: 16,
                                    display: 'flex',
                                    borderRadius: 0,
                                    color: grey[900],
                                    textTransform: 'none',
                                    justifyContent: 'left',
                                    background: 'transparent',
                                    ml: button.active ? -0.15 : 0,
                                    borderLeft: button.active ? 3 : 1,
                                    borderColor: button.active ? darkBrand : grey[300],
                                    ':hover': { background: 'transparent' }
                                }}
                            >
                                {button.title}
                            </Button>
                        ))}
                    </Grid>
                </Grid>
                <Grid size={{ lg: 9, md: 9, xs: 12, sm: 12 }} direction="column">
                    <Typography color={grey[900]} fontSize={32} fontWeight={600}>Password & Security</Typography>
                    <Typography mt={3} color={grey[800]} fontSize={26} fontWeight={600}>Login</Typography>
                    {/* Password */}
                    <Grid container width="100%" display="flex" justifyContent="space-between" alignItems="center" borderBottom={1} borderColor={grey[300]} p={2} mt={2}>
                        <Grid size={{ lg: 8, md: 8, sm: 12, xs: 12 }} direction="column">
                            <Typography color={grey[900]} fontSize={22} fontWeight={600}>
                                uLance password
                            </Typography>
                            <Typography color={grey[900]} fontSize={16} mt={1}>
                                Change or reset your uLance password
                            </Typography>
                        </Grid>
                        <Grid size={{ lg: 3, md: 3, sm: 12, xs: 12 }} direction="column">
                            <Button
                                fullWidth
                                sx={{
                                    fontSize: 16,
                                    color: grey[50],
                                    borderRadius: 2,
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    background: darkBrand,
                                    transition: 'transform 0.2s ease-in-out',
                                    ':hover': { transform: 'scale(1.03)' }
                                }}
                            >
                                Change password
                            </Button>
                        </Grid>
                    </Grid>
                    {/* Email */}
                    <Grid container width="100%" display="flex" justifyContent="space-between" alignItems="center" borderBottom={1} borderColor={grey[300]} pb={2} px={2} mt={2}>
                        <Grid size={{ lg: 8, md: 8, sm: 12, xs: 12 }} direction="column">
                            <Typography color={grey[900]} fontSize={22} fontWeight={600}>
                                uLance email
                            </Typography>
                            <Typography color={grey[900]} fontSize={16} mt={1}>
                                Change your uLance email
                            </Typography>
                        </Grid>
                        <Grid size={{ lg: 3, md: 3, sm: 12, xs: 12 }} direction="column">
                            <Button
                                fullWidth
                                sx={{
                                    fontSize: 16,
                                    color: grey[50],
                                    borderRadius: 2,
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    background: darkBrand,
                                    transition: 'transform 0.2s ease-in-out',
                                    ':hover': { transform: 'scale(1.03)' }
                                }}
                            >
                                Change email
                            </Button>
                        </Grid>
                    </Grid>
                    <Typography mt={5} color={grey[800]} fontSize={26} fontWeight={600}>Two-step verification</Typography>
                    {/* Authenticator */}
                    <Grid container width="100%" display="flex" justifyContent="space-between" alignItems="center" borderBottom={1} borderColor={grey[300]} p={2} mt={2}>
                        <Grid size={{ lg: 8, md: 8, sm: 12, xs: 12 }} direction="column">
                            <Typography color={grey[900]} fontSize={22} fontWeight={600}>
                                Authenticator app
                            </Typography>
                            <Typography color={grey[900]} fontSize={16} mt={1}>
                                Verify one-time codes generated in your preferred third party authenticator app.
                            </Typography>
                        </Grid>
                        <Grid size={{ lg: 3, md: 3, sm: 12, xs: 12 }} direction="column">
                            <Button
                                fullWidth
                                sx={{
                                    fontSize: 16,
                                    color: grey[50],
                                    borderRadius: 2,
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    background: darkBrand,
                                    transition: 'transform 0.2s ease-in-out',
                                    ':hover': { transform: 'scale(1.03)' }
                                }}
                            >
                                Enable
                            </Button>
                        </Grid>
                    </Grid>
                    {/* Security Question and Answer */}
                    <Grid container width="100%" display="flex" justifyContent="space-between" alignItems="center" borderBottom={1} borderColor={grey[300]} p={2} mt={2}>
                        <Grid size={{ lg: 8, md: 8, sm: 12, xs: 12 }} direction="column">
                            <Typography color={grey[900]} fontSize={22} fontWeight={600}>
                                Security question and answer
                            </Typography>
                            <Typography color={grey[900]} fontSize={16} mt={1}>
                                Set up a question to answer when you can`t use your authenticator for two-step verification.
                                <Link sx={{ ml: 0.5, textDecoration: 'underline', color: darkBrand, fontWeight: 600 }}>
                                    Set question and answer
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PassAndSecurity;
