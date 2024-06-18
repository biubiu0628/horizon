import React, { useState } from "react";
import Header from "../Header";
import Stat from "../../images/dashboard/stat.svg";
import Dola from "../../images/dashboard/dola.svg";
import Tick from "../../images/dashboard/tick.svg";
import Tick2 from "../../images/dashboard/tick2.svg";
import Doc from "../../images/dashboard/doc.svg";
import Flag from "../../images/dashboard/flag.svg";
import Down from "../../images/dashboard/down.svg";
import Down2 from "../../images/dashboard/down2.svg";
import Up from "../../images/dashboard/up.svg";
import CalendarImage from "../../images/dashboard/calendar.svg";
import Ellipsis from "../../images/dashboard/ellipsis.svg";
import Check from "../../images/dashboard/check.svg";
import Cancel from "../../images/dashboard/cancel.svg";
import Error from "../../images/dashboard/error.svg";
import CheckBox from "../../images/dashboard/checkbox.svg";
import Indicator from "../../images/dashboard/indicator.svg";
import Fire from "../../images/dashboard/fire.svg";
import Timer from "../../images/dashboard/timer.svg";
import Video from "../../images/dashboard/video.svg";
import Avatars from "../../images/dashboard/avatars.svg";
import Avatar1 from "../../images/dashboard/avatar1.svg";
import Avatar2 from "../../images/dashboard/avatar2.svg";
import Avatar3 from "../../images/dashboard/avatar3.svg";
import FingerPrint from "../../images/dashboard/fingerprint.svg";
import Add from "../../images/dashboard/add.svg";
import Vert from "../../images/dashboard/vert.svg";
import Starbuck from "../../images/dashboard/starbuck.svg";
import Watch from "../../images/dashboard/watch.svg";
import Fastfood from "../../images/dashboard/fastfood.svg";
import AreaChart from "./AreaChart";
import ColumnChart from "./ColumnChart";
import ColumnChart2 from "./ColumnChart2";
import PieChart from "./PieChart";
import Nav from "../Nav";
import Footer from "../Footer";

const RowCheck = ({ name, percent, number, date }) => (
  <tr className="text-[14px] font-bold text-[#2B3674]">
    <th scope="row" className="py-2">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          className="size-[18px] border-solid border-[#A3AED0] accent-[#4318FF]"
        />
        {name}
      </div>
    </th>
    <td>{percent}</td>
    <td>{number}</td>
    <td>{date}</td>
  </tr>
);

const RowComplex = ({ name, image, status, date, progress }) => (
  <tr className="text-[14px] font-bold text-[#2B3674]">
    <th scope="row" className="pl-6 w-[300px]">
      <div className="flex gap-2 items-center">{name}</div>
    </th>
    <td>
      <div className="flex gap-1 items-center">
        <img src={image} alt="" />
        <p>{status}</p>
      </div>
    </td>
    <td>{date}</td>
    <td>
      <div className={`relative w-[125px] h-[8px]  bg-[#EFF4FB] rounded-full`}>
        <div
          className="absolute left-0 top-0 h-full bg-[#4318FF] rounded-full"
          style={{ width: `${progress}` }}
        ></div>
      </div>
    </td>
  </tr>
);

const Task = ({ nameTask }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex justify-between items-center pr-1 pl-3">
      <div className="flex gap-3 items-center">
        <input type="checkbox" checked={checked} onChange={handleCheck} />
        <p
          className={`text-[16px] font-bold ${
            checked ? "text-[#2B3674]" : "text-[#A3AED0]"
          }`}
        >
          {nameTask}
        </p>
      </div>
      <img src={Indicator} alt="indicator" className="cursor-pointer" />
    </div>
  );
};

const Info = ({ image, name, job }) => (
  <div className="flex justify-between items-center w-full h-[70px] p-4 shadow-md mt-4 rounded-2xl">
    <div className="flex gap-4 items-center">
      <img src={image} alt="" />
      <p className="grid">
        <span className="text-[16px] font-bold text-[#2B3674]">{name}</span>
        <span className="text-[12px] font-medium text-[#A3AED0]">{job}</span>
      </p>
    </div>
    <img src={Vert} alt="" className="cursor-pointer" />
  </div>
);

