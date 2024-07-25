import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import PromoBlock from "./PromoBlock";
import TitleBlock from "./TitleBlock";
import LocationBlock from "./LocationBlock";
import BookingBlock from "./BookingBlock";
import LinkBlock from "./LinkBlock";
import VideoGalleryBlock from "./VideoGalleryBlock";
import AboutBlock from "./AboutBlock";
import FacilityBlock from "./FacilityBlock";

const BentoCat = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 overflow-hidden">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          staggerChildren: 0.2,
        }}
        className="mx-auto max-w-[1350px] min-h-[85vh] md:max-w-[980px] lg:max-w-[1100px] lg:max-h-[630px] grid grid-cols-12 grid-rows-12 gap-4 grid-flow-dense text-zinc-50 "
      >
        <TitleBlock />
        <PromoBlock />
        <LinkBlock />
        <VideoGalleryBlock />
        <FacilityBlock />
        <LocationBlock />
        <AboutBlock />
        <BookingBlock />
      </motion.div>
    </div>
  );
};

// const Block = ({ className, ...rest }) => {
//   return (
//     <motion.div
//       variants={{
//         initial: {
//           scale: 0,
//           y: "-50%",
//           x: "-50%",
//         },
//         animate: {
//           scale: 1,
//           y: "0%",
//           x: "0%",
//         },
//       }}
//       transition={{
//         type: "spring",
//         mass: 3,
//         stiffness: 400,
//         damping: 50,
//       }}
//       className={twMerge(
//         "rounded-lg border border-zinc-700 bg-zinc-800 ",
//         className
//       )}
//       {...rest}
//     />
//   );
// };

export default BentoCat;
