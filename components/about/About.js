import {
  Flex,
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import { ABOUT_DESCRIPTION } from "../content";
import { InterestList } from "../constants";

import AboutDisplay from "./About/Display";

const About = (props) => {
  const { aboutControl, secondAboutControl, thirdAboutControl } = props;

  return (
    <motion.div initial={{ x: 0 }} style={{ width: "100%", height: "100%" }}>
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
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundImage: "url('/images/chrysippos.png')",
            backgroundColor: "rgba(92, 149, 167, 0.25)",
            borderRadius: "24px",
            backdropFilter: "blur(5px)",
            paddingX: "10px",
            paddingY: "10px",
            width: "100%",
            height: "75%",
            maxWidth: "calc(100% - 10px)",
          }}
        >
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            w={"calc(100% - 25px)"}
            h={"calc(100% - 25px)"}
            border={"5px solid #9BE7FF"}
            paddingY={"20px"}
            borderRadius={"24px"}
          >
            <motion.div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                width={"98%"}
                height={"98%"}
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
              >
                <AboutDisplay />
              </Box>
            </motion.div>
          </Flex>
        </motion.div>
      </Flex>
    </motion.div>
  );
};

export default About;
