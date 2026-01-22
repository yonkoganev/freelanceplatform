import { useState } from "react";
import Index from ".";
import SignupForm from "./signupform";
import { Grid } from "@mui/material";

const BusinessOrFreelancer = () => {
    const [step, setStep] = useState(0);
    const [type, setType] = useState();

    const handleNextStep = () => {
        setStep(1); // go to signup
    };

    return(
        <Grid container height="100vh" width="100%" position="absolute" bgcolor="red" alignItems="center" gap={3} direction="column">
            {step === 0 ? <Index onNextStep={handleNextStep} setType={setType} /> : <SignupForm userType={type} />}
            <Grid container width="100%" height="100vh" position="absolute" top={0} left={0} zIndex={990} bgcolor="#fff" display="flex" justifyContent="center" />
        </Grid>
    );
};

export default BusinessOrFreelancer;