const Dashboard = () => {
  return (
    <div className="flex bg-[#F4F7FE]">
      <div className="grid min-[800px]:grid-cols-[290px_1580px] bg-[#F4F7FE] gap-5">
        <Nav />
        <div>
          {/* header */}
          <Header name="Dashboard" name2="Main Dashboard" />
          <div
            className="grid grid-cols-2 min-[800px]:grid-cols-[repeat(4,24.6%)] 
            min-[800px]:grid-rows-[97px_repeat(4,23%)] py-4 gap-2"
          >
            {/* h1c1 */}
            <div className="grid grid-cols-3 gap-2 col-span-2">
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
              <div className="bg-white rounded-[20px] flex items-center">
                <p className="flex flex-col px-4">
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
            <div className="grid grid-cols-3 gap-2 col-span-2">
              {/* 1 */}
              <div className="bg-white rounded-[20px] flex items-center justify-between">
                <div className="px-4 py-2">
                  <p className="flex flex-col">
                    <span className="text-[14px] text-[#A3AED0]">
                      Your balance
                    </span>
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
                  <span className="text-[24px] text-[#2B3674] font-bold">
                    154
                  </span>
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
                  <span className="text-[14px] text-[#A3AED0]">
                    Total Projects
                  </span>
                  <span className="text-[24px] text-[#2B3674] font-bold">
                    2935
                  </span>
                </p>
              </div>
            </div>
            {/* h2c1 */}
            <div
              className="bg-white rounded-[20px] grid min-[800px]:grid-cols-[20%_80%] 
              p-6 col-span-2"
            >
              <div className="flex min-[800px]:flex-col items-center justify-between min-[800px]:justify-start min-[800px]:items-start">
                <div className="flex bg-[#F4F7FE] w-[123px] h-[37px] p-2 rounded-[7px] gap-2 justify-center">
                  <img src={CalendarImage} alt="" />
                  <p className="text-[14px] text-[#A3AED0]">This month</p>
                </div>
                <div className="py-6 flex gap-6 min-[800px]:flex-col min-[800px]:gap-1">
                  <p className="text-[34px] text-[#2B3674] font-bold">$37.5K</p>
                  <p className="flex items-center">
                    <span className="text-[14px] text-[#A3AED0]">
                      Total Spent
                    </span>
                    <span className="flex text-[14px] font-bold text-[#05CD99]">
                      <img src={Up} alt="" />
                      +2.45%
                    </span>
                  </p>
                </div>
                <div className="flex gap-1">
                  <img src={Tick2} alt="" />
                  <p className="text-[#05CD99] text-[16px] font-bold">
                    On track
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-end">
                  <div className="size-[33px] bg-[#F4F7FE] flex justify-center items-center rounded-[10px] cursor-pointer">
                    <img src={Stat} alt="" className="size-[24px]" />
                  </div>
                </div>
                <AreaChart />
              </div>
            </div>
            {/* h2c2 */}
            <div className="bg-white rounded-[20px] grid p-6 col-span-2">
              <div className="flex justify-between">
                <p className="text-[24px] font-bold text-[#1B2559]">
                  Weekly Revenue
                </p>
                <div className="size-[33px] bg-[#F4F7FE] flex justify-center items-center rounded-[10px] cursor-pointer">
                  <img src={Stat} alt="" className="size-[24px]" />
                </div>
              </div>
              <ColumnChart />
            </div>
            {/* h3c1 */}
            <div
              className="bg-white rounded-[20px] grid 
              grid-rows-[15%_85%] p-6 col-span-2"
            >
              <div className="flex justify-between items-center">
                <p className="text-[24px] font-bold text-[#2B3674]">
                  Check Table
                </p>
                <div className="size-[33px] bg-[#F4F7FE] flex justify-center items-center rounded-[10px] cursor-pointer">
                  <img src={Ellipsis} alt="" className="size-[24px]" />
                </div>
              </div>
              <table>
                <thead className="text-[14px]">
                  <tr className="uppercase text-[#A3AED0] text-left">
                    <th scope="col" className="font-medium py-6">
                      name
                    </th>
                    <th scope="col" className="font-medium">
                      progress
                    </th>
                    <th scope="col" className="font-medium">
                      quantity
                    </th>
                    <th scope="col" className="font-medium">
                      date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <RowCheck
                    name="Horizon UI PRO"
                    percent="17.5%"
                    number="2.458"
                    date="24.Jan.2021"
                  />
                  <RowCheck
                    name="Horizon UI Free"
                    percent="10.8%"
                    number="1.485"
                    date="12.Jun.2021"
                  />
                  <RowCheck
                    name="Weekly Update"
                    percent="21.3%"
                    number="1.024"
                    date="5.Jan.2021"
                  />
                  <RowCheck
                    name="Venus 3D Asset"
                    percent="31.5%"
                    number="858"
                    date="7.Mar.2021"
                  />
                  <RowCheck
                    name="Marketplace"
                    percent="12.2%"
                    number="258"
                    date="17.Dec.2021"
                  />
                </tbody>
              </table>
            </div>
            {/* h3c2 */}
            <div className="bg-white rounded-[20px] p-6">
              <p className="flex justify-between items-center">
                <span className="text-[14px] text-[#A3AED0]">
                  Daily Traffic
                </span>
                <span className="flex text-[14px] font-bold text-[#05CD99]">
                  <img src={Up} alt="" />
                  +2.45%
                </span>
              </p>
              <p>
                <span className="text-[34px] font-bold text-[#2B3674]">
                  2.579{" "}
                </span>
                <span className="text-[14px] text-[#A3AED0]">Visitors</span>
              </p>
              <ColumnChart2 />
            </div>
            {/* h3c3 */}
            <div className="bg-white rounded-[20px] p-6">
              <div className="flex item-center justify-between">
                <p className="text-[#2B3674] text-[16px] font-bold">
                  Your Pie Chart
                </p>
                <div className="text-[#A3AED0] text-[12px] font-bold flex items-center">
                  <div>Monthly</div>
                  <img src={Down2} alt="" className="cursor-pointer" />
                </div>
              </div>
              <PieChart />
            </div>
            {/* h4c1 */}
            <div
              className="bg-white rounded-[20px] grid 
          grid-rows-[25%_75%] col-span-2 pb-6"
            >
              {/* title */}
              <div className="flex justify-between items-center p-6">
                <p className="text-[24px] font-bold text-[#2B3674]">
                  Complex Table
                </p>
                <div className="size-[33px] bg-[#F4F7FE] flex justify-center items-center rounded-[10px] cursor-pointer">
                  <img src={Ellipsis} alt="" className="size-[24px]" />
                </div>
              </div>
              {/* table */}
              <table>
                <thead className="text-[14px] border-b-[1px]">
                  <tr className="uppercase text-[#A3AED0] text-left">
                    <th scope="col" className="font-medium pb-2 pl-6">
                      name
                    </th>
                    <th scope="col" className="font-medium pb-2">
                      status
                    </th>
                    <th scope="col" className="font-medium pb-2">
                      date
                    </th>
                    <th scope="col" className="font-medium pb-2">
                      progress
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <RowComplex
                    name="Horizon UI PRO"
                    image={Check}
                    status="Approved"
                    date="18 Apr 2021"
                    progress="70%"
                  />
                  <RowComplex
                    name="Horizon UI Free"
                    image={Cancel}
                    status="Disable"
                    date="18 Apr 2021"
                    progress="35%"
                  />
                  <RowComplex
                    name="Weekly Update"
                    image={Error}
                    status="Approved"
                    date="20 May 2021"
                    progress="85%"
                  />
                  <RowComplex
                    name="Venus 3D Asset"
                    image={Check}
                    status="Approved"
                    date="12 Jul 2021"
                    progress="50%"
                  />
                </tbody>
              </table>
            </div>
            {/* h4c2 */}
            <div className="bg-white rounded-[20px] p-6">
              <div className="flex justify-between items-center ">
                <div className="flex gap-2 items-center">
                  <div className="size-[38px] bg-[#EFF4FB] flex justify-center items-center rounded-full">
                    <img src={CheckBox} alt="" />
                  </div>
                  <p className="text-[18px] font-bold text-[#2B3674]">Tasks</p>
                </div>
                <div className="size-[33px] bg-[#F4F7FE] flex justify-center items-center rounded-[10px] cursor-pointer">
                  <img src={Ellipsis} alt="" className="size-[24px]" />
                </div>
              </div>
              <div className="grid pt-6 gap-6">
                <Task nameTask="Landing Page Design" />
                <Task nameTask="Dashboard Builder" />
                <Task nameTask="Mobile App Design" />
                <Task nameTask="Illustrations" />
                <Task nameTask="Promotional LP" />
              </div>
            </div>
            {/* h4c3 */}
            <div className="bg-white rounded-[20px]"></div>
            {/* h5c1 */}
            <div className="bg-white rounded-[20px] p-6">
              <div className="flex gap-4">
                <img src={Fire} alt="" />
                <p className="grid">
                  <span className="text-[#A3AED0] text-[12px] font-bold">
                    Business Design
                  </span>
                  <span className="text-[#2B3674] text-[16px] font-bold">
                    New lession is available
                  </span>
                </p>
              </div>
              <p className="text-[#2B3674] text-[20px] font-bold py-10">
                What do you need to know to create better products?
              </p>
              <div className="flex gap-8 items-center text-[#2B3674] text-[14px] font-bold">
                <div className="flex gap-1">
                  <img src={Timer} alt="" />
                  <p>85 mins</p>
                </div>
                <div className="flex gap-1">
                  <img src={Video} alt="" />
                  <p>Video format</p>
                </div>
              </div>
              <div className="flex justify-between pt-10">
                <img src={Avatars} alt="" />
                <button className="w-[128px] h-[40px] bg-[#4318FF] text-white rounded-2xl">
                  Get Started
                </button>
              </div>
            </div>
            {/* h5c2 */}
            <div className="bg-white rounded-[20px] p-6">
              <div className="flex justify-between items-center">
                <p className="text-[18px] font-bold text-[#2B3674]">
                  Team members
                </p>
                <button className="flex size-[37px] bg-[#F4F7FE] items-center justify-center rounded-[10px]">
                  <img src={Add} alt="" />
                </button>
              </div>
              <Info
                image={Avatar1}
                name="Adela Parkson"
                job="Creative Director"
              />
              <Info
                image={Avatar2}
                name="Christian Mad"
                job="Product Designer"
              />
              <Info
                image={Avatar3}
                name="Jason Statham"
                job="Junior Graphic Designer"
              />
            </div>
            {/* h5c3 */}
            <div className="bg-white rounded-[20px] p-6">
              <div>
                <img src={FingerPrint} alt="" />
                <p className="grid gap-4 pt-4">
                  <span className="text-[24px] font-bold text-[#2B3674]">
                    Control card security in-app with a tap
                  </span>
                  <span className="text-[14px] font-medium text-[#A3AED0]">
                    Discover our cards benefits, with one tap.
                  </span>
                </p>
                <button className="w-full h-[46px] bg-[#4318FF] text-white rounded-2xl mt-8">
                  Cards
                </button>
              </div>
            </div>
            {/* h5c4 */}
            <div className="bg-white rounded-[20px] px-5 py-6 flex flex-col ">
              <div
                className="relative bg-[url('./images/dashboard/bg.svg')] w-full h-[185px] 
                p-4 flex justify-end bg-cover rounded-[20px]"
              >
                <button className="backdrop-blur-xl size-[43px] flex justify-center items-center rounded-2xl">
                  <img src={Watch} alt="" />
                </button>
                <div className="absolute bottom-[-25px] left-[4%]">
                  <img src={Starbuck} alt="" />
                </div>
              </div>
              <div className="pt-12">
                <p className="text-[24px] font-bold text-[#2B3674]">
                  Starbucks
                </p>
                <div className="flex gap-2 items-center">
                  <img src={Fastfood} alt="" />
                  <p className="text-[18px] font-medium text-[#A3AED0]">
                    10% cashback & off
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
