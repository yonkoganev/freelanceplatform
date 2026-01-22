import { Grid } from "@mui/material";
import Banner from "./Banner";
import Requirements from "./Requirements";

const DashboardLayout = () => {
    return(
        <Grid container width="100%" display="flex" justifyContent="center" mt={12} mb={20}>
            <Grid size={{ lg: 9, md: 9, sm: 12, xs: 12 }} px={2}>
                <Banner />
                <Requirements />
            </Grid>
        </Grid>
    );
};

export default DashboardLayout;
