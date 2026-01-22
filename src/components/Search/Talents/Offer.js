import WorkIcon from '@mui/icons-material/Work';
import { blue, grey, orange, purple } from "@mui/material/colors";
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Avatar, Box, Button, Chip, CircularProgress, Grid, IconButton, Typography } from "@mui/material";

const Offer = () => {
    const text = "I am a sex offender but also an experienced Software Developer. Currently trying to get close to Denitsa and sexually torture her. So far, the mission is not completed but I am a hard-working man so I wouldn`t give up regardless of the circumstances.";
    return(
        <Box
            sx={{
                px: 2,
                py: 4,
                width: '100%',
                borderRadius: 1,
                borderBottom: 1,
                borderColor: grey[300],
                ':hover': { background: grey[200], cursor: 'pointer' }
            }}
        >
            <Grid container width="100%" display="flex" alignItems="center" position="relative" justifyContent="space-between">
                <Grid container>
                    <Avatar sx={{ width: 65, height: 65 }} />
                    <Grid container direction="column" ml={1}>
                        <Typography color={grey[900]} fontSize={16}>Yonko G.</Typography>
                        <Typography color={grey[900]} fontSize={20} fontWeight={600} mt={-0.7}>Sex Offender | Python Developer</Typography>
                        <Typography color={grey[600]} fontSize={14} mt={-0.7}>Bulgaria</Typography>
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
            <Grid container width="100%" mt={3} px={1} display="flex" alignItems="center" gap={5}>
                <Typography color={grey[700]} fontSize={16}>
                    $15/hr
                </Typography>
                <Grid container display="flex" alignItems="center" gap={1}>
                    <Box position="relative" display="flex" justifyContent="center" alignItems="center">
                        <CircularProgress enableTrackSlot variant="determinate" value={87} sx={{ color: blue[400] }} />
                        <WorkIcon style={{ position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%', color: blue[400], fontSize: 15 }} />
                    </Box>
                    <Typography color={grey[700]} fontSize={16}>
                        Hired 128 times
                    </Typography>
                </Grid>
                <Typography color={grey[700]} fontSize={16}>
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
                    <Typography color={purple[400]} fontSize={12}>Available now</Typography>
                </Box>
            </Grid>
            <Grid container width="100%" gap={2} mt={2}>
                <Chip label="C++" />
                <Chip label="Python" />
                <Chip label="React" />
                <Chip label="CSS" />
                <Chip label="NextJS" />
                <Chip label="Canva" />
                <Chip label="Microsoft Excel" />
                <Chip label="Microsoft Word" />
            </Grid>
            <Grid container width="100%" mt={2}>
                <Typography sx={{ color: grey[900], display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {text}
                </Typography>
            </Grid>
        </Box>
    );
};

export default Offer;
