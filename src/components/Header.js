import React from "react";
import Search from "../images/header/search.svg";
import Info from "../images/header/info.svg";
import Moon from "../images/header/moon.svg";
import Notification from "../images/header/notification.svg";
import Avatar from "../images/header/avatar.svg";

const Header = ({ name, name2 }) => {
  return (
    <div className="flex w-full justify-between items-end pt-8 px-4 min-[800px]:px-0">
      {/* title */}
      <div className="col-span-2 flex gap-2 items-end">
        {/* menu */}
        <button
          className="group flex size-[66px] cursor-pointer items-center justify-center 
            rounded-3xl bg-white p-2 focus:bg-slate-200 min-[800px]:hidden"
        >
          <div className="space-y-2">
            <span
              className="block h-1 w-10 origin-center rounded-full bg-[#2B3674] transition-transform 
              ease-in-out group-focus:translate-y-1.5 group-focus:rotate-45"
            ></span>
            <span
              className="block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform 
              ease-in-out group-focus:w-10 group-focus:-translate-y-1.5 group-focus:-rotate-45"
            ></span>
          </div>
        </button>
        <p className="flex flex-col">
          <span className="text-[14px] text-[#707EAE]">Pages / {name}</span>
          <span className="text-[30px] font-bold text-[#2B3674]">{name2}</span>
        </p>
      </div>
      {/* bar */}
      <div
        className="bg-white w-20% h-[45px] rounded-full 
        flex items-center justify-between px-2 gap-2"
      >
        <button className="min-[800px]:hidden size-[35px] rounded-full flex justify-center items-center bg-[#A3AED0] hover:bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="size-[11px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <label
          for="search"
          className="hidden bg-[#F4F7FE] w-[214px] h-[35px] 
        rounded-full min-[800px]:flex items-center gap-2 pl-4 "
        >
          <img src={Search} alt="" className="size-[11px]" />
          <input
            id="search"
            className="bg-[#F4F7FE] focus:outline-none h-[14px] text-[14px]"
            placeholder="Search"
          />
        </label>
        <button className="min-[800px]:hidden size-[35px] rounded-full flex justify-center items-center bg-[#A3AED0] hover:bg-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="size-[11px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="hidden min-[800px]:flex gap-3 pl-2">
          <img src={Notification} alt="" />
          <img src={Moon} alt="" />
          <img src={Info} alt="" />
          <img src={Avatar} alt="" className="size-[35px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
