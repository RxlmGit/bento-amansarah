import React from "react";
import { motion } from "framer-motion";
import PromoCard1 from "../components/PromoCards/PromoCard1";
import PromoCard2 from "../components/PromoCards/PromoCard2";
import PromoCard3 from "../components/PromoCards/PromoCard3";
import "../index.css";

import accentImages from "../assets/imgs/bookingImgs/image";

const PromoPage = () => {
  return (
    <div className="min-h-screen bg-bookingPageBG px-4 py-12 relative flex overflow-hidden bg-cover">
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
        transition={{
          type: "spring",
          mass: 3,
          stiffness: 400,
          damping: 50,
        }}
        className="mx-auto min-h-[80vh] container rounded-lg
          flex flex-col items-center justify-around relative z-10"
      >
        <motion.div
          className="m-4 lg:w-[100%] xl:w-[9%] xl:min-h-[75vh] grid grid-cols-3 gap-10 p-8 "
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <PromoCard1 />
          <PromoCard2 />
          <PromoCard3 />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PromoPage;
