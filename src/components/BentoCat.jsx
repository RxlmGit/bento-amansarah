import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import PromoBlock from "./PromoBlock";
import TitleBlock from "./TitleBlock";
import LocationBlock from "./LocationBlock";
import BookingBlock from "./BookingBlock";
import LinkBlock from "./LinkBlock";

const BentoCat = () => {
  return (
    <div className=" min-h-screen bg-zinc-900 px-4 py-12">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.5,
        }}
        className="mx-auto max-w-[1350px] min-h-[85vh] md:max-w-[980px] lg:max-w-[1100px] lg:max-h-[630px] grid grid-cols-12 grid-rows-12 gap-4 grid-flow-dense text-zinc-50"
      >
        <TitleBlock />
        <PromoBlock />
        <LinkBlock />
        <Block5 />
        <Block6 />
        <LocationBlock />
        <Block8 />
        <BookingBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
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
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "rounded-lg border border-zinc-700 bg-zinc-800 ",
        className
      )}
      {...rest}
    />
  );
};

const Block5 = () => (
  <Block className="col-span-7 row-span-4 md:col-span-6 md:row-span-6">
    {" "}
    <h2>4 video gallery</h2>{" "}
  </Block>
);

const Block6 = () => (
  <Block className="col-span-5 row-span-4 md:col-span-3 md:row-span-7">
    {" "}
    <h2>5 facilities</h2>{" "}
  </Block>
);

const Block8 = () => (
  <Block className="col-span-6 row-span-4 md:row-span-3">
    {" "}
    <h2>7 about us</h2>
  </Block>
);

export default BentoCat;
