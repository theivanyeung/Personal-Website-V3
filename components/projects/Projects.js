import {
  Flex,
  Grid,
  GridItem,
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import ProjectsCard from "./components/Card";

import { ProjectList } from "../constants";

const Projects = (props) => {
  const { projectsControl, secondProjectsControl, thirdProjectsControl } =
    props;

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={projectsControl}
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
          animate={secondProjectsControl}
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
              animate={thirdProjectsControl}
            >
              <Heading
                fontWeight={"medium"}
                fontSize={"2xl"}
                letterSpacing={"0.1em"}
                color={"#FFFFFF"}
              >
                Projects
              </Heading>
              <Accordion
                allowMultiple={true}
                allowToggle={true}
                w={"95%"}
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
                {ProjectList.map((section, index) => (
                  <AccordionItem key={index}>
                    <AccordionButton
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Heading
                        fontWeight={"medium"}
                        fontSize={"lg"}
                        letterSpacing={"0.1em"}
                        color={"#FFFFFF"}
                      >
                        {section.title}
                      </Heading>
                      <AccordionIcon color={"#FFFFFF"} />
                    </AccordionButton>
                    <AccordionPanel>
                      <Flex
                        justify={"center"}
                        flexWrap={"wrap"}
                        w={"100%"}
                        gap={"50px"}
                      >
                        {section.projects.map((project, index) => (
                          <ProjectsCard key={index} project={project} />
                        ))}
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </Flex>
        </motion.div>
      </Flex>
    </motion.div>
  );
};

export default Projects;
