import "../src/styles/index.scss";
// import { appWithTranslation } from "../i18n";
import getConfig from "next/config";
import { appWithTranslation } from "next-i18next";
import Layout from "../src/components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
