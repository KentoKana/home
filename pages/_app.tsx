import "../styles/globals.scss";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import "../utils";
config.autoAddCss = false; /* eslint-disable import/first */

import { RouterScrollProvider } from "@moxy/next-router-scroll";

// You should do that in a Layout file or in `gatsby-browser.js`.
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RouterScrollProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </RouterScrollProvider>
    </>
  );
}

export default MyApp;
