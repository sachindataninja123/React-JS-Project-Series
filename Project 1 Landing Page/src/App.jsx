import React from "react";
import "./App.css";
import brandLogo from "./assets/brand_logo.png";
import shoe from "./assets/shoe_image.png";

const App = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-25 h-20 ">
        <div>
          <img className="" src={brandLogo} alt="" />
        </div>
        <div className="flex items-center justify-center gap-5 text-[18px] ">
          <a href="">Menu</a>
          <a href="">Location</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <div className="bg-red-500 py-1 px-5 rounded-[5px]">
          <button className="cursor-pointer">Login</button>
        </div>
      </nav>

      <main className="flex justify-between w-full pl-40 mt-20">
        <div className="w-[50%] h-full">
          <h1 className="text-8xl font-bold uppercase">
            Your feet deserves the best
          </h1>
          <p className="text-[18px] mt-5">
            Shoes are more than just a necessity — they’re a reflection of
            personality, comfort, and style. From sporty sneakers designed for
            performance to elegant leather shoes that define sophistication,
            every pair tells a story.
          </p>
          <button className="bg-red-500 py-2 px-5 mr-5 mt-5 cursor-pointer">Shop Now</button>
          <button  className="border-black border-2 py-2 px-5 mt-5 ml-5 cursor-pointer">Category</button>
        </div>

        <div className="w-[40%] h-full">
          <img className="w-130 h-130 " src={shoe} alt="" />
        </div>
      </main>
    </>
  );
};

export default App;
