import { useEffect } from "react";

import Image from "next/image";

import { Flex, Box } from "@chakra-ui/react";

import { motion, useAnimation } from "framer-motion";

const VisualDisplay = (props) => {
  const { visualDisplayControls, secondVisualDisplayControls } = props;

  return (
    <motion.div
      animate={visualDisplayControls}
      style={{ width: "100%", height: "100%" }}
    >
      <Flex alignItems={"center"} w={"100%"} h={"100%"}>
        <motion.div
          style={{
            width: "50%",
          }}
          // filter={
          //   "drop-shadow(0px 0px 150px #8FE4FF) drop-shadow(0px 0px 150px #8FE4FF) drop-shadow(0px 0px 10px #8FE4FF)"
          // }
          animate={secondVisualDisplayControls}
        >
          <Image
            src={"/images/projector.png"}
            alt={"Projector"}
            width={438}
            height={2568}
            layout="responsive"
          />
        </motion.div>
      </Flex>
    </motion.div>
  );
};

export default VisualDisplay;
