import { Flex, Box, Heading } from "@chakra-ui/react";

import { motion } from "framer-motion";

import ProductsDisplay from "./Products/Display";

import { TARS_TITLE } from "../content";

const Products = (props) => {
  const { productsControl, secondProductsControl, thirdProductsControl } =
    props;

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={productsControl}
      style={{ width: "100%", height: "100%" }}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        h={"100vh"}
        scrollSnapAlign="start"
        bg="transparent"
      >
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(92, 149, 167, 0.25)",
            borderRadius: "24px",
            backdropFilter: "blur(5px)",
            paddingX: "10px",
            paddingY: "10px",
            width: "100%",
            height: "75%",
            maxWidth: "calc(100% - 10px)",
          }}
          animate={secondProductsControl}
        >
          <Flex
            w={"calc(100% - 25px)"}
            h={"calc(100% - 25px)"}
            border={"5px solid #9BE7FF"}
            paddingY={"20px"}
            borderRadius={"24px"}
          >
            <motion.div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "25px",
                width: "100%",
                height: "100%",
              }}
              animate={thirdProductsControl}
            >
              <Heading
                fontWeight={"bold"}
                fontSize={"3xl"}
                letterSpacing={"0.1em"}
                color={"#FFFFFF"}
              >
                {TARS_TITLE}
              </Heading>
              <Box w={"95%"} h={"2px"} bgColor={"#9BE7FF"} />
              <ProductsDisplay />
            </motion.div>
          </Flex>
        </motion.div>
      </Flex>
    </motion.div>
  );
};

export default Products;
