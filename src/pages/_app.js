import Footer from "@/components/HomePage/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  return(
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default appWithTranslation(App);
