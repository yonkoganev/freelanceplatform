import { darkBrand } from "@/theme/colors";
import { Button, Grid, Link, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import { useRouter } from "next/router";

const settingsbuttons = [
    { title: 'My Info', active: false, link: '/profile/myinfo' },
    //{ title: 'Team & Members', active: false, link: '/profile/teamandmembers' },
    { title: 'Membership', active: true, link: '/profile/membership' },
    { title: 'Password & Security', active: false, link: '/profile/security' }
];

const MembershipInfo = () => {
    const router = useRouter();
    return(
        <Grid container width="100%" my={10} display="flex" justifyContent="center" mb={20}>
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
                    <Typography color={grey[900]} fontSize={32} fontWeight={600}>Membership Settings</Typography>
                    <Grid container width="100%" p={3} borderRadius={2} bgcolor={grey[100]} display="flex" justifyContent="space-between" mt={4}>
                        <Grid size={{ lg: 7, md: 7, sm: 12, xs: 12 }} direction="column">
                            <Typography color={grey[900]} fontSize={12}>
                                CURRENT PLAN
                            </Typography>
                            <Typography color={grey[900]} fontSize={26} fontWeight={600}>
                                Basic
                            </Typography>
                            <Typography color={grey[900]} fontSize={14} mt={1}>
                                Plan start date: 11/2/2025 <Link href="/plans" style={{ color: darkBrand, fontSize: 14, fontWeight: 600, textDecoration: 'underline', marginLeft: 2 }}>See your plans benefits</Link>
                            </Typography>
                        </Grid>
                        <Grid size={{ lg: 3, md: 3, sm: 12, xs: 12 }} direction="column">
                            <Button
                                fullWidth
                                sx={{
                                    fontWeight: 600,
                                    color: grey[50],
                                    borderRadius: 2,
                                    textTransform: 'none',
                                    background: darkBrand,
                                    transition: 'transform 0.2s ease-in-out',
                                    ':hover': { transform: 'scale(1.03)' }
                                }}
                            >
                                Upgrade membership
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MembershipInfo;
