import Image from "next/image";

import { Flex, Box, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";

import { TARS_HEADER, TARS_DESCRIPTION, TARS_COMMENT } from "../../../content";
import { TARSPoints } from "../../../constants";

const ProductsDisplayBase = (props) => {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"95%"}
      h={"100%"}
      gap={"10px"}
      overflowX={"hidden"}
      overflowY={"scroll"}
      sx={{
        "::-webkit-scrollbar": {
          width: "5px",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#9BE7FF",
          borderRadius: "5px",
        },
      }}
      display={props.display}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        paddingX={"5px"}
        w={"95%"}
        gap={"15px"}
      >
        <Box
          w={"100%"}
          border={"1px solid #9BE7FF"}
          borderRadius={"12px"}
          overflow={"hidden"}
        >
          <Image
            src={"/images/tars-ai-interface.gif"}
            alt={"TARS AI Interface"}
            width={1920}
            height={1080}
            layout="responsive"
          />
        </Box>
        <Box
          align={"center"}
          bgColor={"rgba(155, 231, 255, 0.5)"}
          padding={"7px"}
          borderRadius={"12px"}
        >
          <Heading
            fontWeight={"medium"}
            fontSize={"md"}
            letterSpacing={"0.1em"}
            color={"#FFFFFF"}
          >
            {TARS_COMMENT}
          </Heading>
        </Box>
      </Flex>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        paddingY={"20px"}
        paddingX={"15px"}
        w={"95%"}
        gap={"15px"}
        border={"1px solid #9BE7FF"}
        borderRadius={"12px"}
      >
        <Heading
          fontWeight={"medium"}
          fontSize={"lg"}
          letterSpacing={"0.1em"}
          color={"#FFFFFF"}
        >
          {TARS_HEADER}
        </Heading>
        <Box w={"100%"} h={"1px"} bgColor={"#9BE7FF"} />
        <Heading
          fontWeight={"medium"}
          fontSize={"sm"}
          letterSpacing={"0.1em"}
          color={"#FFFFFF"}
        >
          {TARS_DESCRIPTION}
        </Heading>
        <List spacing={5} w={"100%"}>
          {TARSPoints.map((item, index) => (
            <ListItem
              key={index}
              display={"flex"}
              alignItems={"center"}
              gap={"5px"}
            >
              <ListIcon as={item.icon} color={"#9BE7FF"} />
              <Heading
                fontWeight={"medium"}
                fontSize={"md"}
                letterSpacing={"0.1em"}
                color={"#FFFFFF"}
              >
                {item.point}
              </Heading>
            </ListItem>
          ))}
        </List>
      </Flex>
    </Flex>
  );
};

export default ProductsDisplayBase;
