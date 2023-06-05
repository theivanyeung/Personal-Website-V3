import Image from "next/image";
import { useRouter } from "next/router";

import {
  Flex,
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  Button,
  Link,
} from "@chakra-ui/react";

import {
  PRODUCT_HEADER,
  PRODUCT_DESCRIPTION,
  PRODUCT_COMMENT,
  PRODUCT_LINK,
} from "../../../content";
import { ProductPoints } from "../../../constants";

const ProductsDisplayFull = (props) => {
  const router = useRouter();

  return (
    <Flex
      justifyContent={"space-between"}
      w={"95%"}
      h={"100%"}
      gap={"25px"}
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
        paddingY={"20px"}
        paddingX={"15px"}
        w={"50%"}
        minH={"350px"}
        h={"100%"}
        gap={"25px"}
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
        <Button
          align={"center"}
          bg={"rgba(155, 231, 255, 0.5)"}
          padding={"15px"}
          borderRadius={"12px"}
          _hover={{
            bg: "linear-gradient(104.37deg, #00E2FF 0%, #DA00FF 100%)",
          }}
          onClick={() => router.push(PRODUCT_LINK)}
        >
          <Heading
            fontWeight={"medium"}
            fontSize={"xl"}
            letterSpacing={"0.1em"}
            color={"#FFFFFF"}
          >
            {PRODUCT_COMMENT}
          </Heading>
        </Button>
      </Flex>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        paddingY={"20px"}
        paddingX={"15px"}
        w={"50%"}
        minH={"450px"}
        h={"100%"}
        gap={"25px"}
        border={"1px solid #9BE7FF"}
        borderRadius={"12px"}
      >
        <Heading
          fontWeight={"medium"}
          fontSize={"2xl"}
          letterSpacing={"0.1em"}
          color={"#FFFFFF"}
        >
          {PRODUCT_HEADER}
        </Heading>
        <Box w={"100%"} h={"1px"} bgColor={"#9BE7FF"} />
        <Heading
          fontWeight={"medium"}
          fontSize={"md"}
          letterSpacing={"0.1em"}
          color={"#FFFFFF"}
        >
          {PRODUCT_DESCRIPTION}
        </Heading>
        <List spacing={5} w={"100%"}>
          {ProductPoints.map((item, index) => (
            <ListItem key={index} display={"flex"}>
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

export default ProductsDisplayFull;
