import Image from "next/image";

import { Flex, Heading } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";

import { SocialList } from "./constants";

const Socials = () => {
  return (
    <Flex
      position={"fixed"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100vw"}
      paddingY={"15px"}
      paddingX={"25px"}
      zIndex={"2"}
    >
      <Flex justify={"center"} flexWrap={"wrap"} w={"100%"} gap={"10px"}>
        {SocialList.map((item, index) => (
          <Flex
            key={index}
            as={"a"}
            href={item.link}
            target={"_blank"}
            justifyContent={"center"}
            alignItems={"center"}
            bgColor={"rgba(255, 255, 255, 0.25)"}
            borderRadius={"6px"}
            paddingX={"10px"}
            paddingY={"5px"}
            transition="filter 0.2s ease-in-out"
            _hover={{
              filter: "drop-shadow(0px 0px 5px #FFFFFF)",
            }}
            gap={"10px"}
          >
            {item.image ? (
              <Image src={item.image} width={25} height={25} />
            ) : (
              <LinkIcon boxSize={"15px"} color={"#FFFFFF"} />
            )}
            <Heading
              fontWeight={"medium"}
              fontSize={"md"}
              letterSpacing={"0.1em"}
              color={"#FFFFFF"}
            >
              {item.title}
            </Heading>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Socials;
