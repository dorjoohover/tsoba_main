import "../src/styles/index.scss";
// import { appWithTranslation } from "../i18n";
import getConfig from "next/config";
import {appWithTranslation} from 'next-i18next'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
