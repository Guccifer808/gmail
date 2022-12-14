import React from "react";

const LeftSideBtn = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-gray-900 mt-4">
      {icon}
      <p className="font-semibold">{title}</p>
    </div>
  );
};

export default LeftSideBtn;
