import React from "react";

const Navigation = () => {
  return (
    <div>
      <ul className="flex gap-10">
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => setCurrentTab(index)}
            style={{ cursor: "pointer" }}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
