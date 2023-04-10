import { Flex, Heading } from "@chakra-ui/react";

const IntroHeroFull = (props) => {
  const { greeting, introduction } = props;

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      w={"1000px"}
      h={"50%"}
      maxW={"95%"}
      gap={"25px"}
      pointerEvents={"none"}
      display={props.display}
    >
      {greeting && (
        <Heading
          width={"fit-content"}
          fontWeight={"medium"}
          fontSize={"3xl"}
          letterSpacing={"0.1em"}
          color={"#FFFFFF"}
          background={"rgba(92, 149, 167, 0.5)"}
          borderRadius={"12px"}
          backdropFilter={"blur(7.5px)"}
          boxShadow={"0px 0px 5px 2px #8FE4FF"}
          paddingX={"10px"}
          paddingY={"10px"}
        >
          {greeting}
        </Heading>
      )}
      {introduction && (
        <Heading
          width={"fit-content"}
          fontWeight={"medium"}
          fontSize={"3xl"}
          letterSpacing={"0.1em"}
          color={"#FFFFFF"}
          background={"rgba(92, 149, 167, 0.5)"}
          borderRadius={"12px"}
          backdropFilter={"blur(7.5px)"}
          boxShadow={"0px 0px 5px 2px #8FE4FF"}
          paddingX={"10px"}
          paddingY={"10px"}
        >
          {introduction}
        </Heading>
      )}
    </Flex>
  );
};

export default IntroHeroFull;
