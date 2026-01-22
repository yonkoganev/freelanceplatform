import ChooseType from "@/components/Pricing/ChooseType";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Choose = () => {
    return(
        <ChooseType />
    );
};

export default Choose;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "hero", "herovector", "sector", "login"])),
    },
  };
}