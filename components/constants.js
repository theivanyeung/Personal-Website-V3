import {
  DREAMMATE_TITLE,
  DREAMMATE_DESCRIPTION,
  PRODICITY_TITLE,
  PRODICITY_DESCRIPTION,
  PRODUCT_POINT_ONE,
  PRODUCT_POINT_TWO,
  PRODUCT_POINT_THREE,
  PRODICITY_PRODUCTIVITY_TITLE,
  PRODICITY_PRODUCTIVITY_DESCRIPTION,
  LANGSWAP_TITLE,
  LANGSWAP_DESCRIPTION,
  TITANACACIA_TITLE,
  TITANACACIA_DESCRIPTION,
  HEXAHACKS_TITLE,
  HEXAHACKS_DESCRIPTION,
  IVANBUILDTHINGS_TITLE,
  IVANBUILDTHINGS_DESCRIPTION,
  IPIANO_TITLE,
  IPIANO_DESCRIPTION,
  IVANDOG_TITLE,
  IVANDOG_DESCRIPTION,
  EVERYOTHERMORNING_TITLE,
  EVERYOTHERMORNING_DESCRIPTION,
  SNAKEAI_TITLE,
  SNAKEAI_DESCRIPTION,
  SNNVISUALIZATION_TITLE,
  SNNVISUALIZATION_DESCRIPTION,
} from "./content";

import { ChatIcon, Search2Icon, SunIcon } from "@chakra-ui/icons";

export const StartupList = [
  {
    name: "DreamMate",
    title: DREAMMATE_TITLE,
    description: DREAMMATE_DESCRIPTION,
    image: "/images/dreammate-display.png",
    website: "https://www.dreammate.io/",
  },
  {
    name: "Prodicity",
    title: PRODICITY_TITLE,
    description: PRODICITY_DESCRIPTION,
    image: "/images/prodicity-display.png",
    website: "https://prodicity.vercel.app/",
  },
];

export const ProductPoints = [
  { icon: ChatIcon, point: PRODUCT_POINT_ONE },
  { icon: Search2Icon, point: PRODUCT_POINT_TWO },
  { icon: SunIcon, point: PRODUCT_POINT_THREE },
];

export const ProjectList = [
  {
    title: "Main Projects",
    projects: [
      {
        image: "/images/projects/snake-ai.png",
        title: SNAKEAI_TITLE,
        date: "",
        description: SNAKEAI_DESCRIPTION,
        link: "https://github.com/theivanyeung/snake-ai",
      },
      {
        image: "/images/projects/snn-visualization.png",
        title: SNNVISUALIZATION_TITLE,
        date: "",
        description: SNNVISUALIZATION_DESCRIPTION,
        link: "https://github.com/theivanyeung/snn-visualization",
      },
    ],
  },
  {
    title: "YouTube Channels",
    projects: [
      {
        image: "/images/projects/ivanbuildthings.png",
        title: IVANBUILDTHINGS_TITLE,
        date: "",
        description: IVANBUILDTHINGS_DESCRIPTION,
        link: "https://www.youtube.com/@ivanbuildthings3317",
      },
      {
        image: "/images/projects/ipiano.png",
        title: IPIANO_TITLE,
        date: "",
        description: IPIANO_DESCRIPTION,
        link: "https://www.youtube.com/@ipiano4378",
      },
      {
        image: "/images/projects/ivandog.png",
        title: IVANDOG_TITLE,
        date: "",
        description: IVANDOG_DESCRIPTION,
        link: "https://www.youtube.com/@ivandog3022",
      },
      {
        image: "/images/projects/everyothermorning.png",
        title: EVERYOTHERMORNING_TITLE,
        date: "",
        description: EVERYOTHERMORNING_DESCRIPTION,
        link: "https://www.youtube.com/@everyothermorning2152",
      },
    ],
  },
  {
    title: "Past Projects",
    projects: [
      {
        image: "/images/projects/prodicity.png",
        title: PRODICITY_PRODUCTIVITY_TITLE,
        date: "04.2022 - 07.2022",
        description: PRODICITY_PRODUCTIVITY_DESCRIPTION,
        link: "",
      },
      {
        image: "/images/projects/langswap.png",
        title: LANGSWAP_TITLE,
        date: "10.2019??? 01.2022 - 04.2022",
        description: LANGSWAP_DESCRIPTION,
        link: "",
      },
      {
        image: "/images/projects/titanacacia.png",
        title: TITANACACIA_TITLE,
        date: "06.2020 - 07.2020",
        description: TITANACACIA_DESCRIPTION,
        link: "https://www.titanacacia.com",
      },
      {
        image: "/images/projects/hexahacks.png",
        title: HEXAHACKS_TITLE,
        date: "11.2019 - 04.2020",
        description: HEXAHACKS_DESCRIPTION,
        link: "https://www.hexahacks.com",
      },
    ],
  },
];

export const InterestList = [
  "STEAM: Science, Technology, Engineering, Arts, Maths",
  "Classical/Common-sense Progressivism & Transcendentalism",
  "Philosophy of All Things",
  "Artifical Intelligence & Neuromorphic Engineering",
  "Simulation Theory, Theory of Everything",
  "Social Organization",
  "Eastern bloc, slavic culture, hardbass",
];

export const SocialList = [
  {
    image: "/images/icons/gmail.png",
    title: "theivanyeung@gmail.com",
    link: "",
  },
  {
    image: "/images/icons/linkedin.png",
    title: "Ivan Yeung",
    link: "https://www.linkedin.com/in/theivanyeung/",
  },
  {
    image: "/images/icons/twitter.png",
    title: "@theivanyeung",
    link: "https://twitter.com/theivanyeung",
  },
  {
    image: "/images/icons/github.png",
    title: "@theivanyeung",
    link: "https://github.com/theivanyeung",
  },
  {
    image: "/images/icons/resume.png",
    title: "CS Resume (2023)",
    link: "",
    // link: "/resume.pdf",
  },
];

export const OtherLinkList = [
  { title: "Personal Website V2", link: "https://v2.ivanyeung.dev/" },
];
