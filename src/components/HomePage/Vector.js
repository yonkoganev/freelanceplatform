import ArticleIcon from '@mui/icons-material/Article';
import { darkBrand, lightBrand } from "@/theme/colors";
import { green, grey, orange } from "@mui/material/colors";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Avatar, Box, Grid, Typography } from "@mui/material";
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const skills = ["React", "Node.js", "MongoDB", "REST APIs", "Python"];

const Vector = () => {
    return(
        <Grid container width="100%">
            <Box width="100%" px={3} py={5} display="flex" justifyContent="center" alignItems="center" border={1} borderColor={grey[300]} borderRadius={1} flexDirection="column">
                <Grid container width="100%" display="flex" justifyContent="space-evenly">
                    <Avatar style={{ height: 80, width: 80 }} />
                    <Grid container direction="column" width="60%">
                        <Box
                            sx={{
                                px: 4,
                                py: 0.5,
                                display: 'flex',
                                borderRadius: 1,
                                background: grey[200],
                                justifyContent: 'center'
                            }}
                        >
                            <Typography color={grey[900]}>Jane Doe</Typography>
                        </Box>
                        <Grid container mt={0.5}>
                            {skills.map((skill, id) => (
                                <Box
                                    key={id}
                                    sx={{
                                        py: 0.3,
                                        m: 0.3,
                                        fontSize: 10,
                                        width: '25%',
                                        flexGrow: 1,
                                        fontWeight: 600,
                                        display: 'flex',
                                        borderRadius: 1,
                                        color: darkBrand,
                                        alignItems: 'center',
                                        background: lightBrand,
                                        justifyContent: 'center'
                                    }}
                                >
                                    {skill}
                                </Box>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container width="100%" mt={3}>
                    {Array.from({ length: 4 }).map((_, id) => (
                        <Box key={id} sx={{ width: '100%', background: grey[300], height: 5, my: 0.5, borderRadius: 1 }} />
                    ))}
                </Grid>
                <Grid container width="100%" mt={2}>
                    <Box
                        sx={{
                            p: 2,
                            width: '100%',
                            borderRadius: 1,
                            background: orange[50]
                        }}
                    >
                        <Typography color={grey[900]} fontSize={12} fontWeight={600}>
                            Full-stack web developer with a focus on scalable web applications and databases.
                        </Typography>
                    </Box>
                </Grid>
                <Grid container width="100%" mt={2} alignItems="center" display="flex">
                    <ArticleIcon sx={{ color: darkBrand }} /> 
                    <Typography color={grey[900]} fontSize={12} ml={0.5} fontWeight={600}>
                        Portfolio(4)
                    </Typography>
                    <WorkHistoryIcon sx={{ color: darkBrand, ml: 2 }} /> 
                    <Typography color={grey[900]} fontSize={12} ml={0.5} fontWeight={600}>
                        Hired: 17 times
                    </Typography>
                </Grid>
                <Grid container width="100%" mt={2}>
                    {Array.from({ length: 4 }).map((_, id) => (
                        <Box key={id} sx={{ background: grey[300], borderRadius: 1, width: '100%', height: 5, my: 0.5 }} />
                    ))}
                </Grid>
                <Grid container width="100%" mt={2} flexDirection="row" display="flex" alignItems="center">
                    <Typography color={grey[900]} fontSize={12} mt={0.5} mr={1} fontWeight={600}>
                        Rating (4.50/5.00)
                    </Typography>
                    {Array.from({ length: 5 }).map((_, id) => (
                        id === 4 ? <StarHalfRoundedIcon key={id} sx={{ color: green[400] }} /> :
                        <StarRateRoundedIcon key={id} sx={{ color: green[400] }} />
                    ))}
                </Grid>
            </Box>
        </Grid>
    );
};

export default Vector;
