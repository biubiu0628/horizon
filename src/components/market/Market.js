import React from "react";
import Search from "../../images/header/search.svg";
import Info from "../../images/header/info.svg";
import Moon from "../../images/header/moon.svg";
import Notification from "../../images/header/notification.svg";
import Avatar from "../../images/header/avatar.svg";
import ETH from "../../images/market/eth.svg";
import Favorite from "../../images/market/favorite.svg";
import Bg1 from "../../images/market/bg1.svg";
import Bg2 from "../../images/market/bg2.svg";
import Bg3 from "../../images/market/bg3.svg";
import Bg4 from "../../images/market/bg4.svg";
import Bg5 from "../../images/market/bg5.svg";
import Bg6 from "../../images/market/bg6.svg";
import Creator1 from "../../images/market/creator1.svg";
import Creator2 from "../../images/market/creator2.svg";
import Creator3 from "../../images/market/creator3.svg";
import Creator4 from "../../images/market/creator4.svg";
import Creator5 from "../../images/market/creator5.svg";
import Creator6 from "../../images/market/creator6.svg";
import Creator7 from "../../images/market/creator7.svg";
import Creator8 from "../../images/market/creator8.svg";
import His1 from "../../images/market/his1.svg";
import His2 from "../../images/market/his2.svg";
import His3 from "../../images/market/his3.svg";
import His4 from "../../images/market/his4.svg";
import His5 from "../../images/market/his5.svg";
import His6 from "../../images/market/his6.svg";
import Nav from "../Nav";
import Footer from "../Footer";

