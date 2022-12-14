import React from "react";
import { BsPencilSquare } from "react-icons/bs";
const LeftSideBar = () => {
  return (
    <div className="hidden lg:flex w-[15rem] p-3">
      {/* Compose btn */}
      <div className="flex items-center justify-center rounded-full h-12 bg-red-500 w-36">
        {/* <button className=""></button> */}
        <button>
          <BsPencilSquare />
          Compose
        </button>
      </div>
    </div>
  );
};

export default LeftSideBar;
