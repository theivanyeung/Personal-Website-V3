import { useState, useEffect } from "react";

import IntroHeroFull from "./Hero/Full";
import IntroHeroBase from "./Hero/Base";

import { INTROGREETING, INTROINTRODUCTION } from "../../content";
import { Button } from "@chakra-ui/react";

const IntroHero = (props) => {
  // const [greeting, setGreeting] = useState("");
  // const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  // const [introduction, setIntroduction] = useState("");
  // const [currentIntroductionIndex, setCurrentIntroductionIndex] = useState(0);

  // useEffect(() => {
  //   if (currentGreetingIndex < INTROGREETING.length) {
  //     const timeout = setTimeout(() => {
  //       setGreeting(greeting + INTROGREETING[currentGreetingIndex]);
  //       setCurrentGreetingIndex(currentGreetingIndex + 1);
  //     }, 25);

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  // }, [INTROGREETING, greeting, currentGreetingIndex]);

  // useEffect(() => {
  //   if (
  //     currentGreetingIndex === INTROGREETING.length &&
  //     currentIntroductionIndex < INTROINTRODUCTION.length
  //   ) {
  //     const timeout = setTimeout(() => {
  //       setIntroduction(
  //         introduction + INTROINTRODUCTION[currentIntroductionIndex]
  //       );
  //       setCurrentIntroductionIndex(currentIntroductionIndex + 1);
  //     }, 25);

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  // }, [INTROINTRODUCTION, greeting, currentIntroductionIndex]);

  return (
    <>
      {/** FULL VIEW */}

      <IntroHeroFull
        greeting={INTROGREETING}
        introduction={INTROINTRODUCTION}
        display={{
          xxl: "flex",
          xl: "flex",
          lg: "flex",
          md: "none",
          sm: "none",
          base: "none",
        }}
      />

      {/** BASE VIEW */}
      <IntroHeroBase
        greeting={INTROGREETING}
        introduction={INTROINTRODUCTION}
        display={{
          xxl: "none",
          xl: "none",
          lg: "none",
          md: "flex",
          sm: "flex",
          base: "flex",
        }}
      />
    </>
  );
};

export default IntroHero;