const Button = ({ name }) => (
  <div>
    <button
      className="px-5 py-1 rounded-full text-[14px] 
    font-medium text-[#4318FF] bg-white"
    >
      {name}
    </button>
  </div>
);

const Card = ({ image, nameImage, nameAuthor, price }) => (
  <div className="bg-white rounded-[20px] p-6">
    <div
      className="rounded-[20px] h-[205px] flex justify-end p-4 bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <button className="size-[34px] rounded-full bg-white flex justify-center items-center">
        <img src={Favorite} alt="" />
      </button>
    </div>
    <div className="flex justify-between items-center py-6">
      <p className="grid">
        <span className="text-[18px] font-bold text-[#1B2559]">
          {nameImage}
        </span>
        <span className="text-[14px] text-[#A3AED0]">{nameAuthor}</span>
      </p>
    </div>
    <div className="flex justify-between items-center">
      <p className="text-[14px] font-bold text-[#4318FF]">
        Current Bid: {price} ETH
      </p>
      <button className="bg-[#11047A] text-white py-1 px-5 rounded-full">
        Place Bid
      </button>
    </div>
  </div>
);

const Row = ({ ava, username, number, rating }) => (
  <tr>
    <th scope="row">
      <div className="flex gap-2 items-center pl-5 mt-[18px]">
        <img src={ava} alt="" />
        <p className="text-[14px] font-bold text-[#2B3674]">@{username}</p>
      </div>
    </th>
    <td>{number}</td>
    <td>
      <div className={`relative w-[70px] h-[8px]  bg-[#EFF4FB] rounded-full`}>
        <div
          className="absolute left-0 top-0 h-full bg-[#4318FF] rounded-full"
          style={{ width: `${rating}` }}
        ></div>
      </div>
    </td>
  </tr>
);

const History = ({ image, name, user, price, time }) => (
  <button
    className="grid grid-cols-[70px_150px_80px_60px] gap-6 h-[100px] 
    px-6 items-center rounded-[20px] focus:shadow-2xl"
  >
    <img src={image} alt="" />
    <p className="grid">
      <span className="text-[16px] font-bold text-[#1B2559]">{name}</span>
      <span className="text-[14px] text-[#A3AED0]">By {user}</span>
    </p>
    <div className="flex gap-1 items-center text-[16px] font-bold text-[#2B3674]">
      <img src={ETH} alt="" />
      <p>{price} ETH</p>
    </div>
    <p className="text-[16px] text-[#A3AED0]">{time} ago</p>
  </button>
);

const Market = () => {
  return (
    <div className="flex bg-[#F4F7FE]">
      <div className="grid min-[800px]:grid-cols-[290px_1580px] bg-[#F4F7FE] gap-5">
        <Nav />
        <div>
          {/* header */}
          <div className="flex w-full justify-between items-end pt-8 px-4 min-[800px]:px-0">
            {/* title */}
            <div className="col-span-2">
              <p className="flex flex-col">
                <span className="text-[14px] text-[#707EAE]">
                  Pages / NFT Marketplace
                </span>
                <span className="text-[30px] font-bold text-[#2B3674]">
                  NFT Marketplace
                </span>
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
                <div
                  className="bg-[#F4F7FE] w-[120px] h-[35px] 
                  rounded-full flex items-center pl-1"
                >
                  <div className="bg-white size-[29px] rounded-full flex justify-center items-center">
                    <img src={ETH} alt="" />
                  </div>
                  <p className="text-[14px] font-bold text-[#2B3674] px-2">
                    1,924 ETH
                  </p>
                </div>
                <img src={Notification} alt="" />
                <img src={Moon} alt="" />
                <img src={Info} alt="" />
                <img src={Avatar} alt="" className="size-[35px]" />
              </div>
            </div>
          </div>
          {/* market */}
          <div className="grid min-[800px]:grid-cols-3 py-4 gap-4 px-4">
            <div className="grid col-span-2">
              {/* discover */}
              <div className="bg-[url('./images/market/bgmarket.svg')] h-[350px] rounded-[20px] p-12">
                <div className="flex flex-col justify-between h-full">
                  <p className="grid w-[377px] gap-3">
                    <span className="text-[34px] font-bold text-white">
                      Discover, collect, and sell extraordinary NFTs
                    </span>
                    <span className="text-[16px] font-medium text-[#E3DAFF]">
                      Enter in this creative world. Discover now the latest NFTs
                      or start creating your own!
                    </span>
                  </p>
                  <div className="flex items-center gap-8">
                    <button className="w-[140px] h-[46px] bg-white rounded-2xl text-[14px] font-medium">
                      Discover now
                    </button>
                    <div className="text-[#E9E3FF] text-[16px] font-medium cursor-pointer">
                      Watch video
                    </div>
                  </div>
                </div>
              </div>
              {/* trending */}
              <div>
                <div className="flex items-center justify-between p-6">
                  <p className="text-[24px] font-bold text-[#2B3674]">
                    Trending NFTs
                  </p>
                  <div className="flex gap-4">
                    <Button name="Art" />
                    <Button name="Music" />
                    <Button name="Collectibles" />
                    <Button name="Sports" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Card
                    image={Bg1}
                    nameImage="Abstract Colors"
                    nameAuthor="By Esthera Jackson"
                    price="0.91"
                  />
                  <Card
                    image={Bg2}
                    nameImage="ETH AI Brain"
                    nameAuthor="By Nick Wilson"
                    price="2.82"
                  />
                  <Card
                    image={Bg3}
                    nameImage="Mesh Gradients"
                    nameAuthor="By Will min-[800px]ith"
                    price="0.56"
                  />
                </div>
              </div>
              {/* recently */}
              <div>
                <p className="text-[24px] font-bold text-[#2B3674] p-6">
                  Recently Added
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <Card
                    image={Bg4}
                    nameImage="Swipe Circles"
                    nameAuthor="By Peter Will"
                    price="2.30"
                  />
                  <Card
                    image={Bg5}
                    nameImage="Colorful Heaven"
                    nameAuthor="By Mark Benjamin"
                    price="1.30"
                  />
                  <Card
                    image={Bg6}
                    nameImage="3D Cubes Art"
                    nameAuthor="By Manny Gates"
                    price="6.58"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-4 col-span-2 min-[800px]:col-span-1">
              {/* top creators */}
              <div className="h-[542px] rounded-[20px] bg-white">
                <div className="flex justify-between items-center p-5">
                  <p className="text-[20px] font-bold text-[#1B2559]">
                    Top Creators
                  </p>
                  <button className="px-4 py-1 bg-[#F4F7FE] rounded-full text-[#4318FF] text-[14px] font-medium">
                    See all
                  </button>
                </div>
                <table className="w-full h-[400px] mt-4">
                  <thead className="text-left shadow-2xl">
                    <tr className="text-[14px] font-medium text-[#A3AED0]">
                      <th scope="col" className="pl-5 pb-2">
                        Name
                      </th>
                      <th scope="col" className="w-[150px]">
                        Artworks
                      </th>
                      <th scope="col">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Row
                      ava={Creator1}
                      username="maddison_c21"
                      number="9821"
                      rating="90%"
                    />
                    <Row
                      ava={Creator2}
                      username="karl.will02"
                      number="7032"
                      rating="85%"
                    />
                    <Row
                      ava={Creator3}
                      username="andreea.1z"
                      number="5204"
                      rating="80%"
                    />
                    <Row
                      ava={Creator4}
                      username="abraham47.y"
                      number="4309"
                      rating="75%"
                    />
                    <Row
                      ava={Creator5}
                      username="simmmple.web"
                      number="3871"
                      rating="65%"
                    />
                    <Row
                      ava={Creator6}
                      username="venus.sys"
                      number="3152"
                      rating="55%"
                    />
                    <Row
                      ava={Creator7}
                      username="ape.vpp8"
                      number="2907"
                      rating="45%"
                    />
                    <Row
                      ava={Creator8}
                      username="leon_pwrr"
                      number="2309"
                      rating="35%"
                    />
                  </tbody>
                </table>
              </div>
              {/* history */}
              <div className="h-[726px] bg-white rounded-[20px]">
                <div className="flex justify-between items-center p-5">
                  <p className="text-[20px] font-bold text-[#1B2559]">
                    History
                  </p>
                  <button className="px-4 py-1 bg-[#F4F7FE] rounded-full text-[#4318FF] text-[14px] font-medium">
                    See all
                  </button>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <History
                    image={His1}
                    name="Colorful Heaven"
                    user="Mark Benjamin"
                    price="1.30"
                    time="30s"
                  />
                  <History
                    image={His2}
                    name="Abstract Colors"
                    user="Esthera Jackson"
                    price="0.91"
                    time="58s"
                  />
                  <History
                    image={His3}
                    name="ETH AI Brain"
                    user="Nick Wilson"
                    price="2.82"
                    time="1m"
                  />
                  <History
                    image={His4}
                    name="Swipe Circles"
                    user="Peter Will"
                    price="2.30"
                    time="1m"
                  />
                  <History
                    image={His5}
                    name="Mesh Gradients"
                    user="Will min-[800px]ith"
                    price="0.56"
                    time="2m"
                  />
                  <History
                    image={His6}
                    name="3D Cubes Art"
                    user="Manny Gates"
                    price="6.58"
                    time="3m"
                  />
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

export default Market;
