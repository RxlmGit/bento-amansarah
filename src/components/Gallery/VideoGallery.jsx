import { React, useState, useRef } from "react";
import { motion } from "framer-motion";

import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

const VideoGallery = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabRefs = useRef([]);

  const tabs = ["Home", "About", "Contact"];
  const contents = [<Component1 />, <Component2 />, <Component3 />];

  const handleTabClick = (index) => {
    setCurrentTab(index);
    tabRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12  overflow-hidden">
      <motion.div
        className="mx-auto min-h-[85vh] container border border-red-400 rounded-lg
          grid grid-cols-3 p-8 gap-6 text-white"
      >
        <div className="max-h-[560px] col-span-1 border-r border-r-zinc-700 flex flex-col items-center gap-10 text-white text-2xl ">
          {" "}
          {tabs.map((tab, index) => (
            <span
              key={index}
              onClick={() => setCurrentTab(index)}
              style={{ cursor: "pointer" }}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="col-span-2 border border-zinc-700">
          {tabs.map((tab, index) => (
            <div key={index} ref={(el) => (tabRefs.current[index] = el)}>
              {currentTab === index && <TabContent content={contents[index]} />}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const TabContent = ({ content }) => {
  return <div>{content}</div>;
};

export default VideoGallery;
