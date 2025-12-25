import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaRegComment,
  FaShare,
} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Button from "./Button";

const UserCard = ({name,img,role,likecount,commentcount,sharecount}) => {
  
  return (
    <>
      <div className="shadow-2xl h-110 w-72.5 rounded-2xl overflow-hidden bg-gray-200 ">
        <div className="h-[30%] bg-blue-500 w-full relative">
          <img
            className="h-30 rounded-full w-30 object-cover absolute translate-y-1/3 left-[50%] translate-x-[-50%] border-4 border-blue-500 p-0.5 bg-white"
            src={img}
            alt="img loading error"
          />
        </div>

        <div className="flex flex-col justify-center items-center mt-10 ">
          <h1 className="font-bold text-3xl">{name}</h1>
          <h2>{role}</h2>
          <div className="flex gap-4 mt-3 cursor-pointer ">
            <FaYoutube className="p-2 bg-black text-3xl text-white rounded-full" />
            <FaInstagram className="p-2 bg-black text-3xl text-white rounded-full" />
            <FaFacebook className="p-2 bg-black text-3xl text-white rounded-full" />
          </div>
          <div className="flex gap-4">
            <Button text="Subscribe" />
            <Button text="Message" />
          </div>

          <div className="flex gap-5 mt-10">
            <div className="flex items-center justify-center gap-1">
              <CiHeart />
              <span>{likecount}</span>
            </div>
            <Line />
            <div className="flex items-center justify-center gap-1">
              <FaRegComment />
              <span>{commentcount}</span>
            </div>
            <Line />
            <div className="flex items-center justify-center gap-1">
              <FaShare />
              <span>{sharecount}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Line = () => {
  return (
    <div>
      <div className="w-px bg-black/20 h-6"></div>
    </div>
  );
};

export default UserCard;
