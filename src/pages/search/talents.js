import TalentsPage from "@/components/Search/Talents/TalentsPage";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Talents = () => {
    return(
        <TalentsPage />
    );
};

export default Talents;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "hero", "herovector", "sector", "login"])),
    },
  };
}
