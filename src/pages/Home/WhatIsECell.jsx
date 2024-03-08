import Lottie from "lottie-react";
import lot from "../../assets/Animation - 1705429785180.json";
import { TiLightbulb } from "react-icons/ti";
import Button from "../../components/Button/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../styles/Variant";
function WhatIsECell() {
  return (
    <div className="flex flex-col lg:flex w-[100vw] lg:w-full justify-center items-center lg:flex-row my-[8%] lg:my-[4%] ">
      <motion.div
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        className="w-full lg:w-full flex justify-center items-center"
      >
        <Lottie
          animationData={lot}
          loop={true}
          className="lg:flex w-3/4 lg:w-2/3 opacity-90 ml-[-10px] lg:ml-[-80px]"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left")}
        initial="hidden"
        whileInView={"show"}
        className="dark:text-white w-11/12 lg:w-4/5 flex-col justify-center items-center lg:items-start lg:justify-center "
      >
        <div className="flex justify-center items-center lg:justify-start">
          <h2 className="!font-medium !text-4xl lg:!text-5xl ">
            What is <span className="text-[#4d55ba]">E-cell</span> ?
          </h2>
          <TiLightbulb className="ml-2 self-center w-8 h-10" />
        </div>
        <p className="!text-md text-center lg:text-left mt-10 w-[100%] lg:w-[85%] font-medium dark:font-light">
          KIET E-Cell is a student body of KIET, formed in 2014 with the aim to
          promote an entrepreneurial culture among the young minds of
          today&apos;s generation, and to encourage an entrepreneurial mindset
          in an aspiring individual to convert their &quot;Drop of an Idea into
          an Ocean of Reality&quot;.
        </p>
        <div className="w-full  flex justify-center items-center lg:justify-start mt-5">
          <Button />
        </div>
      </motion.div>
    </div>
  );
}

export default WhatIsECell;
