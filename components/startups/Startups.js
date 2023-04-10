import { useEffect, useState } from "react";

import {
  Flex,
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import StartupsDisplay from "./Startups/Display";

import { StartupList } from "../constants";

const Startups = (props) => {
  const { startupsControl, secondStartupsControl, thirdStartupsControl } =
    props;

  const [websiteAccess, setWebsiteAccess] = useState(
    StartupList.map(() => false)
  );

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={startupsControl}
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
          animate={secondStartupsControl}
        >
          <Flex
            justifyContent={"center"}
            w={"calc(100% - 25px)"}
            h={"calc(100% - 25px)"}
            border={"5px solid #9BE7FF"}
            paddingY={"20px"}
            borderRadius={"24px"}
          >
            <motion.div animate={thirdStartupsControl}>
              {/** FULL VIEW */}
              <Tabs
                isFitted
                variant={"unstyled"}
                alignItems={"center"}
                flexDirection={"column"}
                w={"98%"}
                h={"100%"}
                display={{
                  xxl: "flex",
                  xl: "none",
                  lg: "none",
                  md: "none",
                  sm: "none",
                  base: "none",
                }}
              >
                <TabList w={"75%"}>
                  {StartupList.map((startup, index) => (
                    <Tab
                      key={index}
                      w={"50%"}
                      borderBottom={"1px solid #9BE7FF"}
                      _selected={{
                        borderRadius: "12px 12px 0px 0px",
                        borderWidth: "1px 1px 0px 1px",
                        borderStyle: "solid",
                        borderColor: "#9BE7FF",
                        textShadow: "0px 0px 10px #8FE4FF",
                      }}
                    >
                      <Heading
                        fontWeight={"medium"}
                        fontSize={"xl"}
                        letterSpacing={"0.1em"}
                        color={"#FFFFFF"}
                      >
                        {startup.name}
                      </Heading>
                    </Tab>
                  ))}
                </TabList>

                <Box
                  align={"center"}
                  mt={"25px"}
                  h={"100%"}
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
                  <TabPanels>
                    {StartupList.map((startup, index) => (
                      <TabPanel key={index}>
                        <StartupsDisplay
                          startup={startup}
                          index={index}
                          websiteAccess={websiteAccess}
                          setWebsiteAccess={setWebsiteAccess}
                        />
                      </TabPanel>
                    ))}
                  </TabPanels>
                </Box>
              </Tabs>

              {/** BASE VIEW */}
              <Tabs
                isFitted
                variant={"unstyled"}
                alignItems={"center"}
                flexDirection={"column"}
                w={"98%"}
                h={"100%"}
                display={{
                  xxl: "none",
                  xl: "flex",
                  lg: "flex",
                  md: "flex",
                  sm: "flex",
                  base: "flex",
                }}
              >
                <TabList w={"75%"}>
                  {StartupList.map((startup, index) => (
                    <Tab
                      key={index}
                      w={"50%"}
                      borderBottom={"1px solid #9BE7FF"}
                      _selected={{
                        borderRadius: "12px 12px 0px 0px",
                        borderWidth: "1px 1px 0px 1px",
                        borderStyle: "solid",
                        borderColor: "#9BE7FF",
                        textShadow: "0px 0px 10px #8FE4FF",
                      }}
                    >
                      <Heading
                        fontWeight={"medium"}
                        fontSize={"md"}
                        letterSpacing={"0.1em"}
                        color={"#FFFFFF"}
                      >
                        {startup.name}
                      </Heading>
                    </Tab>
                  ))}
                </TabList>

                <Box
                  align={"center"}
                  mt={"25px"}
                  h={"100%"}
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
                  <TabPanels>
                    {StartupList.map((startup, index) => (
                      <TabPanel key={index}>
                        <StartupsDisplay
                          startup={startup}
                          index={index}
                          websiteAccess={websiteAccess}
                          setWebsiteAccess={setWebsiteAccess}
                        />
                      </TabPanel>
                    ))}
                  </TabPanels>
                </Box>
              </Tabs>
            </motion.div>
          </Flex>
        </motion.div>
      </Flex>
    </motion.div>
  );
};

export default Startups;
