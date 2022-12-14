import React from "react";

const Category = ({ title, icon }) => {
  return (
    <div className="flex gap-2 items-center font-semibold ">
      <button className="flex items-center">{icon}</button>
      <p className="text-[15px]">{title}</p>
    </div>
  );
};

export default Category;
