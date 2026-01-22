import { Grid, Typography } from "@mui/material";
import ReviewsCarousel from "./ReviewsCarousel";
import { grey } from "@mui/material/colors";
import { gradientBox } from "@/theme/colors";

const Reviews = () => {
    return(
        <Grid container width="100%" display="flex" justifyContent="center">
            <Grid size={{ lg: 8, md: 8, sm: 12, xs: 12 }} px={2}>
                <Typography color={grey[800]} fontSize={40} fontWeight={600}>
                    Voices from Our <span style={{ color: grey[900], background: `linear-gradient(to right, ${gradientBox}, transparent)`, paddingLeft: 5 }}>Network</span>
                </Typography>
                <ReviewsCarousel />
            </Grid>
        </Grid>
    );
};

export default Reviews;
