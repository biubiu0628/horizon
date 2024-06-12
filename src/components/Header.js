import React from "react";
import Search from "../images/header/search.svg";
import Info from "../images/header/info.svg";
import Moon from "../images/header/moon.svg";
import Notification from "../images/header/notification.svg";
import Avatar from "../images/header/avatar.svg";

const Header = () => {
  return (
    <div
      className="bg-white w-[422px] h-[45px] rounded-full 
    flex items-center justify-between px-2"
    >
      <div
        className="bg-[#F4F7FE] w-[214px] h-[35px] 
        rounded-full flex items-center gap-2 pl-4"
      >
        <img src={Search} alt="" className="size-[11px]" />
        <input
          className="bg-[#F4F7FE] focus:outline-none h-[14px] text-[14px]"
          placeholder="Search"
        />
      </div>
      <img src={Notification} alt="" />
      <img src={Moon} alt="" />
      <img src={Info} alt="" />
      <img src={Avatar} alt="" className="size-[35px]" />
    </div>
  );
};

export default Header;
