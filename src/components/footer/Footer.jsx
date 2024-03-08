// import React from 'react';
import "./Footer.css";

import { useNavigate } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import greaterThanDark from "../../assets/greaterthandark.svg";
import greaterThanLight from "../../assets/greaterthanlight.svg";
import useTheme from "../../context/theme";
export default function Foot() {
  const history = useNavigate();
  const { themeMode } = useTheme();
  return (
    <>
      <div className="footer   border-white/65 bg-white dark:bg-black text-black dark:text-white border-t-[1px] border-t-[#b1b1b17d]">
        <div className="upperfoot p-8 border-b-[1px] border-b-[#8a8a8a92]">
          <div className="box flex flex-col lg:flex-col items-center lg:items-start">
            <h3 className="text-lg mb-5">Subscribe to E-Cell</h3>
            <p className="text-md mb-2 font-medium dark:font-light">
              Receive Important Updates and Newsletter
            </p>
            <div className="input-group w-[90%] flex flex-row mb-8 mt-2 lg:mt-5 justify-center items-center">
              <input
                type="email"
                className="mr-3 !mb-0 w-full !border-0 !border-b-2  !rounded-none !border-b-[#aaa] dark:!border-b-white bg-transparent outline-none"
                id="Email"
                name="Email"
                placeholder="example@gmail.com"
                autoComplete="off"
              />
              <p className="rounded-lg p-2 !cursor-pointer">
                <span className="!cursor-pointer font-bold dark:font-medium">
                  Subscribe
                </span>
              </p>
            </div>
            <div className="handle flex flex-row items-center justify-between w-[80%] lg:w-[70%] ">
              <a onClick={() => history("/")}>
                <FaInstagram className=" h-8 w-8 test-black dark:text-white hover:text-[#4d55ba]" />
              </a>
              <a onClick={() => history("/")}>
                <FaFacebook className=" h-7 w-7 test-black dark:text-white  hover:text-[#4d55ba]" />
              </a>
              <a onClick={() => history("/")}>
                <FaTelegram className=" h-7 w-7 test-black dark:text-white  hover:text-[#4d55ba]" />
              </a>
              <a onClick={() => history("/")}>
                <FaLinkedinIn className=" h-7 w-7 test-black dark:text-white  hover:text-[#4d55ba]" />
              </a>
              <a onClick={() => history("/")}>
                <FaYoutube className=" h-7 w-7 test-black dark:text-white  hover:text-[#4d55ba]" />
              </a>
            </div>
          </div>

          <div className="footbox mt-6 lg:mt-0 ">
            <div className="box mr-8 flex flex-col items-center lg:items-start">
              <h3 className="text-lg mb-5">Contact Us</h3>
              <p className="mb-3 font-medium dark:font-light">
                KIET Group of Institution,Ghaziabad, Delhi NCR, Uttar Pradesh,
                India, PIN 201206
              </p>
              <iframe
                className="shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.893371593317!2d77.49584577433525!3d28.752600375599357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf47204fb9241%3A0xd11ed4123c7691fe!2sKIET%20GROUP%20OF%20INSTITUTIONS%2C%20Muradnagar%2C%20Uttar%20Pradesh%20201206!5e0!3m2!1sen!2sin!4v1705234905270!5m2!1sen!2sin"
                width="300px"
                height="150px"
                style={{
                  borderRadius: "10px",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="mt-3 mb-2 font-semibold dark:font-medium">
                Mail us at :-{" "}
                <span className="font-medium dark:font-light">
                  ecell@kiet.edu
                </span>
              </p>
              <p className="mb-4 font-semibold dark:font-medium">
                Phone No. :-{" "}
                <span className="font-medium dark:font-light">
                  +91 94557 19685
                </span>
              </p>
            </div>

            <div className="box ">
              <h3 className="text-lg mb-5">Important Links</h3>
              <div className="upper flex flex-row justify-between items-start w-[80%]">
                <div className="inner ">
                  <a
                    onClick={() => history("/discover")}
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium"
                  >
                    <img
                      src={
                        themeMode == "dark" ? greaterThanDark : greaterThanLight
                      }
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    About
                  </a>
                  <a
                    href="https://medium.com/@ECELLKIET"
                    target="_blank"
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium"
                    rel="noreferrer"
                  >
                    {" "}
                    <img
                      src={
                        themeMode == "dark" ? greaterThanDark : greaterThanLight
                      }
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Our Blogs
                  </a>
                  <a
                    onClick={() => history("/gallery")}
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium"
                  >
                    {" "}
                    <img
                      src={
                        themeMode == "dark" ? greaterThanDark : greaterThanLight
                      }
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Our Gallery
                  </a>
                  <a
                    onClick={() => history("/pastspeakers")}
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium"
                  >
                    {" "}
                    <img
                      src={
                        themeMode == "dark" ? greaterThanDark : greaterThanLight
                      }
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Past Speakers
                  </a>
                  {/* <a
                    onClick={() => history("/")}
                    className="!flex !flex-row items-center justify-normal mb-2"
                  >
                    {" "}
                    <img src={themeMode == "dark" ? greaterThanDark : greaterThanLight} alt="" className="w-2 h-2 mr-2" />
                    Privacy Policy
                  </a> */}
                  {/* <a
                    onClick={() => history("/refundpolicy")}
                    className="!flex !flex-row items-center justify-normal mb-2"
                  >
                    {" "}
                    <img src={themeMode == "dark" ? greaterThanDark : greaterThanLight} alt="" className="w-2 h-2 mr-2" />
                    Refund Policy
                  </a> */}
                </div>
                <div className="inner">
                  <a
                    onClick={() => history("/ideasubmissions")}
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium"
                  >
                    <img
                      src={
                        themeMode == "dark" ? greaterThanDark : greaterThanLight
                      }
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Idea Submission
                  </a>
                  <a
                    href="https://discord.com/invite/R29Eh6hwPn"
                    target="_blank"
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium"
                    rel="noreferrer"
                  >
                    <img
                      src={
                        themeMode == "dark" ? greaterThanDark : greaterThanLight
                      }
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Discord
                  </a>
                  <a
                    onClick={() => history("/ourteam")}
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium"
                  >
                    <img
                      src={
                        themeMode == "dark" ? greaterThanDark : greaterThanLight
                      }
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Our Team
                  </a>
                  <a
                    onClick={() => history("/events")}
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium"
                  >
                    <img
                      src={
                        themeMode == "dark" ? greaterThanDark : greaterThanLight
                      }
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Events
                  </a>
                  {/* <a
                    onClick={() => history("/")}
                    className="!flex !flex-row items-center justify-normal mb-2"
                  >
                    <img src={greaterThan} alt="" className="w-2 h-2 mr-2" />
                    Terms of Services
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lowerfoot !w-[100vw] font-medium dark:font-medium">
          <h3 className="">@ E-Cell 2024</h3>
        </div>
      </div>
    </>
  );
}
