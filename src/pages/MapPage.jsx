import React from "react";
import { MapContents } from "../assets/constants/MapConstants";
import { motion } from "framer-motion";
import { PiSunHorizon } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const MapPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        staggerChildren: 0.2,
        duration: 1.1,
      }}
      className="min-h-screen bg-[#c1c8e4] overflow-hidden px-4 py-12 relative"
    >
      <div className="absolute w-[700px] h-[700px] bg-[#84ceeb] opacity-80 rounded-full mix-blend-multiply filter blur-xl -left-4 animate-blob"></div>
      <div className="absolute w-[700px] h-[700px] bg-[#5ab8eb] opacity-80 rounded-full mix-blend-multiply filter blur-xl right-2 top-0 animate-blob animation-delay-4000"></div>
      <div className="absolute w-[800px] h-[800px] bg-[#c1c8e4] opacity-80 rounded-full mix-blend-multiply filter blur-xl  left-[350px] animate-side animation-delay-2000"></div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: "0%",
          x: "0%",
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: "0%",
          x: "0%",
        }}
        transition={{
          duration: 0.8,
        }}
        className="
        container mx-auto p-6 bg-transparent xl:w-[1400px] lg:w-[1000px] grid grid-cols-3 place-content-center gap-4  relative"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: "-150%",
            scale: 0.8,
            rotate: "90deg",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: "0",
          }}
          exit={{
            opacity: 0,
            y: "-150%",
            scale: 0.8,
            rotate: "90deg",
          }}
          transition={{
            duration: 1,
          }}
          className="absolute -right-12 -top-5 text-3xl"
        >
          <Link to="/">
            <FiArrowLeftCircle />
          </Link>
        </motion.div>
        <div className="h-[580px] col-span-3 xl:col-span-2 shadow md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d686.5467103465364!2d123.53909921158709!3d13.244467837053426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a109000098c281%3A0x1e392a190f17d658!2sAmansarah%20Private%20Resort!5e0!3m2!1sen!2sae!4v1722591389420!5m2!1sen!2sae"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md"
          ></iframe>
        </div>

        <div className="h-[580px] col-span-3 xl:col-span-1 bg-offWhite2 rounded-md shadow-md ">
          <div className="flex justify-center items-center pt-8">
            <h1 className="font-poppins text-5xl font-bold ">AMANSARAH</h1>
            <div className="text-6xl font-extrabold text-yellow-300">
              <PiSunHorizon />{" "}
            </div>
          </div>

          <div className="px-8 pt-4 text-center xl:text-start">
            <p className="font-poppins text-3xl font-semibold italic">
              Address:
            </p>
            <div className="flex items-center gap-2 text-lg justify-center xl:justify-normal">
              <span className="text-4xl font-bold text-yellow-100">
                <CiLocationOn />
              </span>
              <p className="pt-[0.25rem] font-inter">
                Mabini St Bagumbayan Ligao City Albay
              </p>
            </div>
          </div>
          <div className="px-8 pt-4 text-center xl:text-start">
            <p className="font-poppins text-3xl font-semibold italic ">
              Contact Us
            </p>
            <div className="flex items-center gap-2 text-lg justify-center xl:justify-normal">
              <span className="text-3xl font-bold text-yellow-100">
                <BsTelephone />
              </span>
              <p className="pt-[0.25rem] font-inter">+639274911756</p>
            </div>
          </div>
          <br />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MapPage;
