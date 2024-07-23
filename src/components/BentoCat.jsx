import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiTiktok,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";

const BentoCat = () => {
  return (
    <div className=" min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <div className="mx-auto max-w-[1280px] min-h-[85vh] md:max-w-[1024px] lg:max-w-[1280px] grid grid-cols-12 grid-rows-12 gap-4 grid-flow-dense">
        <Block2 />
        <Block3 />
        <LinkBlock />
        <Block5 />
        <Block6 />
        <Block7 />
        <Block8 />
        <Block9 />
      </div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "rounded-lg border border-zinc-700 bg-zinc-800 p-6 ",
        className
      )}
      {...rest}
    />
  );
};

const Block2 = () => (
  <Block className="col-span-12 row-span-3 md:col-span-8 md:row-span-3">
    {" "}
    <h2>1 title</h2>{" "}
  </Block>
);

const Block3 = () => (
  <Block className="col-span-6 row-span-3 md:col-span-4 md:row-span-3 bg-[#6D402B]">
    {" "}
    <h2>2 promos</h2>
  </Block>
);

const LinkBlock = () => (
  <Block className="col-span-6 row-span-3 md:col-span-3 md:row-span-5">
    <div className="grid grid-rows-2 grid-cols-2 w-full h-full gap-3 text-xl">
      <a href="#">
        <Block
          whileHover={{
            rotate: "-2.5deg",
            scale: 1.2,
          }}
          className={
            "bg-blue-500 grid min-h-full place-content-center rounded-xl"
          }
        >
          <SiFacebook />
        </Block>
      </a>
      <a href="">
        <Block
          whileHover={{
            rotate: "2.5deg",
            scale: 1.2,
          }}
          className={
            "bg-white text-black grid min-h-full place-content-center rounded-xl"
          }
        >
          <SiTiktok />
        </Block>
      </a>
      <a href="">
        <Block
          whileHover={{
            rotate: "-2.5deg",
            scale: 1.2,
          }}
          className={
            "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] grid min-h-full place-content-center rounded-xl"
          }
        >
          <SiInstagram />
        </Block>
      </a>
      <a href="">
        <Block
          whileHover={{
            rotate: "2.5deg",
            scale: 1.2,
          }}
          className={
            "bg-[#FF0000] grid min-h-full place-content-center rounded-xl"
          }
        >
          <SiYoutube />
        </Block>
      </a>
    </div>
  </Block>
);

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
const Block7 = () => (
  <Block className="col-span-3 row-span-4 md:row-span-4 ">
    {" "}
    <h2>6 location</h2>
  </Block>
);
const Block8 = () => (
  <Block className="col-span-6 row-span-4 md:row-span-3">
    {" "}
    <h2>7 about us</h2>
  </Block>
);
const Block9 = () => (
  <Block className="col-span-3 row-span-4 md:row-span-2">
    {" "}
    <h2>8 book btn</h2>
  </Block>
);

export default BentoCat;
