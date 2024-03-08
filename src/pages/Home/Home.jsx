// import imgmob from "../../assets/Untitled-1 (2).png";
// import img from "../../assets/Untitled-1 (1).png";
// import facebookIcon from "../../assets/facebook-svgrepo-com.svg";
// import instagramIcon from "../../assets/instagram-svgrepo-com.svg";
// import linkedInIcon from "../../assets/linkedin-svgrepo-com.svg";
// import lineIcon from "../../assets/line-xl-svgrepo-com.svg";
// import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./Home.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../styles/Variant";

import WhatIsECell from "./WhatIsECell.jsx";
import WhatWeDo from "./WhatWeDo.jsx";
import Domains from "./Domains.jsx";
import TimeLine from "./TimeLine.jsx";
import Partners from "../Associations/Partners.jsx";
import useTheme from "../../context/theme.js";
// import Button1 from "../../components/Button/Button1.jsx";
import ScrollImageDesktopDark from "../../assets/Home/Subtract.svg";
import ScrollImageDesktopLight from "../../assets/Home/SubtractWhite.svg";

import ScrollImageMobileLight from "../../assets/Home/Subtractlight.svg";
import ScrollImageMobileDark from "../../assets/Home/Subtractdark.svg";

import vid from "../../assets/Home/bgVideoDesktop.mp4";
import vid2 from "../../assets/Home/bgVideoMobile.mp4";

import { useLocation } from "react-router-dom";
function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50% 0px",
  });

  const { themeMode } = useTheme();

  const [scrollY, setScrollY] = useState(0);
  const [isGreater, setIsGreater] = useState(false);

  const { transform } = useSpring({
    transform: `scale(${1 + scrollY * 1})`,
  });

  const handleScroll = () => {
    const newScrollY = window.scrollY;
    setScrollY(newScrollY);

    // Check if the scale is greater than or equal to 20
    setIsGreater(1 + newScrollY / 25 >= 25);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <animated.header
        className={`hero !overflow-x-hidden w-[100vw] ${
          inView ? "past-threshold" : ""
        } ${isGreater ? "!hidden" : ""}`}
        style={{ transform }}
        ref={ref}
      >
        <div className="hero__top !overflow-x-hidden">
          {/* <div className="filler filler-white"></div> */}
          <div className="hero__illustration !overflow-x-hidden">
            <div className="h-full w-full bg-white dark:bg-black"></div>
            <img
              src={
                themeMode == "dark"
                  ? ScrollImageDesktopDark
                  : ScrollImageDesktopLight
              }
              alt=""
              className="w-[100vw] h-[100vh] border-white dark:border-black  md:flex hidden"
            />
            <img
              src={
                themeMode == "dark"
                  ? ScrollImageMobileDark
                  : ScrollImageMobileLight
              }
              alt=""
              className="w-[100vw] border-white dark:border-black  flex md:hidden"
            />
            <div className="h-full w-full bg-white dark:bg-black"></div>
          </div>
          {/* <div className="filler filler-white"></div> */}
        </div>
      </animated.header>

      <div
        className={`trailer !z-[-1] ${isGreater ? "" : "!sticky top-0 left-0"}`}
      >
        <div className="video-wrapper">
          <div className="video">
            {" "}
            <video
              src={vid}
              autoPlay
              loop
              muted
              className="fixed hidden md:flex z-[-2] "
            ></video>
            <video
              src={vid2}
              autoPlay
              loop
              muted
              className="fixed h-[100vh] w-[100vw] flex md:hidden z-[-2] "
            ></video>
          </div>
        </div>
      </div>

      <main className="content z-[10]">
        <section className="section bg-white dark:bg-black z-[20]  h-[100vh]">
          <WhatIsECell />
        </section>
        <section className="section bg-white dark:bg-black">
          <WhatWeDo />
        </section>
        <section className="section bg-white dark:bg-black">
          <Domains />
        </section>
        <section className="section bg-white dark:bg-black ">
          <TimeLine />
        </section>
        <section className="section bg-white dark:bg-black">
          <div className=" flex justify-center items-center flex-col mt-8 mb-12 w-[100vw]">
            <motion.h1
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="!text-4xl text-black dark:text-white font-bold mb-12"
            >
              Previous <span className="text-[#4d55ba]">Sponsors</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("left")}
              initial="hidden"
              whileInView={"show"}
            >
              <Partners />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
