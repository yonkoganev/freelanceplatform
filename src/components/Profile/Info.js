import { Avatar, Button, Grid, IconButton, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from "next/router";
import { darkBrand } from "@/theme/colors";

const settingsbuttons = [
    { title: 'My Info', active: true, link: '/profile/myinfo' },
    //{ title: 'Team & Members', active: false, link: '/profile/teamandmembers' },
    { title: 'Membership', active: false, link: '/profile/membership' },
    { title: 'Password & Security', active: false, link: '/profile/security' }
];

const Info = () => {
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
                    <Typography color={grey[900]} fontSize={32} fontWeight={600}>My Info</Typography>
                    <Typography color={grey[900]} fontSize={18}>This is a business account</Typography>
                    {/* Account Info */}
                    <Grid container width="100%" border={1} borderRadius={2} p={5} borderColor={grey[300]} mt={3}>
                        <Grid width="100%" display="flex" justifyContent="space-between">
                            <Typography color={grey[900]} fontWeight={600} fontSize={18}>Account</Typography>
                            <IconButton sx={{ border: 2, p: 1, borderColor: darkBrand }}>
                                <EditIcon style={{ fontSize: 16, color: darkBrand }} />
                            </IconButton>
                        </Grid>
                        <Grid width="100%" display="flex" justifyContent="space-between" gap={5} alignItems="center" mt={3}>
                            <Grid container>
                                <Avatar sx={{ height: 80, width: 80 }} />
                            </Grid>
                            <Grid container direction="row" flexGrow={1} gap={5}>
                                <Grid container direction="column" flexGrow={1}>
                                    <Typography color={grey[700]} fontSize={14}>First Name</Typography>
                                    <Typography color={grey[900]} fontWeight={600} fontSize={16}>Yonko</Typography>
                                </Grid>
                                <Grid container direction="column" flexGrow={1}>
                                    <Typography color={grey[700]} fontSize={14}>Last Name</Typography>
                                    <Typography color={grey[900]} fontWeight={600} fontSize={16}>Ganev</Typography>
                                </Grid>
                                <Grid container direction="column" flexGrow={1}>
                                    <Typography color={grey[700]} fontSize={14}>Email</Typography>
                                    <Typography color={grey[900]} fontWeight={600} fontSize={16}>yonkog@icloud.com</Typography>
                                </Grid>
                                <Grid container direction="column" flexGrow={1}>
                                    <Typography color={grey[700]} fontSize={14}>Phone Number</Typography>
                                    <Typography color={grey[900]} fontWeight={600} fontSize={16}>+359 897 619 973</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Company Info */}
                    <Grid container width="100%" border={1} borderRadius={2} p={5} borderColor={grey[300]} mt={3}>
                        <Grid width="100%" display="flex" justifyContent="space-between">
                            <Typography color={grey[900]} fontWeight={600} fontSize={18}>Company Details</Typography>
                            <IconButton sx={{ border: 2, p: 1, borderColor: darkBrand }}>
                                <EditIcon style={{ fontSize: 16, color: darkBrand }} />
                            </IconButton>
                        </Grid>
                        <Grid width="100%" direction="column" mt={3}>
                            <Grid container direction="row" flexGrow={1} gap={5} alignItems="center" width="100%">
                                <Grid container flexGrow={1}>
                                    <Avatar sx={{ height: 80, width: 80 }} />
                                </Grid>
                                <Grid container direction="column" flexGrow={1}>
                                    <Typography color={grey[700]} fontSize={14}>Company Name</Typography>
                                    <Typography color={grey[900]} fontWeight={600} fontSize={16}>MyCompany Ltd.</Typography>
                                </Grid>
                                <Grid container direction="column" flexGrow={1}>
                                    <Typography color={grey[700]} fontSize={14}>Location</Typography>
                                    <Typography color={grey[900]} fontWeight={600} fontSize={16}>Sofia, Bulgaria</Typography>
                                </Grid>
                                <Grid container direction="column" flexGrow={1}>
                                    <Typography color={grey[700]} fontSize={14}>Email</Typography>
                                    <Typography color={grey[900]} fontWeight={600} fontSize={16}>companyemail@email.com</Typography>
                                </Grid>
                            </Grid>
                            <Grid container width="100%" mt={2} direction="column" gap={2}>
                                <Typography color={grey[700]} fontSize={14}>Description</Typography>
                                <Typography color={grey[900]} fontSize={18}>
                                    You can include key details about your business — what you do, who you serve, and what
                                    makes your company unique. This helps clients understand your services at a glance.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Company Contacts */}
                    <Grid container width="100%" border={1} borderRadius={2} p={5} borderColor={grey[300]} mt={3}>
                        <Grid width="100%" display="flex" justifyContent="space-between">
                            <Typography color={grey[900]} fontWeight={600} fontSize={18}>Company Contacts</Typography>
                            <IconButton sx={{ border: 2, p: 1, borderColor: darkBrand }}>
                                <EditIcon style={{ fontSize: 16, color: darkBrand }} />
                            </IconButton>
                        </Grid>
                        <Grid width="100%" display="flex" justifyContent="space-between" gap={5} alignItems="center" mt={3}>
                            <Grid container direction="row" flexGrow={1} gap={5}>
                                <Grid container direction="column" flexGrow={1}>
                                    <Typography color={grey[700]} fontSize={14}>Phone Number</Typography>
                                    <Typography color={grey[900]} fontWeight={600} fontSize={16}>+359 898 123 456</Typography>
                                </Grid>
                                <Grid container direction="column" flexGrow={1}>
                                    <Typography color={grey[700]} fontSize={14}>Location</Typography>
                                    <Typography color={grey[900]} fontWeight={600} fontSize={16}>Sofia, Bulgaria</Typography>
                                </Grid>
                                <Grid container direction="column" flexGrow={1}>
                                    <Typography color={grey[700]} fontSize={14}>Email</Typography>
                                    <Typography color={grey[900]} fontWeight={600} fontSize={16}>companyemail@email.com</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Info;
