import React from "react";
import { motion } from "framer-motion";

const VideoGallery = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12  overflow-hidden">
      <motion.div
        className="mx-auto min-h-[85vh] container border border-red-400 rounded-lg
          grid grid-cols-3 p-8 gap-6"
      >
        <div className="min-h-[70%] col-span-1 border-r border-r-zinc-700 flex flex-col items-center">
          ola
        </div>
        <div className="col-span-2 border border-zinc-700"></div>
      </motion.div>
    </div>
  );
};

export default VideoGallery;
