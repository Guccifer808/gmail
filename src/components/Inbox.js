import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TbDotsVertical, TbArrowsLeftRight } from "react-icons/tb";
// import { GoSettings } from "react-icons/go";
import { BsPlusSquare, BsInboxFill } from "react-icons/bs";
import { MdOutlineSettings, MdOutlineKeyboardHide } from "react-icons/md";
import Category from "./Category";

const Inbox = () => {
  const categories = [
    {
      title: "Primary",
      icon: <BsInboxFill className="hover:text-yellow-500" />,
    },
    { title: "Social", icon: <BsInboxFill /> },
    { title: "Promotions", icon: <BsInboxFill /> },
    { title: "Updates", icon: <BsInboxFill /> },
    { title: "Forums", icon: <BsInboxFill /> },
  ];
  return (
    <div className="pt-2.5">
      {/* Filters */}
      <div className="flex px-4 items-center justify-between border-b pb-2.5">
        {/* Left */}
        <div className="flex items-center gap-6 text-gray-600">
          <BsPlusSquare className="h-[1.2rem] w-[1.2rem] hover:text-gray-900 cursor-pointer" />
          <AiOutlineLoading3Quarters className="h-[1.2rem] w-[1.2rem] hover:text-gray-900 cursor-pointer" />
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
