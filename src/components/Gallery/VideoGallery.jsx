import { React, useState, useRef } from "react";
import { motion } from "framer-motion";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const VideoGallery = () => {
  const [selected, setSelected] = useState(null);

  const TabPages = [
    {
      title: "Tab 1",
      content: <Component1 />,
    },
    {
      title: "Tab 2",
      content: <Component2 />,
    },
    {
      title: "Tab 3",
      content: <Component3 />,
    },
  ].map((n, index) => ({ ...n, id: index + 1 }));

  const Content = ({ selected }) => {
    return (
      <div className="">
        {TabPages.map((t) => {
          return (
            <div className="overflow-hidden" key={t.id}>
              {selected === t.id && <div>{t.content}</div>}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 overflow-hidden">
      <motion.div
        initial={{
          scale: 0.9,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.9,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="mx-auto min-h-[85vh] container rounded-lg
          grid grid-cols-4 gap-6 text-white"
      >
        <div className=" col-span-1 border-r border-r-zinc-700 flex flex-col items-center justify-center gap-6 text-white text-2xl ">
          {TabPages.map((tab) => {
            return (
              <button
                onClick={() => setSelected(tab.id)}
                className={`py-2 w-[80%] rounded-xl ${
                  selected === tab.id
                    ? "bg-titleBlockBg"
                    : "text-orange-500 bg-zinc-800"
                }`}
                key={tab.id}
                selected={selected}
              >
                {tab.title}
              </button>
            );
          })}
        </div>
        <div className=" col-span-3 border border-zinc-700 relative overflow-hidden bg-black h-full">
          <motion.div
            initial={{
              rotate: "180deg",
              y: "-150%",
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              y: "0%",
              rotate: "0deg",
              opacity: 1,
            }}
            exit={{
              rotate: "180deg",
              y: "-150%",
              scale: 0.9,
              opacity: 0,
            }}
            transition={{
              duration: 1.1,
            }}
            className="absolute right-0 text-3xl"
          >
            <Link to="/">
              <FiArrowLeftCircle />
            </Link>
          </motion.div>
          {selected && <Content selected={selected} />}
        </div>
      </motion.div>
    </div>
  );
};

export default VideoGallery;
