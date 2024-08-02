import React from "react";
import { motion } from "framer-motion";
import PromoBlock from "./PromoBlock";
import TitleBlock from "./TitleBlock";
import LocationBlock from "./LocationBlock";
import BookingBlock from "./BookingBlock";
import LinkBlock from "./LinkBlock";
import VideoGalleryBlock from "./VideoGalleryBlock";
import AboutBlock from "./AboutBlock";
import FacilityBlock from "./FacilityBlock";
import splitDisclaimer from "../utils/DisclamerRevealAnim";

const disclaimerText =
  "Disclaimer: This website is by no means official and is only a content website featuring the business.";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const BentoCat = () => {
  const textChars = splitDisclaimer(disclaimerText);

  console.log(textChars);
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 overflow-hidden relative">
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

      <motion.p
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.02 }}
        className="absolute left-0 right-0 bottom-4 ml-auto mr-auto w-full text-sm text-center text-yellow-300"
      >
        {textChars.map((char, idx) => (
          <motion.span
            key={idx}
            transition={{
              duration: 0.35,
            }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
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
