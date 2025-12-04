import React, { useState } from "react";

const RollDice = ({ currDice, setCurrDice }) => {
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    const randomNum = generateRandomNumber(1, 7);
    setCurrDice((prev) => randomNum);
  };

  return (
    <>
      <div className="mt-[50px] flex items-center justify-center flex-col">
        <img
          className="w-[180px] cursor-pointer"
          src={`/images/dice_${currDice}.png`}
          alt=""
          onClick={rollDice}
        />
        <p className="text-xl mt-3">Click on Dice to Roll</p>
      </div>
      <div className="flex items-center justify-center mt-10 flex-col">
        <button className="border px-8 py-1.5 cursor-pointer rounded-[7px] hover:bg-gray-700 hover:text-white transition-all">
          Reset Score
        </button>
        <button className="border px-8 py-1.5 mt-5 cursor-pointer bg-black text-white rounded-[7px] transition-all  hover:bg-gray-600 ">
          Show Rules
        </button>
      </div>
    </>
  );
};

export default RollDice;
