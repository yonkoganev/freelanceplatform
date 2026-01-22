import ChooseFromTheBest from "@/components/HomePage/ChooseFromTheBest";
import FAQSection from "@/components/HomePage/FAQSection";
import HeroSection2 from "@/components/HomePage/HeroSection2";
import HowItWorks from "@/components/HomePage/HowItWorks";
import Plans from "@/components/HomePage/Plans";
import PriceCalc from "@/components/HomePage/PriceCalc";
import ProVersion from "@/components/HomePage/ProVersion";
import Reviews from "@/components/HomePage/Reviews";
import Sector from "@/components/HomePage/Sector";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <>
      <HeroSection2 />
      <Sector />
      <ChooseFromTheBest />
      <ProVersion />
      <HowItWorks />
      <Plans />
      <Reviews />
      <PriceCalc />
      <FAQSection />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "hero", "herovector", "sector", "login"])),
    },
  };
}
