import TalentsPage from "@/components/Search/Talents/TalentsPage";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Businesses = () => {
    return(
        <TalentsPage />
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
