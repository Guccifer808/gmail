import React from "react";
import Email from "./Email";

const Emails = () => {
  const emails = [
    {
      sender: "Google",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur assets. Lorem ipsum dolor sit amet consectetur",
      time: "12:00 AM",
    },
    {
      sender: "Facebook",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur",
      time: "11:00 AM",
    },
    {
      sender: "Instagram",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur react. Lorem ipsum dolor sit amet consectetur",
      time: "10:00 AM",
    },
    {
      sender: "Github",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. New repositories. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur",
      time: "Dec 28",
    },
    {
      sender: "Sales",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Special deal!. Lorem ipsum dolor sit amet consectetur",
      time: "Dec 28",
    },
    {
      sender: "Spotify",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur",
      time: "Dec 26",
    },
    {
      sender: "BankBOA",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      time: "Dec 25",
    },
    {
      sender: "TailwindCSS",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. 10% Off! Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      time: "Dec 24",
    },
    {
      sender: "Javascript",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      time: "Dec 23",
    },
    {
      sender: "helpt@react.js",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      time: "Dec 23",
    },
    {
      sender: "Happiness",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      time: "Dec 21",
    },
    {
      sender: "Google",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur assets. Lorem ipsum dolor sit amet consectetur",
      time: "12:00 AM",
    },
    {
      sender: "Facebook",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur",
      time: "11:00 AM",
    },
    {
      sender: "Instagram",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur react. Lorem ipsum dolor sit amet consectetur",
      time: "10:00 AM",
    },
    {
      sender: "Github",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. New repositories. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur",
      time: "Dec 28",
    },
    {
      sender: "Sales",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Special deal!. Lorem ipsum dolor sit amet consectetur",
      time: "Dec 28",
    },
    {
      sender: "Spotify",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur",
      time: "Dec 26",
    },
    {
      sender: "BankBOA",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      time: "Dec 25",
    },
    {
      sender: "TailwindCSS",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. 10% Off! Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      time: "Dec 24",
    },
    {
      sender: "Javascript",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      time: "Dec 23",
    },
    {
      sender: "helpt@react.js",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      time: "Dec 23",
    },
    {
      sender: "Happiness",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      time: "Dec 21",
    },

    {
      sender: "Sales",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Special deal!. Lorem ipsum dolor sit amet consectetur",
      time: "Dec 28",
    },
    {
      sender: "Spotify",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur",
      time: "Dec 26",
    },
    {
      sender: "BankBOA",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      time: "Dec 25",
    },
    {
      sender: "TailwindCSS",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. 10% Off! Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      time: "Dec 24",
    },
    {
      sender: "Javascript",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      time: "Dec 23",
    },
    {
      sender: "helpt@react.js",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      time: "Dec 23",
    },
    {
      sender: "Happiness",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
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
