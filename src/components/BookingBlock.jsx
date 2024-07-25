import React from "react";
import { motion } from "framer-motion";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { Link } from "react-router-dom";

const BookingBlock = () => {
  return (
    <motion.div
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
      className="col-span-3 
      row-span-4 md:row-span-2"
    >
      <Link
        to="/promopage"
        className=" rounded-lg border border-zinc-700 bg-zinc-800 flex items-center justify-center gap-2 w-full h-full"
      >
        <h2 className="">BOOK NOW</h2>
        <TfiArrowCircleRight />
      </Link>
    </motion.div>
  );
};

export default BookingBlock;
