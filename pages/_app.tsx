import * as React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import createCache from "@emotion/cache";
import { SWRConfig } from "swr";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import { CacheProvider } from "@emotion/react";

import Layout from "components/Layout";

import fetch from "../lib/fetchJson";
import theme from "../src/theme";
import { wrapper } from "../src/store/store";
import { useRouter } from "next/router";
import useUser from "../lib/useUser";

export const cache = createCache({ key: "css", prepend: true });

export const WrappedApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  const { user } = useUser({ redirectTo: "/login" });

  if (!user?.isLoggedIn && router.route !== "/login") return <></>;

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Fluxonaut Curation Tool</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig
          value={{
            fetcher: fetch,
            onError: (err) => {
              console.error(err);
            },
          }}
        >
          {router.route === "/login" ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default wrapper.withRedux(WrappedApp);
