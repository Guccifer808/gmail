import React from "react";

const Email = ({ sender, title, time }) => {
  return (
    <div className="flex justify-between border-b py-1.5 px-6 bg-gray-100 hover:bg-gray-200/75">
      <div className="">
        <p className="w-[8rem] font-semibold cursor-pointer truncate">
          {sender}
        </p>
      </div>
      <div className="flex items-center w-[60rem] truncate gap-2">
        <p className="font-semibold">Special Deal! - </p>
        <p className="font-semibold cursor-pointer truncate w-full ">{title}</p>
      </div>
      <p className="text-gray-500 w-[8rem] text-end">{time}</p>
    </div>
  );
};

export default Email;
