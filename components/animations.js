import { useEffect } from "react";

export const useVisualDisplayAnimation = (
  visibleSection,
  secondVisualDisplayControls
) => {
  useEffect(() => {
    if (visibleSection !== "Intro") {
      secondVisualDisplayControls.start({
        filter:
          "drop-shadow(0px 0px 150px #8FE4FF) drop-shadow(0px 0px 10px #8FE4FF)",
        transition: { delay: 0.6, duration: 0.2 },
      });
    } else {
      secondVisualDisplayControls.start({
        filter: "drop-shadow(0px 0px 0px #FFFFFF)",
        transition: { delay: 0.0, duration: 0.2 },
      });
    }
  }, [secondVisualDisplayControls, visibleSection]);
};

export const useMinimapAnimation = (
  visibleSection,
  visualDisplayControls,
  minimapControls
) => {
  useEffect(() => {
    if (visibleSection !== "Intro") {
      // VisualDisplay
      visualDisplayControls.start({
        x: 0,
        transition: { delay: 0.0, duration: 0.2 },
      });

      // Minimap
      minimapControls.start((i) => ({
        x: 0,
        transition: { delay: i === 0 ? 1 : i * 0.1 + 0.9, duration: 0.4 },
      }));
    } else {
      // VisualDisplay
      visualDisplayControls.start({
        x: -150,
        transition: { delay: 0.2, duration: 0.2 },
      });

      // Minimap
      minimapControls.start((i) => ({
        x: 300,
        transition: { delay: (4 - 1 - i) * 0.1, duration: 0.2 },
      }));
    }
  }, [minimapControls, visualDisplayControls, visibleSection]);
};

/**
 * Box Animation
 */

// Present Animation
const firstPresent = {
  x: 0,
  opacity: 1,
  transition: { delay: 0.0, duration: 0.2 },
};
const secondPresent = {
  boxShadow:
    "0px 0px 5px 2px #8FE4FF, inset 0px 0px 40px 25px rgba(143, 228, 255, 0.5)",
  transition: { delay: 0.4, duration: 0.2 },
};
const thirdPresent = {
  opacity: 1,
  transition: { delay: 0.6, duration: 0.2 },
};

// Retract Animation
const firstRetract = {
  x: "-75%",
  opacity: 0,
  transition: { delay: 0.2, duration: 0.2 },
};
const secondRetract = {
  boxShadow: "0px 0px 0px 0px #000000",
  transition: { delay: 0.0, duration: 0.2 },
};
const thirdRetract = {
  opacity: 0,
  transition: { delay: 0.0, duration: 0.2 },
};

export const useStartupsAnimation = (
  visibleSection,
  startupsControl,
  secondStartupsControl,
  thirdStartupsControl
) => {
  useEffect(() => {
    if (visibleSection === "Startups") {
      startupsControl.start(firstPresent);
      secondStartupsControl.start(secondPresent);
      thirdStartupsControl.start(thirdPresent);
    } else {
      startupsControl.start(firstRetract);
      secondStartupsControl.start(secondRetract);
      thirdStartupsControl.start(thirdRetract);
    }
  }, [startupsControl, visibleSection]);
};

export const useProductsAnimation = (
  visibleSection,
  productsControl,
  secondProductsControl,
  thirdProductsControl
) => {
  useEffect(() => {
    if (visibleSection === "Vesper") {
      productsControl.start(firstPresent);
      secondProductsControl.start(secondPresent);
      thirdProductsControl.start(thirdPresent);
    } else {
      productsControl.start(firstRetract);
      secondProductsControl.start(secondRetract);
      thirdProductsControl.start(thirdRetract);
    }
  }, [productsControl, visibleSection]);
};

export const useProjectsAnimation = (
  visibleSection,
  projectsControl,
  secondProjectsControl,
  thirdProjectsControl
) => {
  useEffect(() => {
    if (visibleSection === "Projects") {
      projectsControl.start(firstPresent);
      secondProjectsControl.start(secondPresent);
      thirdProjectsControl.start(thirdPresent);
    } else {
      projectsControl.start(firstRetract);
      secondProjectsControl.start(secondRetract);
      thirdProjectsControl.start(thirdRetract);
    }
  }, [projectsControl, visibleSection]);
};

export const useAboutAnimation = (
  visibleSection,
  aboutControl,
  secondAboutControl,
  thirdAboutControl
) => {
  useEffect(() => {
    if (visibleSection === "About") {
      aboutControl.start(firstPresent);
      secondAboutControl.start(secondPresent);
      thirdAboutControl.start(thirdPresent);
    } else {
      aboutControl.start(firstRetract);
      secondAboutControl.start(secondRetract);
      thirdAboutControl.start(thirdRetract);
    }
  }, [aboutControl, visibleSection]);
};
