import type {AppProps} from "next/app";
import {ThirdwebProvider} from "@thirdweb-dev/react";
import {Navbar} from "@/resources/components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import config from "@/config/index";
import "@/resources/css/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={config.constants.thirdweb.clientId}
      activeChain={config.constants.NETWORK}
      authConfig={{
        domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
        authUrl: "/api/auth",
      }}
    >
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {/* Render the navigation menu above each component */}
      <Navbar />
      {/* Render the actual component (page) */}
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
