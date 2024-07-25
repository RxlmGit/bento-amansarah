import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

const PromoPage = () => {
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
        className="mx-auto max-w-[1350px] min-h-[85vh] md:max-w-[980px] lg:max-w-[1100px] lg:max-h-[630px] rounded-lg border border-zinc-700 bg-zinc-800 grid place-content-center text-zinc-50 gap-5"
      >
        <h1>PROMOTIONS PAGE</h1>
        <Link
          to={"/"}
          className="flex items-center justify-center rounded-lg text-xl border border-zinc-700 bg-zinc-800 py-3"
        >
          <FaBackward />
        </Link>
      </motion.div>
    </div>
  );
};

export default PromoPage;
