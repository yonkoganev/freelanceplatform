import { useState } from 'react';
import { useRouter } from 'next/router';
import WorkIcon from '@mui/icons-material/Work';
import { PiCertificateBold } from "react-icons/pi";
import { blue, grey, orange, purple } from "@mui/material/colors";
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Avatar, Box, Button, Chip, CircularProgress, Grid, IconButton, Typography } from "@mui/material";

const skills = ['Python', 'REST API', 'Django', 'Flask', 'FastAPI', 'Docket', 'Kubernetes', 'DevOps', 'CI/CD', 'AWS', 'PostgreSQL', 'React', 'MySQL']

const ProfileData = () => {
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
            <Grid container width="100%" display="flex" alignItems="center" position="relative" justifyContent="space-between" px={4}>
                <Grid container display="flex" alignItems="center">
                    <Avatar sx={{ width: 65, height: 65 }} />
                    <Grid container direction="column" ml={2}>
                        <Typography color={grey[900]} fontSize={28} fontWeight={600}>Yonko G.</Typography>
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
                        Invite to job
                    </Button>
                </Grid>
            </Grid>
            <Grid container width="100%" mt={3} px={4} display="flex" alignItems="center" gap={5} borderBottom={1} borderColor={grey[300]} pb={5}>
                <Typography color={grey[800]} fontSize={18} fontWeight={600}>
                    $15/hr
                </Typography>
                <Grid container display="flex" alignItems="center" gap={1}>
                    <Box position="relative" display="flex" justifyContent="center" alignItems="center">
                        <CircularProgress enableTrackSlot variant="determinate" value={87} sx={{ color: blue[400] }} />
                        <WorkIcon style={{ position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%', color: blue[400], fontSize: 15 }} />
                    </Box>
                    <Typography color={grey[800]} fontSize={18} fontWeight={600}>
                        Hired 128 times
                    </Typography>
                </Grid>
                <Typography color={grey[800]} fontSize={18} fontWeight={600}>
                    $10K+ earned
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
                    <Typography color={purple[400]} fontSize={12} fontWeight={600}>Available now</Typography>
                </Box>
            </Grid>
            {/* Profile Left Part - Data */}
            <Grid size={{ lg: 3.5, md: 3.5, sm: 12, xs: 12 }} borderRight={1} direction="column" borderColor={grey[300]} overflow="hidden">
                <Grid container width="100%" direction="column" borderBottom={1} borderColor={grey[300]} p={3}>
                    <Typography color={grey[900]} fontSize={18} fontWeight={600}>Profile Info</Typography>
                    <Typography color={grey[700]} fontSize={14} mt={2}>First Name</Typography>
                    <Typography color={grey[900]} fontSize={16}>Yonko</Typography>
                    <Typography color={grey[700]} fontSize={14} mt={1}>Last Name</Typography>
                    <Typography color={grey[900]} fontSize={16}>Ganev</Typography>
                    <Typography color={grey[700]} fontSize={14} mt={1}>Age</Typography>
                    <Typography color={grey[900]} fontSize={16}>29</Typography>
                </Grid>
                {/* Stats */}
                <Grid container width="100%" display="flex" justifyContent="space-between" p={3} borderBottom={1} borderColor={grey[300]}>
                    <Grid container direction="column">
                        <Typography color={grey[900]} fontSize={18} fontWeight={600}>$8K+</Typography>
                        <Typography color={grey[700]} fontSize={14}>Total earned</Typography>
                    </Grid>
                    <Grid container direction="column">
                        <Typography color={grey[900]} fontSize={18} fontWeight={600}>118</Typography>
                        <Typography color={grey[700]} fontSize={14}>Times hired</Typography>
                    </Grid>
                    <Grid container direction="column">
                        <Typography color={grey[900]} fontSize={18} fontWeight={600}>24</Typography>
                        <Typography color={grey[700]} fontSize={14}>Feedback</Typography>
                    </Grid>
                </Grid>
                <Grid container width="100%" direction="column" p={3}>
                    <Typography color={grey[900]} fontSize={18} fontWeight={600}>Meet Yonko G.</Typography>
                    <Typography color={grey[900]} fontSize={16} mt={2} fontWeight={600}>Languages</Typography>
                    <Typography color={grey[900]} fontSize={16} mt={1}>English: <span style={{ color: grey[700], marginLeft: 5 }}>Fluent</span></Typography>
                    <Typography color={grey[900]} fontSize={16} mt={1}>Bulgarian: <span style={{ color: grey[700], marginLeft: 5 }}>Native</span></Typography>
                    <Typography color={grey[900]} fontSize={16} mt={1}>German: <span style={{ color: grey[700], marginLeft: 5 }}>Basic</span></Typography>
                </Grid>
            </Grid>
            {/* Right Part */}
            <Grid size={{ lg: 8.5, md: 8.5, sm: 12, xs: 12 }} direction="column">
                {/* Title & Description */}
                <Grid container direction="column" width="100%" px={4} py={3} borderBottom={1} borderColor={grey[300]} alignItems="start">
                    <Typography color={grey[900]} fontSize={20} fontWeight={600}>
                        Python Developer | Senior Full Stack Python Developer Web App - $15/hr
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
                        {`📊 Python Developer with $5M+ in client revenue | over 11,000 uLance hours | 97% Job Success Score | 111+ successful projects

                        🔧 What I bring as a Python Developer:
                        • 10+ years of hands-on experience in Python development, including Django, Flask, FastAPI, and AI-driven backends
                        • Proven track record across SaaS platforms, data pipelines, and machine learning applications
                        • Fluent in DevOps for Python apps - from Docker and Kubernetes to GitHub Actions and CI/CD
                        • Comfortable leading backend architecture, refactoring legacy Python systems, and integrating modern microservices

                        ✅ I'm open to:
                        • On-demand Python development - from full stack with Django or Flask to integrations with React.js, Node.js, or OpenAI APIs
                        • Full-cycle SaaS builds - backend with FastAPI/Django, frontend with ReactJS, Vue.js, or Next.js
                        • Legacy code modernization - refactoring Django/Flask apps, optimizing APIs, and migrating monoliths to Python microservices
                        • Long-term partnerships - perfect for Python data scraping, ML pipeline maintenance, or ongoing AI Python development

                        🧠 Python Developer Tech Stack:
                        • Languages & Frameworks: Python, Django, FastAPI, Flask, Aiohttp
                        • Frontends: React.js, Vue.js, Next.js, Tailwind CSS
                        • DevOps: Docker, Kubernetes, GitHub Actions, CI/CD, AWS, GCP - fully integrated with Python workflows
                        • Databases: PostgreSQL, Redis, MongoDB, BigQuery, MySQL - ideal for Django & FastAPI backends
                        • AI & Automation: OpenAI, LangChain, NLP, Python chatbots, Python data analysis tools
                        • Architecture: REST APIs, GraphQL, WebSockets, Zapier integrations, Python microservices

                        🔥 Projects I’ve led as a Python Developer:
                        • Architected and deployed full-stack Python applications using Django and FastAPI
                        • Developed and scaled high-throughput RESTful APIs and backend systems with Flask and Python microservices
                        • Refactored legacy Python codebases with security, maintainability, and performance improvements
                        • Built DevOps pipelines for Python services using Docker, Kubernetes, GitHub Actions
                        • Created AI workflows and Python automation with OpenAI, LangChain, and NLP
                        • Implemented robust Python data scraping, mining, and ETL pipelines

                        🧩 Typical Roles:
                        • Senior Python Developer for fast-scaling startups
                        • Python Backend Engineer building scalable APIs
                        • Python DevOps Engineer integrating CI/CD for Django/Flask/FastAPI
                        • AI Python Developer automating workflows with OpenAI
                        • Full Stack Python Developer for end-to-end delivery using Django + React

                        🏭 Industries:
                        FinTech · Healthcare · E-commerce · PropTech · EdTech · AI SaaS · TravelTech · CRM/ERP

                        💬 Clients say:
                        ⭐⭐⭐⭐⭐ “Highly qualified developer and a great team player. Delivered high-quality code on time and exceeded expectations. Communication was excellent.” – George, CA

                        🚀 Ready to move fast?
                        Let’s connect via DM to discuss:

                        • Where you are now
                        • Where you want to be
                        • How I can help you get there - as your Python developer partner.`}
                    </Typography>
                    <Button
                        disableRipple
                        onClick={() => setExpanded(!expanded)}
                        sx={{
                            color: orange[800],
                            textTransform: "none",
                            textDecoration: 'underline',
                            ':hover': { background: 'transparent' }
                        }}
                    >
                        {expanded ? "Less" : "More"}
                    </Button>
                </Grid>
                {/* Skills */}
                <Grid container direction="column" width="100%" px={4} py={3} borderBottom={1} borderColor={grey[300]} alignItems="start">
                    <Typography color={grey[900]} fontSize={20} fontWeight={600}>
                        Skills
                    </Typography>
                    <Grid container width="100%" mt={2} gap={2}>
                        {skills.map((skill, id) => (
                            <Chip key={id} label={skill} size="small" sx={{ px: 1, fontWeight: 600, fontSize: 12, color: orange[800], backgroundColor: orange[50] }} />
                        ))}
                    </Grid>
                </Grid>
                {/* Certifications */}
                <Grid container direction="column" width="100%" px={4} py={3} borderColor={grey[300]} alignItems="start">
                    <Typography color={grey[900]} fontSize={20} fontWeight={600}>
                        Certifications
                    </Typography>
                    <Grid container width="100%" mt={2} gap={2} direction="column">
                        <Grid container display="flex" alignItems="center" mt={2} width="100%" borderBottom={1} borderColor={grey[300]} pb={2}>
                            <img src="/assets/certificate.png" alt="cert" style={{ height: 70, width: 70 }} />
                            <Grid container direction="column" ml={5}>
                                <Typography color={grey[900]} fontSize={20} fontWeight={600}>
                                    Python Developer
                                </Typography>
                                <Typography color={grey[900]} fontSize={18}>
                                    Provider: Udemy
                                </Typography>
                                <Typography color={grey[900]} fontSize={18}>
                                    Issued: July 2025
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container display="flex" alignItems="center" mt={2}>
                            <img src="/assets/certificate.png" alt="cert" style={{ height: 70, width: 70 }} />
                            <Grid container direction="column" ml={5}>
                                <Typography color={grey[900]} fontSize={20} fontWeight={600}>
                                    Full Stack Developer
                                </Typography>
                                <Typography color={grey[900]} fontSize={18}>
                                    Provider: Coursera
                                </Typography>
                                <Typography color={grey[900]} fontSize={18}>
                                    Issued: Sept 2020
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Education */}
                <Grid container direction="column" width="100%" px={4} py={3} borderTop={1} borderColor={grey[300]} alignItems="start">
                    <Typography color={grey[900]} fontSize={20} fontWeight={600}>
                        Education
                    </Typography>
                    <Typography color={grey[900]} fontSize={18} fontWeight={600} mt={2}>
                        SoftUni (Software University)
                    </Typography>
                    <Typography color={grey[900]} fontSize={16}>
                        Programming | 2018-2022
                    </Typography>
                </Grid>
                {/* Employment History */}
                <Grid container direction="column" width="100%" px={4} py={3} borderTop={1} borderColor={grey[300]} alignItems="start">
                    <Typography color={grey[900]} fontSize={20} fontWeight={600}>
                        Employment History
                    </Typography>
                    <Typography color={orange[800]} fontSize={18} fontWeight={600} mt={3}>
                        Web Python Developer | vKushti
                    </Typography>
                    <Typography color={grey[900]} fontSize={16}>
                        January 2022 - March 2024
                    </Typography>
                    <Typography color={orange[800]} fontSize={18} fontWeight={600} mt={2}>
                        Front-end Developer | MyCompany
                    </Typography>
                    <Typography color={grey[900]} fontSize={16}>
                        Feb 2019 - Nov 2021
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProfileData;
