import React from "react";
import { motion } from "framer-motion";
import {
  promoCard3,
  promoCardStyle,
} from "../../assets/constants/PromoPageConstants";
import accentImages from "../../assets/imgs/bookingImgs/image";

const PromoCard3 = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(238, 214, 178, 1)",
      }}
      className=" bg-bookingCard3 rounded-lg text-black p-8 flex flex-col justify-between "
    >
      <div className="">
        <h1 className="font-cooperHeavy text-3xl font-extrabold mt-8 leading-snug max-w-[300px]">
          {promoCard3.title}
        </h1>
        <p className="font-inter text-md max-w-[240px] mt-12 leading-relaxed">
          {promoCard3.content}
        </p>
      </div>
      <div className="flex justify-end relative">
        <img
          className="absolute bottom-9 right-6 w-[90px]"
          src={accentImages.accent3}
          alt=""
        />
        <button className={`${promoCardStyle.btnStyle}`}>
          {promoCard3.btnLabel}
        </button>
      </div>
    </motion.div>
  );
};

export default PromoCard3;
