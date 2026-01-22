import { Box, Button, Grid, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import Groups3Icon from '@mui/icons-material/Groups3';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useState } from "react";
import { darkBrand, lightBrand } from "@/theme/colors";

const Index = ({ onNextStep, setType }) => {
    const [selected, setSelected] = useState();
    const [buttonText, setButtonText] = useState('Create account');
    function handleSelect(i) {
        setSelected(i);
        if (i === 1) {
            setButtonText('Join as a Freelancer')
            setType("freelancer");
        } else if (i === 0) {
            setButtonText('Join as a Business')
            setType("business");
        }
    }

    const handleNext = () => {
        if (selected === 0 || selected === 1) {
            onNextStep?.(); // trigger parent function
        }
    };
    return(
        <Grid container height="100vh" width="100%" position="absolute" bgcolor="red" alignItems="center" gap={3} direction="column">
            <Typography textAlign="center" fontSize={28} mt={15} color={grey[900]} zIndex={999}>Join as a business or freelancer.</Typography>
            <Grid container gap={2}>
                <Box
                    onClick={() => handleSelect(0)}
                    sx={{
                        p: 3,
                        width: 300,
                        zIndex: 999,
                        color: grey[900],
                        borderRadius: 3,
                        borderColor: grey[800],
                        border: selected === 0 ? 0 : 1,
                        ':hover': { cursor: 'pointer', boxShadow: `0px 0px 20px ${grey[500]}`, borderColor: darkBrand },
                        background: selected === 0 ? `linear-gradient(to top left, ${lightBrand}, ${darkBrand})` : 'transparent'
                    }}
                >
                    <Grid container display="flex" width="100%" justifyContent="space-between" color={selected === 0 ? grey[50] : grey[900]}>
                        <Groups3Icon style={{ fontSize: 40 }} />
                        {selected === 0 ? <RadioButtonCheckedIcon style={{ fontSize: 30 }} /> : <RadioButtonUncheckedIcon style={{ fontSize: 30 }} />}
                    </Grid>
                    <Grid container color={selected === 0 ? grey[50] : grey[900]}>
                        <Typography fontSize={20} mt={2} fontWeight={600}>
                            I am a business, looking for a freelancer.
                        </Typography>
                    </Grid>
                </Box>
                <Box
                    onClick={() => handleSelect(1)}
                    sx={{
                        p: 3,
                        width: 300,
                        zIndex: 999,
                        color: grey[900],
                        borderRadius: 3,
                        borderColor: grey[800],
                        border: selected === 1 ? 0 : 1,
                        ':hover': { cursor: 'pointer', boxShadow: `0px 0px 20px ${grey[500]}`, borderColor: darkBrand },
                        background: selected === 1 ? `linear-gradient(to top left, ${lightBrand}, ${darkBrand})` : 'transparent'
                    }}
                >
                    <Grid container display="flex" width="100%" justifyContent="space-between" color={selected === 1 ? grey[50] : grey[900]}>
                        <Groups3Icon style={{ fontSize: 40 }} />
                        {selected === 1 ? <RadioButtonCheckedIcon style={{ fontSize: 30 }} /> : <RadioButtonUncheckedIcon style={{ fontSize: 30 }} />}
                    </Grid>
                    <Grid container color={selected === 1 ? grey[50] : grey[900]}>
                        <Typography fontSize={20} mt={2} fontWeight={600}>
                            I am a freelancer, looking for a job.
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
            <Button
                onClick={handleNext}
                disabled={selected !== 0 && selected !== 1}
                sx={{
                    px: 2,
                    height: 40,
                    zIndex: 999,
                    fontSize: 14,
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: 'none',
                    transition: 'transform 0.2s ease-in-out',
                    color: selected === 0 || selected === 1 ? grey[50] : grey[700],
                    background: selected === 0 || selected === 1 ? darkBrand : grey[300],
                    ':hover': { transform: 'scale(1.03)' }
                }}
            >
                {buttonText}
            </Button>
            <Typography zIndex={999} color={grey[900]} fontSize={14}>
                Already have an account?{" "}
                <span
                    onClick={() => window.location.href = "/login"}
                    style={{
                    color: darkBrand,
                    textDecoration: "underline",
                    cursor: "pointer",
                    fontWeight: 600,
                    }}
                >
                    Log in
                </span>
            </Typography>
            <Grid container width="100%" height="100vh" position="absolute" top={0} left={0} zIndex={990} bgcolor="#fff" display="flex" justifyContent="center" />
        </Grid>
    );
};

export default Index;
