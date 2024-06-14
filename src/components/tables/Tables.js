import React from "react";
import Header from "../Header";
import Ellipsis from "../../images/dashboard/ellipsis.svg";
import Down from "../../images/dashboard/down.svg";
import Apple from "../../images/tables/apple.svg";
import Windows from "../../images/tables/windows.svg";
import Android from "../../images/tables/android.svg";

const Table = ({ name, children }) => (
  <div>
    <div className="flex justify-between items-center">
      <p className="text-[24px] font-bold text-[#2B3674]">{name}</p>
      <div className="size-[33px] bg-[#F4F7FE] flex justify-center items-center rounded-[10px] cursor-pointer">
        <img src={Ellipsis} alt="" className="size-[24px]" />
      </div>
    </div>
    <table className="w-full">
      <thead>
        <tr>
          <th scope="col" className="pt-8">
            <div className="flex text-[14px] font-medium text-[#A3AED0]">
              Title
              <img src={Down} alt="" className="" />
            </div>
          </th>
          <th scope="col" className="pt-8">
            <div className="flex text-[14px] font-medium text-[#A3AED0]">
              Title
              <img src={Down} alt="" className="" />
            </div>
          </th>
          <th scope="col" className="pt-8">
            <div className="flex text-[14px] font-medium text-[#A3AED0]">
              Title
              <img src={Down} alt="" className="" />
            </div>
          </th>
          <th scope="col" className="pt-8">
            <div className="flex text-[14px] font-medium text-[#A3AED0]">
              Title
              <img src={Down} alt="" className="" />
            </div>
          </th>
        </tr>
      </thead>
      {children}
    </table>
  </div>
);

const BodyMarket = ({ name, os1, os2, os3, date, percent }) => (
  <tbody>
    <tr>
      <th scope="row" className="py-2">
        <p className="text-[14px] font-bold text-[#2B3674] text-left">{name}</p>
      </th>
      <td>
        <div className="flex gap-4 items-center">
          <img src={os1} alt="" />
          <img src={os2} alt="" />
          <img src={os3} alt="" />
        </div>
      </td>
      <td>
        <p className="text-[14px] font-bold text-[#2B3674]">{date}</p>
      </td>
      <td>
        <div className="grid grid-cols-[40px_60px] w-[100px] items-center gap-3">
          <p className="text-[14px] font-bold text-[#2B3674]">{percent}% </p>
          <div
            className={`relative w-[70px] h-[8px]  bg-[#EFF4FB] rounded-full`}
          >
            <div
              className="absolute left-0 top-0 h-full bg-[#4318FF] rounded-full"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
);

const Tables = () => {
  return (
    <div>
      <Header name="Tables" name2="Tables" />
      <div className="grid grid-cols-2 grid-rows-[580px_345px] gap-2 pt-4">
        <div className="bg-white rounded-[20px] p-5">
          <Table name="Marketplace">
            <BodyMarket
              name="Marketplace"
              os1={Apple}
              os2={Android}
              os3={Windows}
              date="12.Jan.2021"
              percent="75.5"
            />
            <BodyMarket
              name="Venus DB PRO"
              os1={Apple}
              date="21.Feb.2021"
              percent="35.4"
            />
            <BodyMarket
              name="Venus DS"
              os1={Apple}
              os2={Android}
              os3={Windows}
              date="13.Mar.2021"
              percent="25"
            />
            <BodyMarket
              name="Venus 3D Asset"
              os1={Apple}
              os2={Windows}
              date="24.Jan.2021"
              percent="100"
            />
            <BodyMarket
              name="Uranus"
              os1={Android}
              os2={Windows}
              date="21.Sep.2021"
              percent="12.2"
            />
            <BodyMarket
              name="Uranus"
              os1={Android}
              os2={Windows}
              date="21.Sep.2021"
              percent="12.2"
            />
            <BodyMarket
              name="Uranus"
              os1={Android}
              os2={Windows}
              date="21.Sep.2021"
              percent="12.2"
            />
            <BodyMarket
              name="Uranus"
              os1={Android}
              os2={Windows}
              date="21.Sep.2021"
              percent="12.2"
            />
            <BodyMarket
              name="Uranus"
              os1={Android}
              os2={Windows}
              date="21.Sep.2021"
              percent="12.2"
            />
            <BodyMarket
              name="Uranus"
              os1={Android}
              os2={Windows}
              date="21.Sep.2021"
              percent="12.2"
            />
            <BodyMarket
              name="Uranus"
              os1={Android}
              os2={Windows}
              date="21.Sep.2021"
              percent="12.2"
            />
          </Table>
        </div>
        <div className="bg-white rounded-[20px]"></div>
        <div className="bg-white rounded-[20px]"></div>
        <div className="bg-white rounded-[20px]"></div>
      </div>
    </div>
  );
};

export default Tables;
