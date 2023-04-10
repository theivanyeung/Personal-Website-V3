import { useEffect, useState } from "react";

import { Box, Flex, Heading, Fade, useDisclosure } from "@chakra-ui/react";

import { InView } from "react-intersection-observer";

import { useAnimation } from "framer-motion";

import SEO from "../components/SEO";
import Socials from "../components/Socials";
import Minimap from "../components/sections/Minimap";
import VisualDisplay from "../components/sections/VisualDisplay";
import Intro from "../components/intro/Intro";
import Startups from "../components/startups/Startups";
import Products from "../components/products/Products";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";

import {
  visualDisplayAnimation,
  minimapAnimation,
  startupsAnimation,
  productsAnimation,
  projectsAnimation,
  aboutAnimation,
} from "../components/animations";

import {
  SEO_TITLE,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_URL,
  SEO_IMAGE,
} from "../components/content";

const Home = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [visibleSection, setVisibleSection] = useState(null);
  const [finishedIntro, setFinishedIntro] = useState(false);

  // VisualDisplay Animation

  const visualDisplayControls = useAnimation();
  const secondVisualDisplayControls = useAnimation();

  visualDisplayAnimation(visibleSection, secondVisualDisplayControls);

  // Minimap Animation

  const minimapControls = useAnimation();

  minimapAnimation(visibleSection, visualDisplayControls, minimapControls);

  // Startups Animation

  const startupsControl = useAnimation();
  const secondStartupsControl = useAnimation();
  const thirdStartupsControl = useAnimation();

  startupsAnimation(
    visibleSection,
    startupsControl,
    secondStartupsControl,
    thirdStartupsControl
  );

  // Products Animation

  const productsControl = useAnimation();
  const secondProductsControl = useAnimation();
  const thirdProductsControl = useAnimation();

  productsAnimation(
    visibleSection,
    productsControl,
    secondProductsControl,
    thirdProductsControl
  );

  // Projects Animation

  const projectsControl = useAnimation();
  const secondProjectsControl = useAnimation();
  const thirdProjectsControl = useAnimation();

  projectsAnimation(
    visibleSection,
    projectsControl,
    secondProjectsControl,
    thirdProjectsControl
  );

  // About Animation

  const aboutControl = useAnimation();
  const secondAboutControl = useAnimation();
  const thirdAboutControl = useAnimation();

  aboutAnimation(
    visibleSection,
    aboutControl,
    secondAboutControl,
    thirdAboutControl
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinishedIntro(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (finishedIntro) {
      onToggle();
    }
  }, [finishedIntro]);

  return (
    <>
      <SEO
        title={SEO_TITLE}
        description={SEO_DESCRIPTION}
        keywords={SEO_KEYWORDS}
        url={SEO_URL}
        image={SEO_IMAGE}
      />
      <Fade in={isOpen}>
        {visibleSection === "Intro" && <Socials />}
        <Flex
          position={"fixed"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"100vw"}
          h={"100vh"}
        >
          <Flex
            position={"absolute"}
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
            w={"95%"}
            h={"95%"}
          >
            <Heading
              fontWeight={"normal"}
              fontSize={"sm"}
              letterSpacing={"0.1em"}
              color={"#FFFFFF"}
            >
              © 2023 Ivan Yeung. All Rights Reserved.
            </Heading>
          </Flex>
        </Flex>
      </Fade>

      {/** FULL VIEW */}
      <Flex
        w="100vw"
        h="100vh"
        overflow={"hidden"}
        zIndex={"1"}
        position={"relative"}
        display={{
          xxl: "flex",
          xl: "none",
          lg: "none",
          md: "none",
          sm: "none",
          base: "none",
        }}
      >
        <Box w={"250px"}>
          <VisualDisplay
            visualDisplayControls={visualDisplayControls}
            secondVisualDisplayControls={secondVisualDisplayControls}
          />
        </Box>
        <Box
          bg={"transparent"}
          w={"calc(100% - 500px)"}
          h={"100vh"}
          overflowY={"scroll"}
          overflowX={"hidden"}
          css={{
            scrollSnapType: "y mandatory",
          }}
          sx={{
            "::-webkit-scrollbar": {
              width: "0px",
            },
            "::-webkit-scrollbar-thumb": {
              background: "#455765",
              borderRadius: "0px",
            },
          }}
        >
          <InView
            id="intro"
            threshold={0.5}
            onChange={(inView) => inView && setVisibleSection("Intro")}
          >
            <Intro finishedIntro={finishedIntro} />
          </InView>
          {finishedIntro && (
            <>
              <InView
                id="startups"
                threshold={0.5}
                onChange={(inView) => inView && setVisibleSection("Startups")}
              >
                <Startups
                  startupsControl={startupsControl}
                  secondStartupsControl={secondStartupsControl}
                  thirdStartupsControl={thirdStartupsControl}
                />
              </InView>
              <InView
                id="products"
                threshold={0.5}
                onChange={(inView) => inView && setVisibleSection("Products")}
              >
                <Products
                  productsControl={productsControl}
                  secondProductsControl={secondProductsControl}
                  thirdProductsControl={thirdProductsControl}
                />
              </InView>
              <InView
                id="projects"
                threshold={0.5}
                onChange={(inView) => inView && setVisibleSection("Projects")}
              >
                <Projects
                  projectsControl={projectsControl}
                  secondProjectsControl={secondProjectsControl}
                  thirdProjectsControl={thirdProjectsControl}
                />
              </InView>
              <InView
                id="about"
                threshold={0.5}
                onChange={(inView) => inView && setVisibleSection("About Me")}
              >
                <About
                  aboutControl={aboutControl}
                  secondAboutControl={secondAboutControl}
                  thirdAboutControl={thirdAboutControl}
                />
              </InView>
            </>
          )}
        </Box>
        <Box w={"250px"}>
          <Minimap
            visibleSection={visibleSection}
            minimapControls={minimapControls}
          />
        </Box>
      </Flex>

      {/** BASE VIEW */}
      <Box
        bg="transparent"
        w="100vw"
        h="100vh"
        overflowY="scroll"
        overflowX="hidden"
        zIndex={"10%"}
        position={"relative"}
        css={{
          scrollSnapType: "y mandatory",
        }}
        sx={{
          "::-webkit-scrollbar": {
            width: "0px",
          },
          "::-webkit-scrollbar-thumb": {
            background: "#455765",
            borderRadius: "0px",
          },
        }}
        display={{
          xxl: "none",
          xl: "block",
          lg: "block",
          md: "block",
          sm: "block",
          base: "block",
        }}
      >
        <InView
          id="intro"
          threshold={0.5}
          onChange={(inView) => inView && setVisibleSection("intro")}
        >
          <Intro finishedIntro={finishedIntro} />
        </InView>
        {finishedIntro && (
          <>
            <InView
              id="startups"
              threshold={0.5}
              onChange={(inView) => inView && setVisibleSection("Startups")}
            >
              <Startups
                startupsControl={startupsControl}
                secondStartupsControl={secondStartupsControl}
                thirdStartupsControl={thirdStartupsControl}
              />
            </InView>
            <InView
              id="products"
              threshold={0.5}
              onChange={(inView) => inView && setVisibleSection("Products")}
            >
              <Products
                productsControl={productsControl}
                secondProductsControl={secondProductsControl}
                thirdProductsControl={thirdProductsControl}
              />
            </InView>
            <InView
              id="projects"
              threshold={0.5}
              onChange={(inView) => inView && setVisibleSection("Projects")}
            >
              <Projects
                projectsControl={projectsControl}
                secondProjectsControl={secondProjectsControl}
                thirdProjectsControl={thirdProjectsControl}
              />
            </InView>
            <InView
              id="about"
              threshold={0.5}
              onChange={(inView) => inView && setVisibleSection("About")}
            >
              <About
                aboutControl={aboutControl}
                secondAboutControl={secondAboutControl}
                thirdAboutControl={thirdAboutControl}
              />
            </InView>
          </>
        )}
      </Box>
    </>
  );
};

export default Home;
