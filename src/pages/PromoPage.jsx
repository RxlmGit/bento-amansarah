import React, { useState } from "react";
import { motion } from "framer-motion";
import PromoCard1 from "../components/PromoCards/PromoCard1";
import PromoCard2 from "../components/PromoCards/PromoCard2";
import PromoCard3 from "../components/PromoCards/PromoCard3";
import "../index.css";
import { Link } from "react-router-dom";

import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const PromoPage = () => {
  const promos = [];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        staggerChildren: 0.2,
      }}
      className="min-h-screen bg-bookingPageBG px-4 py-12 relative flex overflow-hidden bg-cover"
    >
      <motion.div
        transition={{
          staggerChildren: 0.2,
          duration: 1.1,
        }}
        className="mx-auto min-h-[80vh] container rounded-lg
          flex flex-col items-center justify-around relative z-10"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: "-150%",
            scale: 1,
            rotate: "90deg",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: "0",
          }}
          exit={{
            opacity: 0,
            y: "-150%",
            scale: 1,
            rotate: "90deg",
          }}
          transition={{
            duration: 1,
          }}
          className="absolute top-0 right-4 text-3xl text-white"
        >
          <Link to="/">
            <FiArrowLeftCircle />{" "}
          </Link>
        </motion.div>

        <motion.div
          className="m-4 lg:w-[100%] xl:w-[90%] xl:min-h-[75vh] grid grid-cols-3 gap-10 p-8 "
          initial={{
            x: "150%",
          }}
          animate={{
            x: "0",
          }}
          exit={{
            x: "-150%",
          }}
          transition={{ duration: 1 }}
        >
          <PromoCard1 />
          <PromoCard2 />
          <PromoCard3 />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PromoPage;
