import { motion } from "framer-motion";
import { React, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { CatImgs2 } from "./VideoGalleryImgs/Page-2/ImageImport2";

const Component2 = () => {
  return (
    <section className="relative grid h-[620px] w-full place-content-center overflow-hidden ">
      <Cards />
    </section>
  );
};

export default Component2;

const Cards = () => {
  const containerRef = useRef(null);
  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src={CatImgs2.cat1}
        left="20%"
        top="30%"
        rotate="6deg"
      />
      <Card
        containerRef={containerRef}
        src={CatImgs2.cat2}
        left="50%"
        top="46%"
        rotate="-5deg"
        className=" size-60"
      />
      <Card
        containerRef={containerRef}
        src={CatImgs2.cat3}
        left="36%"
        top="47%"
        rotate="0"
        className=" size-72"
      />
      <Card
        containerRef={containerRef}
        src={CatImgs2.cat4}
        left="19%"
        top="16%"
        rotate="10deg"
        className=" size-48"
      />
      <Card
        containerRef={containerRef}
        src={CatImgs2.cat5}
        left="63%"
        top="28%"
        rotate="-5deg"
        className=" size-48"
      />
      <Card
        containerRef={containerRef}
        src={CatImgs2.cat6}
        left="32%"
        top="23%"
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
