import { motion } from "framer-motion";
import { fadeIn } from "../../styles/Variant.js";

import linkedInIcon from "../../assets/icons8-linkedin.svg";
import gamilIcon from "../../assets/icons8-gmail.svg";
import "./OurTeam.css";
import Akshat from "../../assets/OurTeam/akshat.jpg";
import apporv from "../../assets/OurTeam/apporv.jpg";
import arpita from "../../assets/OurTeam/arpita.jpeg";
import Aryan from "../../assets/OurTeam/aryan11.jpg";
import aryan2 from "../../assets/OurTeam/Aryan22.jpg";
// import Atrij from '../../assets/OurTeam/atrij111.jpg';
import Ayush from "../../assets/OurTeam/ayush_prakash.jpg";
import Dhruv from "../../assets/OurTeam/DhruvRastogi11.jpg";
// import Garima from '../../assets/OurTeam/garima11.jpg';
import Garvit from "../../assets/OurTeam/garvit_singh11.jpg";
import GauravNamdev from "../../assets/OurTeam/gaurav_namdev.jpg";
import GauravPayal from "../../assets/OurTeam/gaurav_payal.jpg";
import govind from "../../assets/OurTeam/govind.jpg";
import hard from "../../assets/OurTeam/hard.jpg";
import harsh2 from "../../assets/OurTeam/harsh2.jpg";
import harshraj from "../../assets/OurTeam/harsh3.jpg";
// import Iqra from '../../assets/OurTeam/iqra4.jpg';
import Jassi from "../../assets/OurTeam/jassi11.jpg";
import Madhav from "../../assets/OurTeam/madhav.jpg";
import Mansi from "../../assets/OurTeam/Mansi.png";
import Mayank from "../../assets/OurTeam/mayank_mishra.jpeg";
import naksh from "../../assets/OurTeam/Naksh.jpg";
// import Nishant from '../../assets/OurTeam/nishant.jpg';
// import Parneet from '../../assets/OurTeam/parneet.jpg';
// import Pranav from '../../assets/OurTeam/pranav111.png';
import Pulkit from "../../assets/OurTeam/pulkit.jpeg";
import shashwat from "../../assets/OurTeam/Shashwat.jpg";
import shine from "../../assets/OurTeam/shine.jpg";
import shud from "../../assets/OurTeam/shud.jpg";
// import Saket from '../../assets/OurTeam/saket_tiwari11.jpg';
import Snigdha from "../../assets/OurTeam/Snigdha.jpg";
// import Tanika from '../../assets/OurTeam/tanika.jpg';
// import Tanushi from "../../assets/OurTeam/tanushi.jpg";
import tanya from "../../assets/OurTeam/Tanya.webp";
// import Tejaswita from '../../assets/OurTeam/tejaswita.jpg';
import Unnati from "../../assets/OurTeam/unnati.jpg";
import Vaibhav from "../../assets/OurTeam/vaibhav.jpg";
import Vaishnavi from "../../assets/OurTeam/vaishnavi.jpg";
import yash from "../../assets/OurTeam/yash.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function OurTeam() {
  const OverallCoordinators = [
    {
      name: "Madhav Garg",
      domain: "Overall Coordinator",
      imgUrl: Madhav,
    },

    {
      name: "Aryan Sharma",
      domain: "Overall Coordinator",
      imgUrl: Aryan,
    },

    {
      name: "Akshat Dwivedi",
      domain: "Overall Coordinators",
      imgUrl: Akshat,
    },
  ];
  const DomainHeads = [
    {
      name: "Pulkit Saxena",
      domain: "Public Relations Head",
      imgUrl: Pulkit,
    },
    {
      name: "Jassi Sandhu",
      domain: "Public Relations Head",
      imgUrl: Jassi,
    },
    {
      name: "Garvit Singh",
      domain: "Event Head",
      imgUrl: Garvit,
    },
    {
      name: "Snigdha Singh",
      domain: "Corporate Head",
      imgUrl: Snigdha,
    },
    {
      name: "Unnati Mishra",
      domain: "Technical Member",
      imgUrl: Unnati,
    },
  ];
  const Members = [
    {
      name: "Yash Kumar Singh",
      domain: "Technical Member",
      imgUrl: yash,
    },

    {
      name: "Nakshatra Manglik",
      domain: "Technical Member",
      imgUrl: naksh,
    },

    {
      name: "Shashwat Rai",
      domain: "Technical Member",
      imgUrl: shashwat,
    },
    {
      name: "Aryan Srivastava",
      domain: "Public Relations Member",
      imgUrl: aryan2,
    },
    {
      name: "Tanya Varshney",
      domain: "Public Relations Member",
      imgUrl: tanya,
    },
    {
      name: "Govind Chaubey",
      domain: "Corporate Relations",
      imgUrl: govind,
    },
    {
      name: "Gaurav Namdev",
      domain: "Corporate Member",
      imgUrl: GauravNamdev,
    },
    {
      name: "Apporv Sharma ",
      domain: "Corporate Member",
      imgUrl: apporv,
    },

    {
      name: "Yash Hardasani",
      domain: "Corporate Member",
      imgUrl: hard,
    },

    {
      name: "Sudhanshu",
      domain: "Corporate Relations",
      imgUrl: shud,
    },
    {
      name: "Gaurav Payal",
      domain: "Graphics Member",
      imgUrl: GauravPayal,
    },

    {
      name: "Shine Gupta",
      domain: "Graphics Member",
      imgUrl: shine,
    },

    {
      name: "Ayush Prakash",
      domain: "Graphics Member",
      imgUrl: Ayush,
    },
    {
      name: "Vaishnavi Singh",
      domain: "Graphics Member",
      imgUrl: Vaishnavi,
    },
    {
      name: "Harsh Pundir",
      domain: "Graphics Member",
      imgUrl: harsh2,
    },
    {
      name: "Vaibhav Choudhary",
      domain: "Event Member",
      imgUrl: Vaibhav,
    },

    {
      name: "Harsh Raj",
      domain: "Events Member",
      imgUrl: harshraj,
    },

    {
      name: "Mansi Verma",
      domain: "Graphics Member",
      imgUrl: Mansi,
    },
    {
      name: "Arpita Dwivedi",
      domain: "Graphics Member",
      imgUrl: arpita,
    },
  ];
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="flex flex-col justify-center items-center text-white pt-28 bg-white dark:bg-black">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
          Our <span className="text-[#4d55ba]">Team</span>
        </h1>
      </div>
      <div className="mt-10">
        <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white">
          Overall Coordinators
        </h1>
      </div>
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        className="flex flex-wrap justify-center items-start mt-8"
      >
        {OverallCoordinators.map((member, index) => (
          <div
            key={index}
            className="team-member flex flex-col justify-center items-center m-5 rounded-tr-[25%] rounded-lg "
          >
            <div className="relative">
              <img
                src={member.imgUrl}
                alt={member.name}
                className="team-member-img w-48 h-60 rounded-tr-[10%] rounded-lg rounded-bl-[10%]"
              />
              <div className="teamHover absolute top-5 left-5 w-[70%] border-t-4 border-l-4 p-3 pt-8 pb-5 border-blue-500 rounded-md flex flex-row justify-evenly items-center">
                <a href="" target="_blank">
                  <img src={linkedInIcon} alt="" className="w-9 h-9" />
                </a>
                <a href="" target="_blank">
                  <img src={gamilIcon} alt="" className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-40 mt-2 ">
              <p className=" team-member-name font-bold text-lg text-black dark:text-white text-center">
                {member.name}
              </p>
              <p className="team-member-domain text-center text-lg text-black dark:text-white">
                {member.domain}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="mt-10">
        <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white">
          Domain Heads
        </h1>
      </div>
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        className="flex flex-wrap justify-center items-start mt-8"
      >
        {DomainHeads.map((member, index) => (
          <div
            key={index}
            className="team-member flex flex-col justify-center items-center m-5"
          >
            <div className="relative">
              <img
                src={member.imgUrl}
                alt={member.name}
                className="team-member-img w-48 h-60 rounded-tr-[10%] rounded-lg rounded-bl-[10%]"
              />
              <div className="teamHover absolute top-5 left-5 w-[70%] border-t-4 border-l-4 p-3 pt-8 pb-5 border-blue-500 rounded-md flex flex-row justify-evenly items-center">
                <a href="" target="_blank">
                  <img src={linkedInIcon} alt="" className="w-9 h-9" />
                </a>
                <a href="" target="_blank">
                  <img src={gamilIcon} alt="" className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-40 mt-2 ">
              <p className="team-member-name font-bold text-lg text-black dark:text-white text-center">
                {member.name}
              </p>
              <p className="team-member-domain text-center text-lg text-black dark:text-white">
                {member.domain}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="mt-10">
        <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white">
          Members
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start mt-8">
        {Members.map((member, index) => (
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"show"}
            key={index}
            className="team-member flex flex-col justify-center items-center m-5"
          >
            <div className="relative">
              <img
                src={member.imgUrl}
                alt={member.name}
                className="team-member-img w-44 h-56 rounded-tr-[10%] rounded-lg rounded-bl-[10%]"
              />
              <div className="teamHover absolute top-5 left-5 w-[70%] border-t-4 border-l-4 p-3 pt-8 pb-5 border-blue-500 rounded-md flex flex-row justify-evenly items-center">
                <a href="" target="_blank">
                  <img src={linkedInIcon} alt="" className="w-9 h-9" />
                </a>
                <a href="" target="_blank">
                  <img src={gamilIcon} alt="" className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-40 mt-2 ">
              <p className="team-member-name font-bold text-lg text-black dark:text-white text-center">
                {member.name}
              </p>
              <p className="team-member-domain text-center text-lg text-black dark:text-white">
                {member.domain}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
