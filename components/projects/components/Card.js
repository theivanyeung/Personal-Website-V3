import Image from "next/image";

import { Flex, Box, Heading } from "@chakra-ui/react";

const ProjectsCard = (props) => {
  const { project } = props;

  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      paddingX={"15px"}
      paddingY={"25px"}
      w={"384px"}
      gap={"10px"}
      bgColor={"rgba(255, 165, 83, 0.25)"}
      border={"1px solid #FFA553"}
      borderRadius={"12px"}
      boxShadow={"0px 0px 5px 2px rgba(255, 165, 83, 0.75)"}
    >
      {project.link ? (
        <Box
          as={"a"}
          href={project.link}
          target={"_blank"}
          w={"100%"}
          borderRadius={"12px"}
          overflow={"hidden"}
          transition="box-shadow 0.2s ease-in-out"
          _hover={{
            boxShadow: "0px 0px 5px 2px #FFFFFF",
          }}
        >
          <Image
            src={project.image}
            alt={"Project Image"}
            width={1920}
            height={1080}
            layout="responsive"
          />
        </Box>
      ) : (
        <Box w={"100%"} borderRadius={"12px"} overflow={"hidden"}>
          <Image
            src={project.image}
            width={1920}
            height={1080}
            layout="responsive"
          />
        </Box>
      )}
      <Heading
        w={"100%"}
        textAlign={"center"}
        fontWeight={"medium"}
        fontSize={"lg"}
        letterSpacing={"0.1em"}
        color={"#FFFFFF"}
      >
        {project.title}
      </Heading>
      <Heading
        fontWeight={"medium"}
        fontSize={"md"}
        letterSpacing={"0.1em"}
        color={"#FFFFFF"}
      >
        {project.date}
      </Heading>
      <Box w={"100%"} h={"1px"} bgColor={"#FFA553"} />
      <Heading
        w={"90%"}
        fontWeight={"medium"}
        fontSize={"sm"}
        letterSpacing={"0.1em"}
        color={"#FFFFFF"}
      >
        {project.description}
      </Heading>
    </Flex>
  );
};

export default ProjectsCard;
