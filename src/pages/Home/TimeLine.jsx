// import React from 'react'
import "./TimeLine.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../styles/Variant";
const TimeLine = () => {
  return (
    <div className="main bg-white dark:bg-black">
      <motion.h3
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        className="head !text-4xl text-black dark:text-white font-bold mb-12"
      >
        Our <span className="text-[#4d55ba]">Events</span>
      </motion.h3>
      <div className="container">
        <ul>
          <motion.li
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            className="bg-white dark:!bg-[#4d55ba36]"
          >
            <h3 className="heading">Ideatex</h3>
            <p className="text-black dark:text-white font-normal">
              A platform where student entrepreneurs pitch their ideas, connect
              with investors, and network with industry experts, catalyzing
              innovation and collaboration for impactful ventures.
            </p>
            <a href="#">Read More </a>
            <span className="date">November 2023</span>
            <span className="circle"></span>
          </motion.li>
          <motion.li
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            className="bg-white dark:!bg-[#4d55ba36]"
          >
            <h3 className="heading">Endeavour 2K23</h3>
            <p className="text-black dark:text-white font-normal">
              The annual flagship E-Summit, organised by E-Cell KIET where
              entrepreneurial spirit meets opportunity. Aiming to pique
              innovation, equip budding entrepreneurs to make their dreams a
              reality, and spark entrepreneurship via creative events is the
              mission of Endeavour. We cultivate an environment where ambitious
              people may come together to shape the entrepreneurial landscape of
              tomorrow.
            </p>
            <a href="#">Read More </a>
            <span className="date">May 2023</span>
            <span className="circle"></span>
          </motion.li>
          <motion.li
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            className="bg-white dark:!bg-[#4d55ba36]"
          >
            <h3 className="heading">Hult Prize</h3>
            <p className="text-black dark:text-white font-normal">
              The Hult Prize is a pinnacle in global student competitions,
              fostering entrepreneurship and leadership through the creation of
              for-profit startups aimed at addressing specific challenges. It
              empowers young minds to innovate for social good.
            </p>
            <a href="#">Read More </a>
            <span className="date">March 2023</span>
            <span className="circle"></span>
          </motion.li>
          {/* <motion.li
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            className="bg-white dark:!bg-[#4d55ba36]"
          >
            <h3 className="heading">App Developer</h3>
            <p className="text-black dark:text-white font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              excepturi accusamus minus totam{" "}
            </p>
            <a href="#">Read More </a>
            <span className="date">April 2021</span>
            <span className="circle"></span>
          </motion.li> */}
        </ul>
      </div>
    </div>
  );
};

export default TimeLine;
