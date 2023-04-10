import Image from "next/image";

import { Flex, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

import { LinkIcon } from "@chakra-ui/icons";

import { ABOUT_DESCRIPTION } from "../../../content";
import { InterestList, SocialList, OtherLinkList } from "../../../constants";

const AboutDisplayBase = (props) => {
  return (
    <Flex
      flexDirection={"column"}
      h={"100%"}
      w={"750px"}
      maxWidth={"100%"}
      paddingX={"50px"}
      paddingY={"25px"}
      gap={"15px"}
      display={props.display}
    >
      <Heading
        fontWeight={"medium"}
        fontSize={"xl"}
        letterSpacing={"0.1em"}
        color={"#FFFFFF"}
      >
        A Bit About Me
      </Heading>
      <Heading
        fontWeight={"medium"}
        fontSize={"md"}
        letterSpacing={"0.1em"}
        color={"#FFFFFF"}
      >
        {ABOUT_DESCRIPTION}
      </Heading>
      <Flex
        flexDirection={"column"}
        bgColor={"rgba(255, 255, 255, 0.25)"}
        border={"1px solid #FFFFFF"}
        borderRadius={"12px"}
        gap={"5px"}
        padding={"10px"}
        boxShadow={"0px 0px 3px 1px #FFFFFF"}
      >
        <Heading
          fontWeight={"medium"}
          fontSize={"md"}
          letterSpacing={"0.1em"}
          color={"#FFFFFF"}
        >
          Things I Like To Discuss About:
        </Heading>
        <UnorderedList>
          {InterestList.map((item, index) => (
            <ListItem key={index} color={"#FFFFFF"}>
              <Heading
                fontWeight={"medium"}
                fontSize={"sm"}
                letterSpacing={"0.1em"}
              >
                {item}
              </Heading>
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
      <List title={"Socials"} list={SocialList} />
      <List title={"Other Links"} list={OtherLinkList} />
    </Flex>
  );
};

const List = (props) => {
  const { title, list } = props;

  return (
    <Flex flexDirection={"column"} gap={"5px"}>
      <Heading
        fontWeight={"medium"}
        fontSize={"sm"}
        letterSpacing={"0.1em"}
        color={"#FFFFFF"}
      >
        {title}
      </Heading>
      <Flex justify={"center"} flexWrap={"wrap"} w={"100%"} gap={"10px"}>
        {list.map((item, index) => (
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
              <Image src={item.image} width={20} height={20} />
            ) : (
              <LinkIcon boxSize={"10px"} color={"#FFFFFF"} />
            )}
            <Heading
              fontWeight={"medium"}
              fontSize={"sm"}
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

export default AboutDisplayBase;
