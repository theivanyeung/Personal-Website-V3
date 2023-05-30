import Head from "next/head";

import "../styles/global.css";
import "../styles/fonts.css";

import { ChakraProvider, Box } from "@chakra-ui/react";
import customTheme from "../styles/customTheme";

import OpticalCircle from "../TARS/OpticalCircle";
import VideoBackground from "../components/VideoBackground";

const HotJar = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:3512480,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `,
      }}
    />
  );
};

const GlobalHead = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <HotJar />
    </Head>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <GlobalHead />
      <VideoBackground
        videoSrc={
          "https://storage.googleapis.com/ivan-yeung-personal/snn-background.mp4"
        }
      />
      <OpticalCircle />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
