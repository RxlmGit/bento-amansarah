import React from "react";
import { motion } from "framer-motion";
import {
  promoCard2,
  promoCardStyle,
} from "../../assets/constants/PromoPageConstants";
import accentImages from "../../assets/imgs/bookingImgs/image";

const PromoCard2 = () => {
  return (
    <motion.a
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(255, 200, 61, 1)",
      }}
      className=" bg-bookingCard2 rounded-lg text-black p-8 flex 
flex-col justify-between "
    >
      <div className="relative">
        <h1 className="font-cooperHeavy text-3xl font-extrabold mt-8 leading-snug relative">
          {promoCard2.title}
        </h1>
        <img
          className="absolute right-[-1rem] top-[6.5rem] w-[70px] lg:w-[80px]"
          src={accentImages.accent2}
          alt=""
        />
        <p className="font-inter text-md max-w-[270px] mt-10 leading-relaxed">
          {promoCard2.content}
        </p>
        <br />
        <p className="font-inter text-md max-w-[240px] leading-relaxed">
          {promoCard2.content2}
        </p>
      </div>
      <div className="flex justify-end">
        <button className={`${promoCardStyle.btnStyle}`}>
          {promoCard2.btnLabel}
        </button>
      </div>
    </motion.a>
  );
};

export default PromoCard2;
