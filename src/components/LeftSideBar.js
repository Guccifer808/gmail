import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaInbox, FaRegStar, FaRegClock } from "react-icons/fa";
import { MdLabelImportantOutline } from "react-icons/md";
import { AiOutlineSend, AiOutlineMail } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import LeftSideBtn from "./LeftSideBtn";

const LeftSideBar = () => {
  const buttons = [
    { icon: <FaInbox className="w-[1.4rem] h-[1.4rem]" />, title: "Inbox" },
    { icon: <FaRegStar className="w-[1.4rem] h-[1.4rem]" />, title: "Starred" },
    {
      icon: <FaRegClock className="w-[1.4rem] h-[1.4rem]" />,
      title: "Snoozed",
    },
    {
      icon: <MdLabelImportantOutline className="w-[1.4rem] h-[1.4rem]" />,
      title: "Important",
    },
    {
      icon: <AiOutlineSend className="w-[1.4rem] h-[1.4rem]" />,
      title: "Sent",
    },
    {
      icon: <HiOutlineDocumentText className="w-[1.4rem] h-[1.4rem]" />,
      title: "Drafts",
    },
    {
      icon: <AiOutlineMail className="w-[1.4rem] h-[1.4rem]" />,
      title: "All Main",
    },
  ];
  return (
    <div className="hidden lg:block w-[12rem] p-3">
      {/* Compose btn */}
      <div className="flex items-center justify-center rounded-full h-12 w-36 shadow-sm shadow-gray-500 cursor-pointer">
        {/* <button className=""></button> */}
        <BsPencilSquare className="w-[1.4rem] h-[1.4rem] mr-2" />
        <p className="font-semibold">Compose</p>
      </div>
      {/* Buttons */}
      <div className="pl-6 pt-4 space-y-4">
        {buttons.map((item) => (
          <LeftSideBtn icon={item.icon} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
