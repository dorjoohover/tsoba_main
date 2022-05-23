import "../src/styles/index.scss";
import "../src/styles/response.scss";
// import { appWithTranslation } from "../i18n";
import React from "react";
import getConfig from "next/config";
import { appWithTranslation } from "next-i18next";
import Layout from "../src/components/Layout";
import LoadingScreen from "../src/components/Loading";
import '@splidejs/react-splide/css';
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default appWithTranslation(MyApp);
