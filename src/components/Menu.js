import React from "react";
import { Link, useLocation } from "react-router-dom";
import Home from "../images/nav/home.svg";
import Market from "../images/nav/market.svg";
import Tables from "../images/nav/tables.svg";
import Kanban from "../images/nav/kanban.svg";
import Profile from "../images/nav/profile.svg";
import Block from "../images/nav/block.svg";
import Vector from "../images/nav/Vector.svg";

const Button = ({ image, name, isActive, path }) => {
  return (
    <Link to={path} className="flex items-center gap-3">
      <img src={image} alt="" />
      <p className="text-[16px] text-[#A3AED0]">{name}</p>
      {isActive(path) && (
        <div className="w-1 h-9 bg-[#4318FF] rounded-full"></div>
      )}
    </Link>
  );
};

const Menu = ({ menuOpen }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const buttons = [
    { image: Home, name: "Dashboard", path: "/" },
    { image: Market, name: "NFT Marketplace", path: "/market" },
    { image: Tables, name: "Tables", path: "/tables" },
    { image: Kanban, name: "Kanban", path: "/kanban" },
    { image: Profile, name: "Profile", path: "/profile" },
    { image: Block, name: "Sign In", path: "/signin" },
  ];

  return (
    <div
      className={`fixed inset-0 bg-white z-20 transition-all duration-300 ${
        menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="h-full w-[290px] flex flex-col justify-between items-center rounded-br-3xl overflow-y-auto">
        <div>
          <p className="w-[290px] uppercase text-[26px] text-[#2B3674] py-8 border-b-[1px] border-[#F4F7FE] text-center">
            <span className="font-bold">horizon </span>
            <span>free</span>
          </p>
          <div className="flex flex-col gap-4 pl-8 pt-8">
            {buttons.map((button, index) => (
              <Button
                key={index}
                image={button.image}
                name={button.name}
                isActive={isActive}
                path={button.path}
              />
            ))}
          </div>
        </div>
        <div className="pb-4">
          <div className="relative bg-gradient-to-br from-[#868CFF] to-[#4318FF] w-[228px] h-[190px] rounded-3xl flex text-center items-center">
            <div className="absolute top-[-50px] left-[67px] bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-full size-[94px] flex justify-center items-center">
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
    </div>
  );
};

export default Menu;
