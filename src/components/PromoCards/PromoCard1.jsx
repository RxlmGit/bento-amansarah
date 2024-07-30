import React from "react";
import {
  promoCard1,
  promoCardStyle,
} from "../../assets/constants/PromoPageConstants";
import { motion } from "framer-motion";
import accentImages from "../../assets/imgs/bookingImgs/image";

const PromoCard1 = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(252, 247, 241, 1)",
      }}
      whileTap={{
        scale: 0.9,
      }}
      className=" bg-bookingCard1 rounded-lg text-black p-8 flex 
    flex-col justify-between  "
    >
      <div className="">
        <h1 className="font-cooperHeavy text-3xl font-extrabold mt-8 leading-snug max-w-[300px]">
          {promoCard1.title}
        </h1>
        <p className="font-inter text-md max-w-[240px] mt-14 leading-relaxed">
          {promoCard1.content}
        </p>
      </div>

      <div className="flex justify-end relative">
        <img
          className="absolute left-1 w-[110px]"
          src={accentImages.accent1}
          alt=""
        />

        <button className={`${promoCardStyle.btnStyle}`}>
          {promoCard1.btnLabel}
        </button>
      </div>
    </motion.div>
  );
};

export default PromoCard1;
