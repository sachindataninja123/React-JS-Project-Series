import React from "react";
import dice from "/images/dices.png";

const StartGame = ({ toggle }) => {
  return (
    <>
      <div className="flex w-[1200px] items-center justify-between mx-auto my-30  gap-3">
        <img className="w-[50%]" src={dice} alt="" />
        <div className="flex items-end justify-between flex-col w-[40%]">
          <h1 className="text-[8vw] font-bold  leading-none ">DICE GAME</h1>
          <button
            onClick={toggle}
            className="bg-black text-white py-3 px-14 rounded-[5px] cursor-pointer mr-20 hover:bg-gray-500
  transition duration-300 ease-in-out "
          >
            Play Now
          </button>
        </div>
      </div>
    </>
  );
};

export default StartGame;
