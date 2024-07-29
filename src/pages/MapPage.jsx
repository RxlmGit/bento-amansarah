import React from "react";
import { MapContents } from "../assets/constants/MapConstants";
import { motion } from "framer-motion";

const MapPage = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: "0%",
          x: "0%",
        }}
        exit={{
          opacity: 0,
          scale: 0,
          y: "0%",
          x: "0%",
        }}
        transition={{ type: "spring", mass: 3, stiffness: 400, damping: 50 }}
        className="
        container mx-auto p-10 bg-transparent xl:w-[1200px] lg:w-[1000px] border border-zinc-700"
      >
        <div className="h-[550px] "></div>
      </motion.div>
    </div>
  );
};

export default MapPage;
