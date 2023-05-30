import Head from "next/head";

import "../styles/global.css";
import "../styles/fonts.css";

import { ChakraProvider, Box } from "@chakra-ui/react";
import customTheme from "../styles/customTheme";

import OpticalCircle from "../TARS/OpticalCircle";
import VideoBackground from "../components/VideoBackground";

import Hotjar from "@hotjar/browser";

const siteId = 3512480;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

const GlobalHead = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
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
