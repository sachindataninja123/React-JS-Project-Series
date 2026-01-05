import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 flex items-center justify-start px-10">
      <div>
        <img
          className="h-25 w-25 object-cover"
          src="https://image.similarpng.com/file/similarpng/original-picture/2021/09/Letter-e-logo-design-template-on-transparent-background-PNG.png"
          alt="logo"
        />
      </div>
      <div className="flex items-center justify-center gap-10 text-white text-xl ml-10">
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive ? "text-[tomato]" : "";
          }}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-[tomato]" : "";
          }}
          to={"/products"}
        >
          Products
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
