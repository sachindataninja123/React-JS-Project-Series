import React, { isValidElement } from "react";
import Foodcards from "./Foodcards";
import data from "../data.json";

const MainContainer = ({data}) => {
  return (
    <div id="hide" className="bg-[url('./bg.png')] h-[calc(100vh-160px)] object-cover bg-no-repeat w-full bg-cover flex items-start pt-7 pb-7 gap-5 justify-center flex-wrap overflow-auto  ">
      {data.map((item, idx) => {
        return (
          <div key={idx}>
            <Foodcards item={item} key={idx} />
          </div>
        );
      })}
    </div>
  );
};

export default MainContainer;
