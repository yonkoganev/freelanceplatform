import { Grid } from "@mui/material";
import FreelancerPricing from "@/components/Pricing/FreelancerPricing";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Freelancer = () => {
    return(
        <Grid container width="100%">
            <FreelancerPricing />
        </Grid>
    );
};

export default Freelancer;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "hero", "herovector", "sector", "login"])),
    },
  };
}