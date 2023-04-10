import { useEffect } from "react";

import { Flex, Fade, useDisclosure } from "@chakra-ui/react";

import IntroHero from "./Intro/Hero";
import IntroScroll from "./Intro/Scroll";

const Intro = (props) => {
  const { finishedIntro } = props;

  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    if (finishedIntro) {
      onToggle();
    }
  }, [finishedIntro]);

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"100%"}
      h={"100vh"}
      scrollSnapAlign="start"
      bg="transparent"
      paddingY={"50px"}
    >
      <IntroHero />
      <Fade in={isOpen}>
        <IntroScroll />
      </Fade>
    </Flex>
  );
};

export default Intro;
