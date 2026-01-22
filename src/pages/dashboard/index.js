import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index = () => {
    return(
        <DashboardLayout />
    )
}

export default Index;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "hero", "herovector", "sector", "login"])),
    },
  };
}
