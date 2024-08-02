import React from "react";
import { motion } from "framer-motion";
import { SiFacebook, SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";

const LinkBlock = () => {
  return (
    <motion.a
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
      className="rounded-lg border border-zinc-700 bg-transparent col-span-6 row-span-3 md:col-span-3 md:row-span-5 p-6"
    >
      <div className="grid grid-rows-2 grid-cols-2 w-full h-full gap-3 text-xl">
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61554860038166"
        >
          <motion.div
            whileHover={{
              rotate: "-2.5deg",
              scale: 1.2,
            }}
            whileTap={{
              scale: 0.8,
            }}
            transition={{
              duration: 0.2,
              ease: "circOut",
            }}
            className={
              "bg-blue-500 grid min-h-full place-content-center rounded-lg"
            }
          >
            <SiFacebook />
          </motion.div>
        </a>
        <a href="">
          <motion.div
            whileHover={{
              rotate: "2.5deg",
              scale: 1.2,
            }}
            whileTap={{
              scale: 0.8,
            }}
            className={
              "bg-white text-black grid min-h-full place-content-center rounded-lg"
            }
          >
            <SiTiktok />
          </motion.div>
        </a>
        <a href="">
          <motion.div
            whileHover={{
              rotate: "-2.5deg",
              scale: 1.2,
            }}
            whileTap={{
              scale: 0.8,
            }}
            className={
              "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] grid min-h-full place-content-center rounded-lg"
            }
          >
            <SiInstagram />
          </motion.div>
        </a>
        <a href="">
          <motion.div
            whileHover={{
              rotate: "2.5deg",
              scale: 1.2,
            }}
            whileTap={{
              scale: 0.8,
            }}
            className={
              "bg-[#FF0000] grid min-h-full place-content-center rounded-lg"
            }
          >
            <SiYoutube />
          </motion.div>
        </a>
      </div>
    </motion.a>
  );
};

export default LinkBlock;
