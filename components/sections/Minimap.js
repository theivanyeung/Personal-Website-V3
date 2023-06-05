import { useState, useEffect } from "react";

import { Flex, Heading } from "@chakra-ui/react";

import { motion } from "framer-motion";

const Minimap = (props) => {
  const { visibleSection, minimapControls } = props;

  const [map, setMap] = useState([
    { section: "Vigama", visible: false },
    { section: "Startups", visible: false },
    { section: "Projects", visible: false },
    { section: "About Me", visible: false },
  ]);

  useEffect(() => {
    setMap((prevMap) =>
      prevMap.map((item) =>
        item.section === visibleSection
          ? { ...item, visible: true }
          : { ...item, visible: false }
      )
    );
  }, [visibleSection]);

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"25px"}
      paddingY={"60px"}
    >
      {map.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          animate={minimapControls}
          style={{ width: "65%", height: "60px" }}
        >
          <Flex
            key={index}
            justifyContent={"center"}
            alignItems={"center"}
            transition="box-shadow 0.2s ease-in-out, background 0.2s ease-in-out"
            background={
              item.visible
                ? "rgba(143, 228, 255, 0.5)"
                : "rgba(92, 149, 167, 0.5)"
            }
            border={"1px solid #FFFFFF"}
            borderRadius={"12px"}
            backdropFilter={"blur(7.5px)"}
            boxShadow={
              item.visible
                ? "0px 0px 10px 5px #8FE4FF"
                : "0px 0px 5px 2px #8FE4FF"
            }
            paddingX={"10px"}
            paddingY={"10px"}
            w={"100%"}
            h={"100%"}
          >
            <Heading
              width={"fit-content"}
              fontWeight={"medium"}
              fontSize={"md"}
              letterSpacing={"0.1em"}
              color={"#FFFFFF"}
            >
              {item.section}
            </Heading>
          </Flex>
        </motion.div>
      ))}
    </Flex>
  );
};

export default Minimap;
