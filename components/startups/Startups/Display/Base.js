import Image from "next/image";

import { Flex, Box, Heading } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

const StartupsDisplayBase = (props) => {
  const { startup, index, websiteAccess, setWebsiteAccess, display } = props;

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={"15px"}
      w={"95%"}
      display={display}
    >
      <Heading
        fontWeight={"medium"}
        fontSize={"lg"}
        letterSpacing={"0.1em"}
        color={"#FFFFFF"}
      >
        {startup.title}
      </Heading>
      <Box
        as={"button"}
        w={"100%"}
        position="relative"
        paddingBottom={"56.26%"}
        borderRadius={"12px"}
        overflow={"hidden"}
        border={"1px solid #9BE7FF"}
        transition="box-shadow 0.2s ease-in-out"
        _hover={{
          boxShadow: "0px 0px 5px 2px #8FE4FF",
        }}
        onClick={() => {
          setWebsiteAccess((prevState) => {
            const updatedState = [...prevState];
            updatedState[index] = true;
            return updatedState;
          });
        }}
      >
        {!websiteAccess[index] && (
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
            gap={"15px"}
            w={"100%"}
            h={"100%"}
            bgColor={"rgba(255, 122, 0, 0.1)"}
            backdropFilter={"blur(0.5px)"}
            zIndex={"1"}
            transition="opacity 0.2s ease-in-out"
            opacity={0}
            _hover={{ opacity: 1 }}
          >
            <ViewIcon color={"#FFFFFF"} />
            <Heading
              fontWeight={"medium"}
              fontSize={"xl"}
              letterSpacing={"0.1em"}
              color={"#FFFFFF"}
            >
              Preview
            </Heading>
          </Flex>
        )}
        <Box
          position={"absolute"}
          top={"0"}
          left={"0"}
          right={"0"}
          bottom={"0"}
          overflow={"hidden"}
        >
          {websiteAccess[index] ? (
            <iframe
              src={startup.website}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              title="Website"
            />
          ) : (
            <Image
              src={startup.image}
              alt={"Startup image"}
              width={1920}
              height={1080}
              layout="responsive"
            />
          )}
        </Box>
      </Box>
      <Box w={"100%"} h={"1px"} bgColor={"#9BE7FF"} />
      <Heading
        fontWeight={"medium"}
        fontSize={"sm"}
        letterSpacing={"0.1em"}
        color={"#FFFFFF"}
      >
        {startup.description}
      </Heading>
    </Flex>
  );
};

export default StartupsDisplayBase;
