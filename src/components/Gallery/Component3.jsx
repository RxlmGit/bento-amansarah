import { motion } from "framer-motion";
import { React, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { CatImgs3 } from "./VideoGalleryImgs/Page-3/ImageImport3";

const Component3 = () => {
  return (
    <section className="relative grid h-[620px] w-full place-content-center overflow-hidden ">
      <Cards />
    </section>
  );
};

export default Component3;

const Cards = () => {
  const containerRef = useRef(null);
  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src={CatImgs3.cat1}
        left="30%"
        top="20%"
        rotate="6deg"
      />
      <Card
        containerRef={containerRef}
        src={CatImgs3.cat2}
        left="40%"
        top="15%"
        rotate="-5deg"
        className=" size-60"
      />
      <Card
        containerRef={containerRef}
        src={CatImgs3.cat3}
        left="50%"
        top="45%"
        rotate="0"
        className=" size-72"
      />
      <Card
        containerRef={containerRef}
        src={CatImgs3.cat4}
        left="20%"
        top="45%"
        rotate="10deg"
        className=" size-48"
      />
      <Card
        containerRef={containerRef}
        src={CatImgs3.cat5}
        left="12%"
        top="32%"
        rotate="-5deg"
        className=" size-48"
      />
      <Card
        containerRef={containerRef}
        src={CatImgs3.cat6}
        left="29%"
        top="10%"
        rotate="-10deg"
        className=" size-48"
      />
    </div>
  );
};

const Card = ({ src, alt, top, left, rotate, containerRef, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const incZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={incZIndex}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        " drag-elements absolute size-52 bg-neutral-200 p-1 pb-4",
        className
      )}
    />
  );
};
