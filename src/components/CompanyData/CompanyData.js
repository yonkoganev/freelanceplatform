import { useState } from 'react';
import { useRouter } from 'next/router';
import WorkIcon from '@mui/icons-material/Work';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { blue, green, grey, orange, purple } from "@mui/material/colors";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Avatar, Box, Button, Chip, CircularProgress, Grid, IconButton, Typography } from "@mui/material";

const skills = ['Python', 'REST API', 'Django', 'Flask', 'FastAPI', 'Docket', 'Kubernetes', 'DevOps', 'CI/CD', 'AWS', 'PostgreSQL', 'React', 'MySQL']

const CompanyData = () => {
    const router = useRouter();
    const { id } = router.query; // 👈 this gives you the dynamic id
    const [expanded, setExpanded] = useState(false);
    return(
        <Grid
            container
            sx={{
                pt: 5,
                my: 20,
                border: 1,
                width: '100%',
                borderRadius: 2,
                display: 'flex',
                borderColor: grey[300]
            }}
        >
            {/* Header */}
            <Grid container width="100%" display="flex" alignItems="center" position="relative" justifyContent="space-between" px={4}>
                <Grid container display="flex" alignItems="center">
                    <Avatar sx={{ width: 65, height: 65 }} />
                    <Grid container direction="column" ml={2}>
                        <Typography color={grey[900]} fontSize={28} fontWeight={600}>MyCompany Ltd.</Typography>
                        <Grid container alignItems="center" display="flex">
                            <LocationOnOutlinedIcon style={{ color: grey[600] }} />
                            <Typography color={grey[600]} fontSize={16}>Sofia, Bulgaria - 19:56 local time</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container gap={2}>
                    <IconButton
                        sx={{
                            border: 2,
                            width: 40,
                            height: 40,
                            borderColor: orange[800]
                        }}
                    >
                        <FavoriteBorderIcon style={{ color: orange[800] }} />
                    </IconButton>
                    <Button
                        sx={{
                            px: 3,
                            height: 40,
                            fontWeight: 600,
                            color: grey[50],
                            borderRadius: 2,
                            textTransform: 'none',
                            background: orange[800]
                        }}
                    >
                        Apply for a job
                    </Button>
                </Grid>
            </Grid>
            <Grid container width="100%" mt={3} px={4} display="flex" alignItems="center" gap={5} borderBottom={1} borderColor={grey[300]} pb={5}>
                <Grid container display="flex" alignItems="center" gap={1}>
                    <Box position="relative" display="flex" justifyContent="center" alignItems="center">
                        <CircularProgress enableTrackSlot variant="determinate" value={87} sx={{ color: blue[400] }} />
                        <WorkIcon style={{ position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%', color: blue[400], fontSize: 15 }} />
                    </Box>
                    <Typography color={grey[800]} fontSize={18} fontWeight={600}>
                        40+ hired people
                    </Typography>
                </Grid>
                <Typography color={grey[800]} fontSize={18} fontWeight={600}>
                    $8K+ paid
                </Typography>
                <Box
                    sx={{
                        pr: 2,
                        pl: 1,
                        py: 0.5,
                        display: 'flex',
                        borderRadius: 50,
                        alignItems: 'center',
                        flexDirection: 'row',
                        background: '#fef8ffff'
                    }}
                >
                    <BoltOutlinedIcon style={{ color: purple[400], fontSize: 20 }} />
                    <Typography color={purple[400]} fontSize={12} fontWeight={600}>Looking for a talent</Typography>
                </Box>
            </Grid>
            {/* Profile Left Part - Data */}
            <Grid size={{ lg: 3.5, md: 3.5, sm: 12, xs: 12 }} borderRight={1} direction="column" borderColor={grey[300]} overflow="hidden">
                <Grid container width="100%" direction="column" borderBottom={1} borderColor={grey[300]} p={3}>
                    <Typography color={grey[900]} fontSize={18} fontWeight={600}>Company Info</Typography>
                    <Typography color={grey[700]} fontSize={14} mt={2}>Name</Typography>
                    <Typography color={grey[900]} fontSize={16}>MyCompany Ltd</Typography>
                    <Typography color={grey[700]} fontSize={14} mt={1}>Established</Typography>
                    <Typography color={grey[900]} fontSize={16}>March 2019</Typography>
                    <Typography color={grey[700]} fontSize={14} mt={1}>Joined</Typography>
                    <Typography color={grey[900]} fontSize={16}>Feb 2025</Typography>
                </Grid>
                {/* Stats */}
                <Grid container width="100%" display="flex" justifyContent="space-between" p={3} borderBottom={1} borderColor={grey[300]}>
                    <Grid container direction="column">
                        <Typography color={grey[900]} fontSize={18} fontWeight={600}>$8K+</Typography>
                        <Typography color={grey[700]} fontSize={14}>Total paid</Typography>
                    </Grid>
                    <Grid container direction="column">
                        <Typography color={grey[900]} fontSize={18} fontWeight={600}>40+</Typography>
                        <Typography color={grey[700]} fontSize={14}>People hired</Typography>
                    </Grid>
                    <Grid container direction="column">
                        <Typography color={grey[900]} fontSize={18} fontWeight={600}>24</Typography>
                        <Typography color={grey[700]} fontSize={14}>Feedback</Typography>
                    </Grid>
                </Grid>
                <Grid container width="100%" direction="column" p={3} gap={1}>
                    <Typography color={grey[900]} fontSize={18} fontWeight={600}>Meet MyCompany Ltd.</Typography>
                    <Typography color={grey[900]} fontSize={16} mt={2} fontWeight={600}>Industry:</Typography>
                    <Chip label="Software Development" sx={{ fontWeight: 600, backgroundColor: orange[50], color: orange[800] }} />
                    <Chip label="AI" sx={{ fontWeight: 600, backgroundColor: orange[50], color: orange[800] }} />
                    <Chip label="Digital Marketing" sx={{ fontWeight: 600, backgroundColor: orange[50], color: orange[800] }} />
                </Grid>
            </Grid>
            {/* Right Part */}
            <Grid size={{ lg: 8.5, md: 8.5, sm: 12, xs: 12 }} direction="column">
                {/* Title & Description */}
                <Grid container direction="column" width="100%" px={4} py={3} borderBottom={1} borderColor={grey[300]} alignItems="start">
                    <Typography color={grey[900]} fontSize={20} fontWeight={600}>
                        MyCompany Ltd - Digital Marketing Company
                    </Typography>
                    <Typography
                        sx={{
                            mt: 5,
                            color: grey[900],
                            overflow: "hidden",
                            whiteSpace: "pre-line",
                            display: "-webkit-box",
                            textOverflow: "ellipsis",
                            WebkitBoxOrient: "vertical",
                            transition: "all 0.3s ease",
                            WebkitLineClamp: expanded ? "unset" : 6,
                        }}
                    >
                        {`MyCompany Ltd is a results-driven digital marketing agency specializing in helping businesses unlock their full potential online. Our team of strategists, designers, and marketers combines creativity with data-backed insights to craft campaigns that inspire action and deliver measurable success.

                        We believe that great marketing is more than just visibility — it’s about building meaningful connections. From social media storytelling and SEO optimization to performance advertising and brand identity design, we create tailored solutions that reflect your vision and resonate with your audience.

                        At MyCompany Ltd, innovation is at the heart of everything we do. We stay ahead of digital trends, harnessing the latest tools and technologies to ensure your brand stands out in an ever-changing marketplace. Our holistic approach integrates strategy, creativity, and analytics to drive sustainable growth and long-term engagement.

                        Whether you’re a startup seeking traction or an established enterprise looking to expand your digital reach, MyCompany Ltd is your trusted partner for success in the digital era.`}
                    </Typography>
                    <Button
                        disableRipple
                        onClick={() => setExpanded(!expanded)}
                        sx={{
                            px: 0,
                            display: 'flex',
                            color: orange[800],
                            textTransform: "none",
                            justifyContent: 'left',
                            textDecoration: 'underline',
                            ':hover': { background: 'transparent' }
                        }}
                    >
                        {expanded ? "Less" : "More"}
                    </Button>
                </Grid>
                {/* Skills */}
                <Grid container direction="column" width="100%" px={4} py={3} alignItems="start">
                    <Typography color={grey[900]} fontSize={20} fontWeight={600}>
                        Required Skills
                    </Typography>
                    <Grid container width="100%" mt={2} gap={2}>
                        {skills.map((skill, id) => (
                            <Chip key={id} label={skill} size="small" sx={{ px: 1, fontWeight: 600, fontSize: 12, color: orange[800], backgroundColor: orange[50] }} />
                        ))}
                    </Grid>
                </Grid>
                {/* Feedback */}
                <Grid container direction="column" width="100%" px={4} py={3} alignItems="start">
                    <Typography color={grey[900]} fontSize={20} fontWeight={600}>
                        Feedback(3)
                    </Typography>
                    <Grid container width="100%" mt={2} gap={2}>
                        <Box
                            sx={{
                                border: 1,
                                flexGrow: 1,
                                width: '30%',
                                borderRadius: 1,
                                borderColor: grey[300]
                            }}
                        >
                            <Grid container width="100%" gap={2} display="flex" alignItems="center" justifyContent="space-between" borderBottom={1} borderColor={grey[300]} px={2} py={1}>
                                <Grid container display="flex" alignItems="center" gap={2}>
                                    <Avatar sx={{ height: 30, width: 30 }} />
                                    <Grid container direction="column">
                                        <Typography color={grey[900]} fontSize={16} fontWeight={600}>
                                            Ivan Ivanov
                                        </Typography>
                                        <Typography color={grey[700]} fontSize={12} mt={-0.5}>
                                            Freelancer
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <ThumbUpRoundedIcon style={{ color: green[300] }} />
                            </Grid>
                            <Typography color={grey[900]} fontSize={14} px={2} pt={1}>
                                Really satisfied with how the company works and handle different situations. It was a pleasure working together.
                            </Typography>
                            {Array.from({ length: 5 }).map((_, id) => (
                                <StarRateRoundedIcon key={id} sx={{ color: orange[800], ml: id === 0 ? 2 : 0.5, my: 1 }} />
                            ))}
                        </Box>
                        <Box
                            sx={{
                                border: 1,
                                flexGrow: 1,
                                width: '30%',
                                borderRadius: 1,
                                borderColor: grey[300]
                            }}
                        >
                            <Grid container width="100%" gap={2} display="flex" alignItems="center" justifyContent="space-between" borderBottom={1} borderColor={grey[300]} px={2} py={1}>
                                <Grid container display="flex" alignItems="center" gap={2}>
                                    <Avatar sx={{ height: 30, width: 30 }} />
                                    <Grid container direction="column">
                                        <Typography color={grey[900]} fontSize={16} fontWeight={600}>
                                            Georgi Petrov
                                        </Typography>
                                        <Typography color={grey[700]} fontSize={12} mt={-0.5}>
                                            Freelancer
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <ThumbUpRoundedIcon style={{ color: green[300] }} />
                            </Grid>
                            <Typography color={grey[900]} fontSize={14} px={2} pt={1}>
                                Really satisfied with how the company works and handle different situations. It was a pleasure working together.
                            </Typography>
                            {Array.from({ length: 5 }).map((_, id) => (
                                <StarRateRoundedIcon key={id} sx={{ color: orange[800], ml: id === 0 ? 2 : 0.5, my: 1 }} />
                            ))}
                        </Box>
                        <Box
                            sx={{
                                border: 1,
                                flexGrow: 1,
                                width: '30%',
                                borderRadius: 1,
                                borderColor: grey[300]
                            }}
                        >
                            <Grid container width="100%" gap={2} display="flex" alignItems="center" justifyContent="space-between" borderBottom={1} borderColor={grey[300]} px={2} py={1}>
                                <Grid container display="flex" alignItems="center" gap={2}>
                                    <Avatar sx={{ height: 30, width: 30 }} />
                                    <Grid container direction="column">
                                        <Typography color={grey[900]} fontSize={16} fontWeight={600}>
                                            Ivana Ivanova
                                        </Typography>
                                        <Typography color={grey[700]} fontSize={12} mt={-0.5}>
                                            Freelancer
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <ThumbUpRoundedIcon style={{ color: green[300] }} />
                            </Grid>
                            <Typography color={grey[900]} fontSize={14} px={2} pt={1}>
                                Really satisfied with how the company works and handle different situations. It was a pleasure working together.
                            </Typography>
                            {Array.from({ length: 5 }).map((_, id) => (
                                <StarRateRoundedIcon key={id} sx={{ color: orange[800], ml: id === 0 ? 2 : 0.5, my: 1 }} />
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CompanyData;
