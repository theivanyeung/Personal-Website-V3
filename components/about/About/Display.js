import { Box, Flex, Heading } from "@chakra-ui/react";

import AboutDisplayFull from "./Display/Full";
import AboutDisplayBase from "./Display/Base";

const AboutDisplay = () => {
  return (
    <>
      <AboutDisplayFull
        display={{
          xxl: "flex",
          xl: "none",
          lg: "none",
          md: "none",
          sm: "none",
          base: "none",
        }}
      />
      <AboutDisplayBase
        display={{
          xxl: "none",
          xl: "flex",
          lg: "flex",
          md: "flex",
          sm: "flex",
          base: "flex",
        }}
      />
    </>
  );
};

export default AboutDisplay;
