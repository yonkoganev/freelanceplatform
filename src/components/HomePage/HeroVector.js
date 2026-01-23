import { PiCursorFill } from "react-icons/pi";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { blue, cyan, grey, orange, pink, purple, brown, green } from "@mui/material/colors";
import { darkBrand, lightBrand } from "@/theme/colors";
import { useTranslation } from "next-i18next";

const offers = [
  { 
    description: "Python & C++ developer skilled in data analysis and automation.", 
    skills: ["Python Developer", "C++", "Teamwork", "Data Analyst"], 
    avatar: orange[500] 
  },
  { 
    description: "Content creator focused on increasing brand awareness and followers.", 
    skills: ["SEO", "Instagram Ads", "Google Ads", "Flexible"], 
    avatar: blue[500] 
  },
  { 
    description: "Finance analyst experienced in forecasting, budgeting, and investment strategies.", 
    skills: ["Excel", "Financial Modeling", "Budgeting", "Risk Analysis"], 
    avatar: green[500] 
  },
  { 
    description: "Full-stack web developer with a focus on scalable web applications and databases.", 
    skills: ["React", "Node.js", "MongoDB", "REST APIs"], 
    avatar: purple[500] 
  },
  { 
    description: "Marketing strategist helping businesses grow through creative campaigns.", 
    skills: ["Digital Marketing", "Copywriting", "Campaign Strategy"], 
    avatar: pink[500] 
  },
  { 
    description: "Corporate lawyer specializing in contracts, compliance, and business law.", 
    skills: ["Legal Research", "Contract Drafting", "Negotiation"], 
    avatar: brown[500] 
  },
  { 
    description: "Sales manager with proven record in driving revenue and client retention.", 
    skills: ["CRM", "Negotiation", "Lead Generation", "Customer Success"], 
    avatar: cyan[500] 
  }
];

const profile = [
    { skill: 'Analytics' },
    { skill: 'Copywritting' },
    { skill: 'Ads' },
    { skill: 'Campaign Strategy' },
    { skill: 'Marketing' }
];

const profile2 = [
    { skill: 'React' },
    { skill: 'Node.js' },
    { skill: 'MongoDB' },
    { skill: 'Rest APIs' }
];

