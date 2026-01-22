import { grey } from "@mui/material/colors";
import { Box, Grid, Typography } from "@mui/material";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

const Requirements = () => {
    return(
        <Grid container width="100%" direction="column" mt={5}>
            <Typography color={grey[900]} fontSize={20} fontWeight={600}>
                Good afternoon, MyCompany
            </Typography>
            <Typography color={grey[900]} fontSize={24} fontWeight={600} mt={2}>
                Last steps before you can hire
            </Typography>
            <Grid container width="100%">
                <Box
                    sx={{
                        px: 3,
                        py: 2,
                        mt: 4,
                        border: 1,
                        width: '30%',
                        borderRadius: 2,
                        borderColor: grey[300]
                    }}
                >
                    <Grid container display="flex" justifyContent="space-between" alignItems="center">
                        <Grid container direction="column">
                            <Typography color={grey[900]} fontSize={14}>
                                Required to publish a job
                            </Typography>
                            <Typography color={grey[900]} fontSize={18} fontWeight={600} sx={{ textDecoration: 'underline' }}>
                                Verify your email address
                            </Typography>
                        </Grid>
                        <MailOutlineRoundedIcon sx={{ color: grey[900], fontSize: 50 }} />
                    </Grid>
                    <Typography color={grey[900]} fontSize={16} mt={1}>
                        Confirm it&apos;s your email address, to be able to publish a job post.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Requirements;
