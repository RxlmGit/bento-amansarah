import React from "react";
import { motion } from "framer-motion";

const AboutBlock = () => {
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
      className="rounded-lg border border-zinc-700 bg-zinc-800 col-span-6 
      row-span-4 md:row-span-3 flex items-center justify-center gap-2"
    >
      <h2>VIDEO GALLERY</h2>
    </motion.a>
  );
};

export default AboutBlock;
