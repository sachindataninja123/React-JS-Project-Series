import React from "react";
import "./App.css";
import image from "./assets/freepik--Character--inject-44.png";

const App = () => {
  return (
    <div>
      <div>
        <h1 className="mb-5 font-bold">Contact us</h1>
        <p className="w-[80%] m-auto">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </p>
      </div>

      <div className="flex items-start justify-around mt-10">
        <div className="flex items-center justify-center flex-col gap-5 w-[50%] mt-7 ">
          <div className="flex items-center justify-center gap-5">
            {" "}
            <p className="bg-black text-white px-8 py-2 rounded-[7px]">
              VIA SUPPORT CHAT
            </p>
            <p className="bg-black text-white px-8 py-2 rounded-[7px]">
              VIA CALL
            </p>
          </div>
          <div>
            <p className="border py-2 px-20 w-full rounded-[5px] mt-3 mb-5 ">VIA EMAIL FORM</p>
          </div>

          <div className="w-[70%] flex items- justify-center flex-col gap-5" >
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                className="border px-2 py-2 rounded-[5px] outline w-full "
              />
            </label>

            <label htmlFor="email">
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="border px-2 py-2 rounded-[5px] outline w-full  "
              />
            </label>

            <label htmlFor="number">
              <input
                type="number"
                id="name"
                placeholder="Enter Ph Number"
                className="border px-2 py-2 rounded-[5px] outline w-full  "
              />
            </label>

            <label htmlFor="area">
              <textarea
                name=""
                id="area"
                className="border w-full rounded-[5px] px-2 py-1 "
                placeholder="Enter About Yourself "
              ></textarea>
            </label>
          </div>
        </div>

        <div className="w-[50%]">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
