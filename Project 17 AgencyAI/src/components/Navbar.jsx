import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div
        className="flex justify-between items-center
 px-4 sm:px-12 lg:px-24 xl:px-40 py-4
 sticky top-0 z-20 backdrop-blur-xl
 bg-white dark:bg-gray-900/65"
      >
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          className="w-32 sm:w-40"
          alt="logo"
        />

        <div
          className={`text-gray-700 dark:text-white sm:text-sm ${
            !sidebarOpen
              ? "max-sm:w-0 overflow-hidden"
              : "max-sm:w-60 max-sm:pl-10"
          }  max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
        >
          <img
            src={assets.close_icon}
            alt=""
            className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />

          <a
            href="#"
            onClick={() => {
              setSidebarOpen(false);
            }}
            className="sm:hover:border-b"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => {
              setSidebarOpen(false);
            }}
            className="sm:hover:border-b"
          >
            Services
          </a>
          <a
            href="#our-work"
            onClick={() => {
              setSidebarOpen(false);
            }}
            className="sm:hover:border-b"
          >
            Our Work
          </a>
          <a
            href="#contact-us"
            onClick={() => {
              setSidebarOpen(false);
            }}
            className="sm:hover:border-b"
          >
            Contact Us
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          <img
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            alt=""
            onClick={() => setSidebarOpen(true)}
            className="w-8 sm:hidden cursor-pointer"
          />

          <a
            href="#contact-us"
            className="text-sm max-sm:hidden flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
          >
            Connect <img src={assets.arrow_icon} width={14} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
