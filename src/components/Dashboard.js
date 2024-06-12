import React from "react";
import Header from "./Header";
import Stat from "../images/dashboard/stat.svg";
import Dola from "../images/dashboard/dola.svg";
import Tick from "../images/dashboard/tick.svg";
import Tick2 from "../images/dashboard/tick2.svg";
import Doc from "../images/dashboard/doc.svg";
import Flag from "../images/dashboard/flag.svg";
import Down from "../images/dashboard/down.svg";
import Up from "../images/dashboard/up.svg";
import Calendar from "../images/dashboard/calendar.svg";
import AreaChart from "./AreaChart";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-[50%_50%] grid-rows-[70px_97px_repeat(4,345px)] pt-8 gap-2">
        <div>
          <p className="flex flex-col">
            <span className="text-[14px] text-[#707EAE]">
              Pages / Dashboard
            </span>
            <span className="text-[30px] font-bold text-[#2B3674]">
              Main Dashboard
            </span>
          </p>
        </div>
        {/* header */}
        <div className="place-self-end">
          <Header />
        </div>
        {/* h1c1 */}
        <div className="grid grid-cols-3 gap-2">
          {/* 1 */}
          <div className="bg-white rounded-[20px] flex items-center">
            <div className="px-4">
              <div className="flex justify-center items-center rounded-full bg-[#F4F7FE] size-[56px]">
                <img src={Stat} alt="" />
              </div>
            </div>
            <p className="flex flex-col">
              <span className="text-[14px] text-[#A3AED0]">Earnings</span>
              <span className="text-[24px] text-[#2B3674] font-bold">
                $350.4
              </span>
            </p>
          </div>
          {/* 2 */}
          <div className="bg-white rounded-[20px] flex items-center">
            <div className="px-4">
              <div className="flex justify-center items-center rounded-full bg-[#F4F7FE] size-[56px]">
                <img src={Dola} alt="" />
              </div>
            </div>
            <p className="flex flex-col">
              <span className="text-[14px] text-[#A3AED0]">
                Spend this month
              </span>
              <span className="text-[24px] text-[#2B3674] font-bold">
                $642.39
              </span>
            </p>
          </div>
          {/* 3 */}
          <div className="bg-white rounded-[20px] flex items-center pl-4">
            <p className="flex flex-col">
              <span className="text-[14px] text-[#A3AED0]">Sales</span>
              <span className="text-[24px] font-bold text-[#2B3674]">
                $574.34
              </span>
              <p className="text-[12px]">
                <span className="font-bold text-[#05CD99]">+23% </span>
                <span className="text-[#A3AED0]">since last month</span>
              </p>
            </p>
          </div>
        </div>
        {/* h1c2 */}
        <div className="grid grid-cols-3 gap-2">
          {/* 1 */}
          <div className="bg-white rounded-[20px] flex items-center justify-between px-4">
            <div>
              <p className="flex flex-col">
                <span className="text-[14px] text-[#A3AED0]">Your balance</span>
                <span className="text-[24px] text-[#2B3674] font-bold">
                  $1,000
                </span>
              </p>
            </div>
            <div className="flex items-center gap-1">
              <img src={Flag} alt="" />
              <img src={Down} alt="" className="cursor-pointer" />
            </div>
          </div>
          {/* 2 */}
          <div className="bg-white rounded-[20px] flex items-center">
            <div className="px-4">
              <div
                className="flex justify-center items-center rounded-full bg-gradient-to-r
              from-[#4481EB] to-[#04BEFE] size-[56px]"
              >
                <img src={Tick} alt="" />
              </div>
            </div>
            <p className="flex flex-col">
              <span className="text-[14px] text-[#A3AED0]">New Tasks</span>
              <span className="text-[24px] text-[#2B3674] font-bold">154</span>
            </p>
          </div>
          {/* 3 */}
          <div className="bg-white rounded-[20px] flex items-center">
            <div className="px-4">
              <div className="flex justify-center items-center rounded-full bg-[#F4F7FE] size-[56px]">
                <img src={Doc} alt="" />
              </div>
            </div>
            <p className="flex flex-col">
              <span className="text-[14px] text-[#A3AED0]">Total Projects</span>
              <span className="text-[24px] text-[#2B3674] font-bold">2935</span>
            </p>
          </div>
        </div>
        {/* h2c1 */}
        <div className="bg-white rounded-[20px] grid grid-cols-[20%_80%] p-6">
          <div className="flex flex-col">
            <div className="flex bg-[#F4F7FE] w-[123px] h-[37px] p-2 rounded-[7px] gap-2 justify-center">
              <img src={Calendar} alt="" />
              <p className="text-[14px] text-[#A3AED0]">This month</p>
            </div>
            <div className="py-6">
              <p className="text-[34px] text-[#2B3674] font-bold">$37.5K</p>
              <p className="flex items-center gap-2">
                <span className="text-[14px] text-[#A3AED0]">Total Spent</span>
                <span className="flex text-[14px] font-bold text-[#05CD99]">
                  <img src={Up} alt="" />
                  +2.45%
                </span>
              </p>
            </div>
            <div className="flex gap-1">
              <img src={Tick2} alt="" />
              <p className="text-[#05CD99] text-[16px] font-bold">On track</p>
            </div>
          </div>
          <div>
            <div className="flex justify-end">
              <div className="size-[33px] bg-[#F4F7FE] flex justify-center items-center rounded-[10px]">
                <img src={Stat} alt="" className="size-[24px]" />
              </div>
            </div>
            <AreaChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
