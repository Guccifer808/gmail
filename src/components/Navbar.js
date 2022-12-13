import React from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiSearch } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-b py-3 px-6">
      {/* L Section */}
      <div className="flex items-center gap-3">
        <FiMenu className="w-6 h-6 text-gray-500" />
        <div className="w-14 h-[2.5rem] flex ">
          <img src={logo} alt="logo" className="h-10 object-cover "></img>
        </div>
        <p className="-ml-3 text-gray-500 text-[22px] font-semibold">Gmail</p>
      </div>
      {/* Search input */}
      <div className="w-full">
        <div className="flex relative items-center mx-auto max-w-[25rem]">
          <input
            type="search"
            className="py-1.5 px-3 rounded-full bg-neutral-100 w-full pl-8 hover:bg-neutral-200/70 focus:outline-neutral-300"
            placeholder="Search mail"
          />
          <FiSearch className="absolute text-[20px] left-2" />
        </div>
      </div>
      {/* R Section */}
      <div className=""></div>
    </div>
  );
};

export default Navbar;
