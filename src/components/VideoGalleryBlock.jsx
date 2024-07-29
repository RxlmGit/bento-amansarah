import React from "react";
import { motion } from "framer-motion";
import { GrGallery } from "react-icons/gr";
import { Link } from "react-router-dom";

const VideoGalleryBlock = () => {
  return (
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
      className="col-span-7 row-span-4 md:col-span-6 md:row-span-6"
    >
      <Link
        to="/VideoGallery"
        className="border bg-zinc-800  border-zinc-700 p-4 rounded-lg w-full h-full relative overflow-hidden group flex items-center justify-center"
      >
        {" "}
        <h2>VIDEO GALLERY</h2>
        <GrGallery />
      </Link>
    </motion.div>
  );
};

export default VideoGalleryBlock;
