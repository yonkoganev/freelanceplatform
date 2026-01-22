import { Grid } from "@mui/material";
import ProfileData from "@/components/ProfileData/ProfileData";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale, params }) {
  const { id } = params;

  const user = { id, name: "Placeholder User", email: "user@example.com" };

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "hero", "herovector", "sector", "login"])), // ✅ must await here
      user,
    },
  };
}

const UserPage = ({ user }) => {
    return(
        <Grid container width="100%" display="flex" justifyContent="center">
          <Grid size={{ lg: 9, md: 9, sm: 12, xs: 12 }}>
            <ProfileData />
          </Grid>
        </Grid>
    );
};

export default UserPage;
