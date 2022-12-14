import React from "react";
import Email from "./Email";

const Emails = () => {
  const emails = [
    {
      sender: "Google",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "12:00 AM",
    },
    {
      sender: "Facebook",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "11:00 AM",
    },
    {
      sender: "Instagram",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "10:00 AM",
    },
    {
      sender: "Github",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. New repositories",
      time: "Dec 28",
    },
    {
      sender: "Sales",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Special deal!",
      time: "Dec 28",
    },
    {
      sender: "Spotify",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "Dec 26",
    },
    {
      sender: "BankBOA",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "Dec 25",
    },
    {
      sender: "TailwindCSS",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. 10% Off!",
      time: "Dec 24",
    },
    {
      sender: "JavascriptSchool",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "Dec 23",
    },
    {
      sender: "support@react.js",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "Dec 23",
    },
    {
      sender: "Happiness",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "Dec 21",
    },
  ];
  return (
    <div className="">
      {emails.map((obj) => (
        <Email sender={obj.sender} title={obj.title} time={obj.time} />
      ))}
    </div>
  );
};

export default Emails;
