import React from "react";
import TotalScore from "./TotalScore";
import SelectNumber from "./SelectNumber";
import RollDice from "./RollDice";
import { useState } from "react";

const GamePlay = () => {
  const [SelectedNum, setSelectedNum] = useState();
  const [currDice, setCurrDice] = useState(1);

  return (
    <>
      <div className="flex items-center justify-between px-20">
        <TotalScore />
        <div className=" flex items-end flex-col gap-2">
          <SelectNumber
            SelectedNum={SelectedNum}
            setSelectedNum={setSelectedNum}
          />
          <p className="text-xl"> Select Number</p>
        </div>
      </div>

      <RollDice currDice={currDice} setCurrDice={setCurrDice} />
    </>
  );
};

export default GamePlay;
