import React from "react";
import Home from "../images/nav/home.svg";
import Market from "../images/nav/market.svg";
import Tables from "../images/nav/tables.svg";
import Kanban from "../images/nav/kanban.svg";
import Profile from "../images/nav/profile.svg";
import Block from "../images/nav/block.svg";
import Vector from "../images/nav/Vector.svg";

const Button = ({ image, name }) => (
  <button className="flex gap-3 h-[36px] items-center border-r-4 border-[#4318FF]">
    <img src={image} alt="" />
    <p className="text-[16px] text-[#A3AED0]">{name}</p>
  </button>
);

const Nav = () => {
  return (
    <div className="sticky bg-white h-[1152px] w-[290px] flex flex-col justify-between items-center rounded-br-3xl">
      <div>
        <p className="w-[290px] uppercase text-[26px] text-[#2B3674] py-8 border-b-[1px] border-[#F4F7FE] text-center">
          <span className="font-bold">horizon </span>
          <span>free</span>
        </p>
        <div className="flex flex-col gap-4 pl-8 pt-8">
          <Button image={Home} name="Dashboard" />
          <Button image={Market} name="NFT Marketplace" />
          <Button image={Tables} name="Tables" />
          <Button image={Kanban} name="Kanban" />
          <Button image={Profile} name="Profile" />
          <Button image={Block} name="Sign In" />
        </div>
      </div>
      <div className="pb-4">
        <div
          className="relative bg-gradient-to-br from-[#868CFF] to-[#4318FF] 
        w-[228px] h-[190px] rounded-3xl flex text-center items-center"
        >
          <div
            className="absolute top-[-50px] left-[67px] bg-gradient-to-br from-[#868CFF] 
          to-[#4318FF] rounded-full size-[94px] flex justify-center items-center"
          >
            <img src={Vector} alt="" />
          </div>
          <p className="text-white w-full leading-6 tracking-[-0.02em]">
            <span className="text-[16px] font-bold">Upgrade to PRO</span>
            <p className="text-[14px]">
              <span>to get access to all features!</span>
              <br />
              <span>Connect with Venus World!</span>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
