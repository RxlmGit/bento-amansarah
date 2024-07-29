import React from "react";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const LocationBlock = () => {
  return (
    <Link to="/mapPage" className="col-span-3 row-span-4 md:row-span-4">
      <motion.div
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
        className="h-full w-full flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800"
      >
        <h2>MAP HERE</h2> <FiMapPin />
      </motion.div>
    </Link>
  );
};

export default LocationBlock;
