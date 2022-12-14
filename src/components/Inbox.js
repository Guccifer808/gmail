import React from "react";
import { GiClockwiseRotation } from "react-icons/gi";
import { TbDotsVertical, TbArrowsLeftRight } from "react-icons/tb";
// import { GoSettings } from "react-icons/go";
import {
  BsPlusSquare,
  BsInbox,
  BsPeople,
  BsBookmarkCheck,
  BsInfoSquare,
  BsChatSquareQuote,
} from "react-icons/bs";
import { MdOutlineSettings, MdOutlineKeyboardHide } from "react-icons/md";
import Category from "./Category";

const Inbox = () => {
  const categories = [
    { title: "Primary", icon: <BsInbox /> },
    { title: "Social", icon: <BsPeople /> },
    { title: "Promotions", icon: <BsBookmarkCheck /> },
    { title: "Updates", icon: <BsInfoSquare /> },
    { title: "Forums", icon: <BsChatSquareQuote /> },
  ];
  return (
    <div className="pt-2.5">
      {/* Filters */}
      <div className="flex px-4 items-center justify-between border-b pb-2.5">
        {/* Left */}
        <div className="flex items-center gap-6 text-gray-600">
          <BsPlusSquare className="h-[1.2rem] w-[1.2rem] hover:text-gray-900 cursor-pointer" />
          <GiClockwiseRotation className="h-[1.2rem] w-[1.2rem] hover:text-gray-900 cursor-pointer" />
          <TbDotsVertical className="h-[1.2rem] w-[1.2rem] hover:text-gray-900 cursor-pointer" />
        </div>
        {/* Right */}

        <div className="flex items-center gap-6 text-gray-600">
          <p className="font-medium text-[14px]">1-50 of 808</p>
          <TbArrowsLeftRight className="h-[1.3rem] w-[1.3rem] hover:text-gray-900 cursor-pointer" />
          <MdOutlineKeyboardHide className="h-[1.3rem] w-[1.3rem] hover:text-gray-900 cursor-pointer" />
          <MdOutlineSettings className="h-[1.3rem] w-[1.3rem] hover:text-gray-900 cursor-pointer" />
        </div>
      </div>
      {/* Categories */}
      <div className="flex py-2 px-4 items-center justify-between border-b text-gray-600 hover:text-gray-900 cursor-pointer">
        {categories.map((obj) => (
          <Category title={obj.title} icon={obj.icon} />
        ))}
      </div>
      {/* Mails */}
    </div>
  );
};

export default Inbox;
