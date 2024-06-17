import React from "react";
import Header from "../Header";
import Ellipsis from "../../images/dashboard/ellipsis.svg";
import Down from "../../images/dashboard/down.svg";
import Apple from "../../images/tables/apple.svg";
import Windows from "../../images/tables/windows.svg";
import Android from "../../images/tables/android.svg";
import Check from "../../images/tables/check.svg";
import Cancel from "../../images/tables/cancel.svg";
import Error from "../../images/tables/error.svg";
import Nav from "../Nav";
import Footer from "../Footer";

const Table = ({ name, children }) => (
  <div>
    <div className="flex justify-between items-center px-5 pt-5">
      <p className="text-[24px] font-bold text-[#2B3674]">{name}</p>
      <div className="size-[33px] bg-[#F4F7FE] flex justify-center items-center rounded-[10px] cursor-pointer">
        <img src={Ellipsis} alt="" className="size-[24px]" />
      </div>
    </div>
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th scope="col" className="pt-8 pl-5 pb-1">
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

const BodyDevTable = ({ name, os1, os2, os3, date, percent }) => (
  <tbody>
    <tr>
      <th scope="row" className="py-[10px] pl-5">
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

const BodyCheckTable = ({ name, percent, number, date }) => (
  <tbody>
    <tr>
      <th scope="row" className="py-[10px] pl-5">
        <div className="flex gap-2">
          <input type="checkbox" />
          <p className="text-[14px] font-bold text-[#2B3674] text-left">
            {name}
          </p>
        </div>
      </th>
      <td>
        <p className="text-[14px] font-bold text-[#2B3674]">{percent}%</p>
      </td>
      <td>
        <p className="text-[14px] font-bold text-[#2B3674]">{number}</p>
      </td>
      <td>
        <p className="text-[14px] font-bold text-[#2B3674]">{date}</p>
      </td>
    </tr>
  </tbody>
);

const BodyColumnTable = ({ name, percent, number, date }) => (
  <tbody>
    <tr>
      <th scope="row" className="py-[10px] pl-5">
        <p className="text-[14px] font-bold text-[#2B3674] text-left">{name}</p>
      </th>
      <td>
        <p className="text-[14px] font-bold text-[#2B3674]">{percent}%</p>
      </td>
      <td>
        <p className="text-[14px] font-bold text-[#2B3674]">{number}</p>
      </td>
      <td>
        <p className="text-[14px] font-bold text-[#2B3674]">{date}</p>
      </td>
    </tr>
  </tbody>
);

const BodyComplexTable = ({ name, image, status, date, percent }) => (
  <tbody>
    <tr>
      <th scope="row" className="py-4 pl-5">
        <p className="text-[14px] font-bold text-[#2B3674] text-left">{name}</p>
      </th>
      <td>
        <div className="flex gap-1 items-center">
          <img src={image} alt="" />
          <p className="text-[14px] font-bold text-[#2B3674]">{status}</p>
        </div>
      </td>
      <td>
        <p className="text-[14px] font-bold text-[#2B3674]">{date}</p>
      </td>
      <td>
        <div
          className={`relative w-[108px] h-[8px]  bg-[#EFF4FB] rounded-full`}
        >
          <div
            className="absolute left-0 top-0 h-full bg-[#4318FF] rounded-full"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </td>
    </tr>
  </tbody>
);

const Tables = () => {
  const data = [
    {
      name: "Marketplace",
      percent: "17.5",
      number: "2.458",
      date: "24.Jan.2021",
    },
    {
      name: "Venus PRO",
      percent: "10.8",
      number: "1.485",
      date: "12.Jun.2021",
    },
    {
      name: "Uranus Kit",
      percent: "21.3",
      number: "1.024",
      date: "5.Jan.2021",
    },
    { name: "Venus DS", percent: "31.5", number: "858", date: "7.Mar.2021" },
    {
      name: "Venus 3D Asset",
      percent: "12.2",
      number: "258",
      date: "17.Dec.2021",
    },
  ];

  const complex = [
    {
      name: "Marketplace",
      image: Check,
      status: "Approved",
      date: "24.Jan.2021",
      percent: "80",
    },
    {
      name: "Venus Dashboard Builder",
      image: Cancel,
      status: "Disable",
      date: "30.Dec.2021",
      percent: "35",
    },
    {
      name: "Venus Design System",
      image: Error,
      status: "Error",
      date: "20.May.2021",
      percent: "90",
    },
    {
      name: "Uranus",
      image: Check,
      status: "Approved",
      date: "12.Jul.2021",
      percent: "50",
    },
  ];

  return (
    <div className="grid grid-cols-[290px_1580px] bg-[#F4F7FE] gap-5">
      <Nav />
      <div>
        <Header name="Tables" name2="Tables" />
        <div className="grid grid-cols-2 grid-rows-[580px_345px] gap-2 pt-4">
          <div className="bg-white rounded-[20px]">
            <Table name="Development Table">
              <BodyDevTable
                name="Marketplace"
                os1={Apple}
                os2={Android}
                os3={Windows}
                date="12.Jan.2021"
                percent="75.5"
              />
              <BodyDevTable
                name="Venus DB PRO"
                os1={Apple}
                date="21.Feb.2021"
                percent="35.4"
              />
              <BodyDevTable
                name="Venus DS"
                os1={Apple}
                os2={Android}
                os3={Windows}
                date="13.Mar.2021"
                percent="25"
              />
              <BodyDevTable
                name="Venus 3D Asset"
                os1={Apple}
                os2={Windows}
                date="24.Jan.2021"
                percent="100"
              />
              <BodyDevTable
                name="Uranus"
                os1={Android}
                os2={Windows}
                date="21.Sep.2021"
                percent="12.2"
              />
              <BodyDevTable
                name="Uranus"
                os1={Android}
                os2={Windows}
                date="21.Sep.2021"
                percent="12.2"
              />
              <BodyDevTable
                name="Uranus"
                os1={Android}
                os2={Windows}
                date="21.Sep.2021"
                percent="12.2"
              />
              <BodyDevTable
                name="Uranus"
                os1={Android}
                os2={Windows}
                date="21.Sep.2021"
                percent="12.2"
              />
              <BodyDevTable
                name="Uranus"
                os1={Android}
                os2={Windows}
                date="21.Sep.2021"
                percent="12.2"
              />
              <BodyDevTable
                name="Uranus"
                os1={Android}
                os2={Windows}
                date="21.Sep.2021"
                percent="12.2"
              />
              <BodyDevTable
                name="Uranus"
                os1={Android}
                os2={Windows}
                date="21.Sep.2021"
                percent="12.2"
              />
            </Table>
          </div>
          <div className="bg-white rounded-[20px]">
            <Table name="Check Table">
              {data.map((item, index) => (
                <BodyCheckTable
                  key={index}
                  name={item.name}
                  percent={item.percent}
                  number={item.number}
                  date={item.date}
                />
              ))}
              <BodyCheckTable
                name="Venus 3D Asset"
                percent="12.2"
                number="258"
                date="17.Dec.2021"
              />
              <BodyCheckTable
                name="Venus 3D Asset"
                percent="12.2"
                number="258"
                date="17.Dec.2021"
              />
              <BodyCheckTable
                name="Venus 3D Asset"
                percent="12.2"
                number="258"
                date="17.Dec.2021"
              />
              <BodyCheckTable
                name="Venus 3D Asset"
                percent="12.2"
                number="258"
                date="17.Dec.2021"
              />
              <BodyCheckTable
                name="Venus 3D Asset"
                percent="12.2"
                number="258"
                date="17.Dec.2021"
              />
              <BodyCheckTable
                name="Venus 3D Asset"
                percent="12.2"
                number="258"
                date="17.Dec.2021"
              />
            </Table>
          </div>
          <div className="bg-white rounded-[20px]">
            <Table name="4-Column Table">
              {data.map((item) => (
                <BodyColumnTable
                  name={item.name}
                  percent={item.percent}
                  number={item.number}
                  date={item.date}
                />
              ))}
            </Table>
          </div>
          <div className="bg-white rounded-[20px]">
            <Table name="Complex Table">
              {complex.map((item) => (
                <BodyComplexTable
                  name={item.name}
                  image={item.image}
                  status={item.status}
                  date={item.date}
                  percent={item.percent}
                />
              ))}
            </Table>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Tables;
