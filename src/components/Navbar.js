import React from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiSearch } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import profilepic from "../assets/profilepic1.jpg";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-b py-3 px-4">
      {/* L Section */}
      <div className="flex items-center gap-3 ">
        <FiMenu className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
        <div className="w-14 h-[2.5rem] flex">
          <img
            src={logo}
            alt="logo"
            className="h-10 object-cover cursor-pointer"
          ></img>
        </div>
        <p className="-ml-3 text-gray-600 text-[22px] font-semibold cursor-pointer">
          Gmail
        </p>
      </div>
      {/* Search input */}
      <div className="w-full">
        <div className="flex relative items-center mx-auto max-w-[25rem]">
          <input
            id="Search"
            type="search"
            className="py-1.5 px-3 rounded-full bg-neutral-100 w-full pl-12 hover:bg-neutral-200/70 outline-0"
            placeholder="Search mail"
          />
          <div className="absolute text-[20px] left-0 hover:bg-gray-300/50 rounded-l-full p-2">
            <FiSearch className="pl-1 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* R Section */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 border p-1.5 rounded-full hover:bg-gray-200/70 cursor-pointer">
          <div className="w-8 h-8 flex rounded-full bg-gray-300 ">
            <img
              src={profilepic}
              alt="profilepic"
              className="object-cover rounded-full"
            />
          </div>
          <p className="whitespace-nowrap font-semibold text-gray-600 text-sm pr-1">
            Serhii D.
          </p>
        </div>
        <TbGridDots className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
