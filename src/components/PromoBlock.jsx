import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PromoBlock = () => {
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
      transition={{ type: "spring", mass: 3, stiffness: 400, damping: 50 }}
      href=""
      className="col-span-6 row-span-3 md:col-span-4 md:row-span-3 "
    >
      {/* <div className="z-0 absolute inset-0 bg-zinc-800 translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-500 rounded-lg" /> */}

      <AnimatePresence>
        <Link
          to="/promopage"
          className="border bg-zinc-800  border-zinc-700 p-4 rounded-lg w-full h-full relative overflow-hidden group flex items-center justify-center"
        >
          {" "}
          <h2 className="z-50 relative group-hover:text-zinc-50 font-workSans">
            PROMOTIONS
          </h2>
        </Link>
      </AnimatePresence>

      {/* <p className="z-50 relative text-sm font-semibold text-zinc-500 mt-2">
        Check out our current promotions! follow our socials to stay updated.
      </p> */}
      {/* <div
        className="mt-2 mr-2 flex justify-end relative text-xl z-50 
      scale-0 group-hover:scale-100 duration-500"
      >
        <FaArrowRight />
      </div> */}
    </motion.div>
  );
};

export default PromoBlock;