const HeroVector = () => {
    const { t } = useTranslation('heroVector');
    return(
        <Box width="100%" p={2} sx={{ border: 2, borderColor: grey[300], borderRadius: 2, position: 'relative' }}>
            {/* Header */}
            <Grid container width="100%" display="flex" alignItems="center" gap={{ lg: 2, md: 2, sm: 2, xs: 0 }} justifyContent="space-between">
                <Typography color={grey[900]} fontSize={12} fontWeight={600}>uLance</Typography>
                {Array.from({ length: 5 }).map((_, id) => (
                    <Box key={id} bgcolor={grey[300]} height={15} width="8%" borderRadius={2} />
                ))}
                <Box bgcolor={darkBrand} height={20} width="10%" borderRadius={2} />
            </Grid>
            <PiCursorFill style={{ position: 'absolute', top: 60, right: 9, color: grey[600], zIndex: 999, animation: 'cursorMove 12s ease-in-out infinite' }} />
            <Grid container width="100%" display="flex" alignItems="center" p={2} borderRadius={1} border={2} borderColor={grey[300]} mt={2} position="relative" overflow="hidden" height={240}>
                {/* Scrollbar */}
                <Box position="absolute" width="2.5%" top={0} right={0} height="100%" borderLeft={2} borderColor={grey[300]}>
                    <Box width="100%" height="10%" bgcolor={grey[400]} top={0} position="absolute" sx={{ animation: 'scrollBar 12s ease-in-out infinite' }} />
                </Box>
                <Grid container width="100%" sx={{ animation: 'scrollingBox 12s ease-in-out infinite' }}>
                    {offers.map((offer, id) => (
                    <Box
                        key={id}
                        sx={{
                            py: 2,
                            gap: 2,
                            width: '100%',
                            display: 'flex',
                            borderBottom: 2,
                            pt: id === 0 ? 0 : 2,
                            alignItems: 'center',
                            flexDirection: 'row',
                            borderColor: grey[300]
                        }}
                    >
                        <Avatar sx={{ bgcolor: offer.avatar }} />
                        <Grid container width="100%" direction="column">
                            <Grid container gap={1}>
                                {offer.skills.map((skill, id) => (
                                    <Box key={id} bgcolor={lightBrand} height={20} width="auto" borderRadius={1} px={1} display="flex" alignItems="center">
                                        <Typography color={darkBrand} fontSize={10} fontWeight={600}>{skill}</Typography>
                                    </Box>
                                ))}
                            </Grid>
                            <Grid container width="100%">
                                <Typography color={grey[900]} fontSize={12} fontWeight={600} mt={0.5}>
                                    {offer.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    ))}
                </Grid>
            </Grid>
            {/* Profile Pop-Up */}
            <Box
                sx={{
                    px: 2,
                    py: 4,
                    border: 2,
                    top: '50%',
                    left: '50%',
                    height: '100%',
                    zIndex: 998,
                    borderRadius: 1,
                    position: 'absolute',
                    background: '#fff',
                    borderColor: grey[300],
                    transform: 'translate(-50%, -50%)',
                    width: { lg: '57%', md: '57%', sm: '57%', xs: '70%' },
                    animation: 'popupProfile 12s ease-in-out infinite'
                }}
            >
                <Box sx={{ width: '3%', aspectRatio: '1/1', borderRadius: '50%', bgcolor: '#fa5d56', position: 'absolute', top: '2%', right: '2%' }} />
                <Box sx={{ width: '3%', aspectRatio: '1/1', borderRadius: '50%', bgcolor: '#fbb92e', position: 'absolute', top: '2%', right: '6.5%' }} />
                <Box sx={{ width: '3%', aspectRatio: '1/1', borderRadius: '50%', bgcolor: '#29c43f', position: 'absolute', top: '2%', right: '11%' }} />
                <Grid container width="100%" direction="row" display="flex" justifyContent="space-between" alignItems="center">
                    <Avatar sx={{ height: { lg: 65, md: 65, sm: 65, xs: 50 }, width: { lg: 65, md: 65, sm: 65, xs: 50 } }} />
                    <Grid container direction="column" width="66%">
                        <Box
                            sx={{
                                py: 0.1,
                                display: 'flex',
                                background: grey[200],
                                justifyContent: 'center'
                            }}
                        >
                            <Typography color={grey[700]} fontSize={12} fontWeight={600}>
                                Jane Doe
                            </Typography>
                        </Box>
                        <Grid container width="100%" display="flex" justifyContent="space-between">
                            {profile.map((skill, id) => (
                                <Box
                                    key={id}
                                    sx={{
                                        px: { lg: 1, md: 1, sm: 1, xs: 0.5 },
                                        py: 0.4,
                                        mt: 0.5,
                                        background: lightBrand,
                                        flexGrow: id === 4 ? 1 : 0,
                                        ml: id === 1 || id === 2 || id === 4 ? 0.5 : 0,
                                    }}
                                >
                                    <Typography color={darkBrand} sx={{ fontSize: { lg: 8, md: 8, sm: 8, xs: 6 } }}>{skill.skill}</Typography>
                                </Box>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid container width="100%" mt={2} px={1} direction="column">
                        <Typography color={grey[900]} sx={{ fontSize: { lg: 11, md: 11, sm: 11, xs: 7 } }}>
                            Marketing strategist helping businesses grow through creative campaigns.
                        </Typography>
                        {Array.from({ length: 4 }).map((_, id) => (
                            <Box
                                key={id}
                                sx={{
                                    mt: 1,
                                    height: 10,
                                    width: '100%',
                                    borderRadius: 3,
                                    background: grey[200]
                                }}
                            />
                        ))}
                        <Grid container width="100%" display="flex" alignItems="center" my={1}>
                            <Typography color={grey[900]} sx={{ fontSize: { lg: 11, md: 11, sm: 11, xs: 7 } }} mr={1} mt={0.2}>
                                Rating (4.5/5.0):
                            </Typography>
                            {Array.from({ length: 5 }).map((_, id) => (
                                id === 4 ?
                                <StarHalfRoundedIcon key={id} style={{ color: darkBrand, fontSize: 20 }} />
                                :
                                <StarRateRoundedIcon key={id} style={{ color: darkBrand, fontSize: 20 }} />
                            ))}
                        </Grid>
                    </Grid>
                    <Grid container width="100%">
                        <Button
                            fullWidth
                            sx={{
                                height: 20,
                                fontSize: 10,
                                fontWeight: 600,
                                borderRadius: 1,
                                color: darkBrand,
                                textTransform: 'none',
                                background: lightBrand
                            }}
                        >
                            Contact
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            {/* Profile Pop-Up 2 */}
            <Box
                sx={{
                    px: 2,
                    py: 4,
                    border: 2,
                    top: '50%',
                    left: '50%',
                    height: '100%',
                    zIndex: 998,
                    borderRadius: 1,
                    position: 'absolute',
                    background: '#fff',
                    borderColor: grey[300],
                    transform: 'translate(-50%, -50%)',
                    width: { lg: '57%', md: '57%', sm: '57%', xs: '70%' },
                    animation: 'popupProfile2 12s ease-in-out infinite'
                }}
            >
                <Box sx={{ width: '3%', aspectRatio: '1/1', borderRadius: '50%', bgcolor: '#fa5d56', position: 'absolute', top: '2%', right: '2%' }} />
                <Box sx={{ width: '3%', aspectRatio: '1/1', borderRadius: '50%', bgcolor: '#fbb92e', position: 'absolute', top: '2%', right: '6.5%' }} />
                <Box sx={{ width: '3%', aspectRatio: '1/1', borderRadius: '50%', bgcolor: '#29c43f', position: 'absolute', top: '2%', right: '11%' }} />
                <Grid container width="100%" direction="row" display="flex" justifyContent="space-between" alignItems="center">
                    <Avatar style={{ height: 65, width: 65 }} />
                    <Grid container direction="column" width="66%">
                        <Box
                            sx={{
                                px: 3,
                                py: 0.1,
                                display: 'flex',
                                background: grey[200],
                                justifyContent: 'center'
                            }}
                        >
                            <Typography color={grey[700]} fontSize={12} fontWeight={600}>
                                John Doe
                            </Typography>
                        </Box>
                        <Grid container width="100%" display="flex" justifyContent="space-between">
                            {profile2.map((skill, id) => (
                                <Box
                                    key={id}
                                    sx={{
                                        px: 1,
                                        py: 0.4,
                                        mt: 0.5,
                                        background: lightBrand,
                                        flexGrow: id === 4 ? 1 : 0,
                                        ml: id === 1 || id === 2 || id === 4 ? 0.5 : 0,
                                    }}
                                >
                                    <Typography color={darkBrand} fontSize={8}>{skill.skill}</Typography>
                                </Box>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid container width="100%" mt={2} px={1} direction="column">
                        <Typography color={grey[900]} fontSize={11}>
                            Full-stack web developer with a focus on scalable web applications and databases.
                        </Typography>
                        {Array.from({ length: 4 }).map((_, id) => (
                            <Box
                                key={id}
                                sx={{
                                    mt: 1,
                                    height: 10,
                                    width: '100%',
                                    borderRadius: 3,
                                    background: grey[200]
                                }}
                            />
                        ))}
                        <Grid container width="100%" display="flex" alignItems="center" my={1}>
                            <Typography color={grey[900]} fontSize={11} mr={1} mt={0.2}>
                                Rating (4.0/5.0):
                            </Typography>
                            {Array.from({ length: 5 }).map((_, id) => (
                                id === 4 ?
                                <StarBorderRoundedIcon key={id} style={{ color: darkBrand, fontSize: 20 }} />
                                :
                                <StarRateRoundedIcon key={id} style={{ color: darkBrand, fontSize: 20 }} />
                            ))}
                        </Grid>
                    </Grid>
                    <Grid container width="100%">
                        <Button
                            fullWidth
                            sx={{
                                height: 20,
                                fontSize: 10,
                                borderRadius: 1,
                                color: darkBrand,
                                fontWeight: 600,
                                textTransform: 'none',
                                background: lightBrand
                            }}
                        >
                            Contact
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default HeroVector;
