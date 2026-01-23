import { Box, Button, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import BorderClearOutlinedIcon from '@mui/icons-material/BorderClearOutlined';
import JoinRightOutlinedIcon from '@mui/icons-material/JoinRightOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import { useState } from "react";
import { darkBrand, gradientBox, lightBrand } from "@/theme/colors";

const boxes = [
    {icon: <BorderClearOutlinedIcon style={{ fontSize: 40, color: darkBrand }} />, title: 'Find Top Talent', description: 'Access a pool of top talent across hundreds of categories.'},
    {icon: <JoinRightOutlinedIcon style={{ fontSize: 40, color: darkBrand }} />, title: 'Seamless Matching', description: 'Enjoy a simple, easy-to-use matching experience.'},
    {icon: <ElectricBoltOutlinedIcon style={{ fontSize: 40, color: darkBrand }} />, title: 'Fast & Reliable Results', description: 'Get quality work done quickly and within budget.'},
    {icon: <RequestQuoteOutlinedIcon style={{ fontSize: 40, color: darkBrand }} />, title: 'Pay with Confidence', description: 'Only pay when work is finished.'},
]

const HowItWorks = () => {
    const [hovered, setHovered] = useState();
    return(
        <Grid container width="100%" display="flex" justifyContent="center" mb={8} mt={15}>
            <Grid container size={{ lg: 8, md: 10, sm: 12, xs: 12 }} px={2}>
                <Typography fontSize={38} color={grey[800]} fontWeight={550} lineHeight={1.1}>
                    Simple. <span style={{ color: grey[800], background: `linear-gradient(to right, ${gradientBox}, transparent)`, paddingLeft: 5 }}>Fast</span>. Reliable.
                </Typography>
                <Grid container justifyContent="space-between" gap={5} mt={6}> 
                    {boxes.map((box, id) => (
                    <Box
                        onMouseEnter={() => setHovered(id)}
                        onMouseLeave={() => setHovered(null)}
                        key={id}
                        flexGrow={1}
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                        sx={{ width: { lg: '20%', sm: '40%', md: '40%', xs: '40%' } }}
                    >   
                        <Box
                            sx={{
                                width: 75,
                                height: 75,
                                display: 'flex',
                                borderRadius: 50,
                                alignItems: 'center',
                                background: lightBrand,
                                justifyContent: 'center',
                                boxShadow: `0px 0px 20px ${lightBrand}`,
                                transition: 'transform 0.2s ease-in-out',
                                transform: hovered === id ? 'scale(1.2)' : 'scale(1.0)',
                            }}
                        >
                            {box.icon}
                        </Box>
                        <Typography color={grey[900]} fontSize={20} fontWeight={600} textAlign="center" mt={2}>
                            {box.title}
                        </Typography>
                        <Typography color={grey[600]} fontSize={16} textAlign="center" mt={1}>
                            {box.description}
                        </Typography>
                    </Box>
                    ))}
                </Grid>
                {/* CTA */}
                <Grid container width="100%" justifyContent="center" mt={6}>
                    <Button
                        sx={{
                            px: 5,
                            py: 1,
                            fontSize: 16,
                            color: grey[50],
                            fontWeight: 600,
                            borderRadius: 50,
                            textTransform: 'none',
                            background: darkBrand,
                            transition: 'transform 0.2s ease-in-out',
                            width: { lg: 'auto', md: 'auto', sm: 'auto', xs: '100%' },
                            ':hover': { boxShadow: `0px 0px 20px ${darkBrand}`, transform: 'scale(1.05)' }
                        }}
                    >
                        Join now
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HowItWorks;
