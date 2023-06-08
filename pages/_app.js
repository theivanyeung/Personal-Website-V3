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
          "https://doc-10-1o-docs.googleusercontent.com/docs/securesc/6vekt3l60tce6e7sksnnpvbiq16v6mja/740imus7c0vpoul4v16m3ttlrbc803fn/1686265875000/00976432614222146538/00976432614222146538/1bZ5y5c608bm0AjJU11lJVxYV40T6vz5u?ax=ADWCPKDPgP_S74td_oBJkR3qFbvbEImpDLcnyWvB2vHtpg4l410BG4NmyJlIFzvNj1gF2IKwZJqIHqCHrqem_rVjEa7qiDsPDBjZY0SW5bxlNp1fz2FWWgbpXfFe43jT6KXHYHD8jyHD1JmlpsMwlTcHFK8_2s1vMmu_dxOzshxb54GJLDDNpuIJ8HssLFE9xma_TuTMwVKSb23lkvYHUpwzofGgl-4Nz7UvL_38NVUgXsNZ8um2WVtC5wRvYcPuvMDUfZShhBQ9RB9Tr9BByI6QntRl6GCm38UOojAMXTfg0jg1AtbDe_FKW8DBXQyDI9-FrnTBbOceu4xVp3_TjHO5Bdetm_T0hkRIw46xAHHA69cUA1VVt5IPlnDPKnLCa8r83DTM3KYEAjwlDWAe8F5s5nODy8UQOG7Aw8UYq1neGYs340HCFqj0Zte2PLvmqNdFQy1AYEGKMdB3hxwx1pGKy8EzT-lDJE2G68CG34p-FHsJmVlCQQhyvOWB22LlQcBLvVfcyMV_48zdhEcfnQ1fGqpQRrVNTV6u69iPXhmKcxkOjUMur3YlXZurWSKhXopWzky6-sMfWkLkbU2FgODQvquYm9m2QKAx3zPvhVpfQHrS1vU2_z3-_Ewbrq2dbCwJUA8oLQnTjUpHFb8eo-PKwSKNYrEOAS4cRRCYcUnIJDHzqYrV3Zie9AInymSxOFNYAncHjOidBtJe14xn4BnLK6YnP1VQKqdqW_m0cLRscuT6zs1jT4khxwxmcIXUWMJ-vsB3p6-oNm53vvy8HSqQHvtY8E1EtCz1KgFJES-hnFlfZCxCcX3mxQm5h0eyKzKFdLk7ohd5fiDjv5-vff0dtoLH-zni0jXMVlRf_Ix-F27a4UL0yGUwGaXs5mdJ6CZq88KAgfpx_Jki06Bri9Cuel-jSRE6Sm4No6XtHaXvuGzexrfJpyjB3a77mrSzT_XPM59UMNDqGWFBCRIGYcoLyC4_iK0dmTiyU-HqamZuDS9WypJDF_5J4hsQs-K56y-VtAcw9Qv3XeLl7qvuiYU1CgqhRgdmAWdIhRcvthSmdPGxVmsi&uuid=751d6078-047f-4b42-9389-c2f123f67cef&authuser=0&nonce=sc6kanq290k2s&user=00976432614222146538&hash=7f1lj2i2hfp4m93fhevkof81jvbdlks9"
        }
      />
      <OpticalCircle />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
