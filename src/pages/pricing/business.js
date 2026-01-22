import { Grid } from "@mui/material";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BusinessPricing from "@/components/Pricing/BusinessPricing";

const Businesses = () => {
    return(
        <Grid container width="100%">
            <BusinessPricing />
        </Grid>
    );
};

export default Businesses;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "hero", "herovector", "sector", "login"])),
    },
  };
}