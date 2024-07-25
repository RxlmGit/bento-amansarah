import React from "react";
import { motion } from "framer-motion";

const FacilityBlock = () => {
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
      className="rounded-lg border border-zinc-700 bg-zinc-800 col-span-5 
      row-span-4 md:col-span-3 md:row-span-7 flex items-center justify-center gap-2"
    >
      <h2>FACILITIES</h2>
    </motion.a>
  );
};

export default FacilityBlock;
