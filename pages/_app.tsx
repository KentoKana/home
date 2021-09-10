import "../styles/globals.scss";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import "../utils";
config.autoAddCss = false; /* eslint-disable import/first */

// You should do that in a Layout file or in `gatsby-browser.js`.
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  const [loadPage, setLoadPage] = useState<boolean>(false);

  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      console.log("COME ON YOU FUCKER");

      window.scrollTo(0, 0);
    });
    setTimeout(() => {
      setLoadPage(true);
    }, 1300);
  }, []);

  return (
    <>
      {loadPage ? (
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default MyApp;
