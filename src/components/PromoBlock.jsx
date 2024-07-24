import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const PromoBlock = () => {
  return (
    <motion.a
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
      }}
      transition={{ type: "spring", mass: 3, stiffness: 400, damping: 50 }}
      href=""
      className="col-span-6 row-span-3 md:col-span-4 md:row-span-3 bg-black border-zinc-800 p-4 rounded-lg w-full h-full relative overflow-hidden group"
    >
      <div className="z-0 absolute inset-0 bg-zinc-800 translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-500 rounded-lg" />
      <h2 className="z-50 relative text-2xl font-bold text-zinc-300 group-hover:text-zinc-50 font-poppins">
        PROMOTIONS
      </h2>
      <p className="z-50 relative text-sm font-semibold text-zinc-500 mt-2">
        Check out our current promotions! follow our socials to stay updated.
      </p>
      <div
        className="mt-2 mr-2 flex justify-end relative text-xl z-50 
      scale-0 group-hover:scale-100 duration-500"
      >
        <FaArrowRight />
      </div>
    </motion.a>
  );
};

export default PromoBlock;
