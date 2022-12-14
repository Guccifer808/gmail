import React from "react";

const Email = ({ sender, title, time }) => {
  return (
    <div className="flex justify-between border-b py-1.5 px-6 ">
      <p className="w-[8rem] font-semibold cursor-pointer">{sender}</p>
      <div className="flex items-center justify-start max-w-[30rem]">
        <p className="font-semibold cursor-pointer truncate">{title}</p>
      </div>
      <p className="text-gray-500 w-[8rem] text-end">{time}</p>
    </div>
  );
};

export default Email;
