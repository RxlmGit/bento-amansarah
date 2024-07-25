import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookingCard = ({}) => <div></div>;

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
        className="mx-auto max-w-[1350px] min-h-[85vh] md:max-w-[980px] lg:max-w-[90vw] lg:max-h-[630px] rounded-lg bg-bookingPageBG  text-zinc-50 flex flex-col md:flex-row items-center justify-around"
      >
        {bookingPageConstants.map((bookingConstant, index) => (
          <BookingCard key={bookingPageConstants.id} />
        ))}
      </motion.div>
    </div>
  );
};

export default PromoPage;
