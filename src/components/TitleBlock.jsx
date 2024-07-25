import React from "react";
import { motion } from "framer-motion";
import { PiSunHorizon } from "react-icons/pi";

const TitleBlock = () => {
  return (
    <motion.a
      href=""
      variants={{
        initial: {
          scale: 0,
          y: "-50%",
          x: "-50%",
        },
        animate: {
          scale: 1,
          y: "0%",
          x: "0%",
        },
        exit: {
          scale: 0,
          y: "0%",
          x: "0%",
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className="border-zinc-700 bg-titleBlockBg rounded-lg border col-span-12 row-span-3 md:col-span-8 md:row-span-3 flex items-center justify-center gap-2"
    >
      <h1 className="font-poppins text-5xl font-bold ">AMANSARAH</h1>
      <div className="text-6xl font-extrabold text-yellow-300">
        <PiSunHorizon />{" "}
      </div>
    </motion.a>
  );
};

export default TitleBlock;
