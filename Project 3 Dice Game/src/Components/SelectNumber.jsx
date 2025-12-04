import React, { useState } from "react";

const SelectNumber = ({ SelectedNum, setSelectedNum }) => {
  const number = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="flex items-center justify-center gap-1 ">
        {number.map((item, key) => {
          return (
            <div
              key={key}
              onClick={() => setSelectedNum(item)}
              className={`border px-7 py-4 font-bold text-xl cursor-pointer 
    transition duration-300 ease-in-out
    ${item === SelectedNum ? "bg-black text-white" : "bg-white text-black"}
    hover:bg-black hover:text-white
  `}
            >
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SelectNumber;
