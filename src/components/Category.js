import React from "react";

const Category = ({ title, icon }) => {
  return (
    <div className="flex gap-2 items-center">
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default Category;
