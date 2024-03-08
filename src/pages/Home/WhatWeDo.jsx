import { useEffect } from "react";
import "./WhatWeDo.css";
import Lottie from "lottie-react";
import { VanillaTilt } from "../../styles/vanilla-tilt";
import lot1 from "../../assets/whatWeDo/Animation - 1705531097237.json";
import lot21 from "../../assets/whatWeDo/Animation - 1705531132837.json";
import lot22 from "../../assets/whatWeDo/Animation - 1705531132837 (1).json";
import lot3 from "../../assets/whatWeDo/Animation - 1705531218146.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../styles/Variant";
import useTheme from "../../context/theme";
function WhatWeDo() {
  const { themeMode } = useTheme();
  useEffect(() => {
    // This will run after the component is mounted
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 8,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);
  return (
    <div className="flex w-[100vw] text-white flex-col items-center justify-center bg-[#fff] dark:bg-black">
      <div>
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          className="!text-4xl !font-semibold mb-8 text-black dark:text-white"
        >
          <span className="text-[#4d55ba] ">What</span> We Do❓
        </motion.h2>
      </div>
      <div className="w-[90%] md:w-[70%]">
        <p className="text-center text-md mb-8 text-black  font-medium dark:text-[#a6a6a6]">
          Through our vision of &quot;Learn, Build and Scale&quot; we implement
          various initiatives and events in KIET to foster entrepreneurial minds
          and create a culture of enthralling startups bound for success!
        </p>
      </div>
      <motion.div
        variants={fadeIn("down")}
        initial="hidden"
        whileInView={"show"}
        className="containerr flex flex-col md:flex-row justify-center items-center md:justify-center "
      >
        <div className="card !w-[70%] md:!w-[25%] lg:!w-[22%] bg-white dark:bg-[#ffffff1a] !shadow-2xl shadow-black">
          <div className="content">
            <div className="w-1/2 flex justify-center flex-col items-center mb-0">
              <Lottie animationData={lot1} loop={true} className=" lg:flex" />
              <h3 className="h3 mt-1 text-black dark:text-white font-semibold">
                Ideate
              </h3>
            </div>
            <div className="contentmove">
              <p className="mt-[-1em] text-[#4b4b4b] dark:text-[#a6a6a6] !font-semibold dark:!font-normal">
                To start your search for that drop-dead idea that&apos;s going
                to set the world on fire, open yourself to the possibilities and
                you will be bound to become a winner.
              </p>
            </div>
          </div>
        </div>

        <div className="card !w-[70%] md:!w-[22%] bg-white dark:bg-[#ffffff1a] !shadow-2xl shadow-black">
          <div className="content">
            <div className="w-[70%] flex justify-center flex-col items-center mb-0">
              <Lottie
                animationData={themeMode == "dark" ? lot21 : lot22}
                loop={true}
                className=" lg:flex "
              />
              <h3 className="h3 mt-1 text-black dark:text-white font-semibold">
                Create
              </h3>
            </div>
            <div className="contentmove ">
              <p className="mt-[-1em] text-[#4b4b4b] dark:text-[#a6a6a6] !font-semibold dark:!font-normal">
                Create an entrepreneurship community where we ideate, innovate
                and mold your idea into a full-fledged running venture.
              </p>
            </div>
          </div>
        </div>
        <div className="card !w-[70%] md:!w-[22%] bg-white dark:bg-[#ffffff1a] !shadow-2xl shadow-black">
          <div className="content">
            <div className="w-[35%] flex justify-center flex-col items-center mb-0">
              <Lottie animationData={lot3} loop={true} className=" lg:flex" />
              <h3 className="h3 mt-1 text-black dark:text-white font-semibold">
                Incubate
              </h3>
            </div>
            <div className="contentmove ">
              <p className="mt-[-1em] text-[#4b4b4b] dark:text-[#a6a6a6] !font-semibold dark:!font-normal">
                Your idea needs to get nurtured in order to reach full strength
                and to be able to breathe and grow independently.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default WhatWeDo;
