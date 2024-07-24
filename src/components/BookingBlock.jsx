import React from "react";
import { motion } from "framer-motion";

const BookingBlock = () => {
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
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className="rounded-lg border border-zinc-700 bg-zinc-800 col-span-3 
      row-span-4 md:row-span-2 flex items-center "
    >
      <div className="m-4">
        <h2>BOOK NOW</h2>
      </div>
    </motion.a>
  );
};

export default BookingBlock;
