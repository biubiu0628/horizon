import React from "react";
import Search from "../images/header/search.svg";
import Info from "../images/header/info.svg";
import Moon from "../images/header/moon.svg";
import Notification from "../images/header/notification.svg";
import Avatar from "../images/header/avatar.svg";

const Header = ({ name, name2 }) => {
  return (
    <div className="flex w-full justify-between items-end pt-8">
      {/* title */}
      <div className="col-span-2">
        <p className="flex flex-col">
          <span className="text-[14px] text-[#707EAE]">Pages / {name}</span>
          <span className="text-[30px] font-bold text-[#2B3674]">{name2}</span>
        </p>
      </div>
      {/* bar */}
      <div
        className="bg-white w-[380px] h-[45px] rounded-full 
      flex items-center justify-between px-2"
      >
        <label
          for="search"
          className="bg-[#F4F7FE] w-[214px] h-[35px] 
        rounded-full flex items-center gap-2 pl-4"
        >
          <img src={Search} alt="" className="size-[11px]" />
          <input
            id="search"
            className="bg-[#F4F7FE] focus:outline-none h-[14px] text-[14px]"
            placeholder="Search"
          />
        </label>
        <img src={Notification} alt="" />
        <img src={Moon} alt="" />
        <img src={Info} alt="" />
        <img src={Avatar} alt="" className="size-[35px]" />
      </div>
    </div>
  );
};

export default Header;
