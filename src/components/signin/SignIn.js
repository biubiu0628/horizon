import React from "react";
import { Link } from "react-router-dom";
import Back from "../../images/signin/back.svg";
import Google from "../../images/signin/google.svg";
import Eye from "../../images/signin/eye.svg";
import Horizon from "../../images/signin/horizon.svg";

const SignIn = () => {
  return (
    <div className="grid grid-cols-[50%_50%]">
      <div className="flex flex-col justify-between items-center">
        <Link to="/" className="flex items-center py-8 w-[500px]">
          <img src={Back} alt="" />
          <p className="text-[14px] font-medium text-[#A3AED0]">
            Back to dashboard
          </p>
        </Link>
        <div className="w-[500px]">
          <p className="flex flex-col pb-6">
            <span className="text-[36px] font-bold text-[#2B3674]">
              Sign In
            </span>
            <span className="text-[16px] text-[#A3AED0]">
              Enter your email and password to sign in!
            </span>
          </p>
          <button className="bg-[#F4F7FE] w-full h-[50px] rounded-2xl flex items-center justify-center">
            <div className="flex gap-2">
              <img src={Google} alt="" />
              <p className="text-[14px] font-medium text-[#2B3674]">
                Sign in with Google
              </p>
            </div>
          </button>
          <p className="flex items-center justify-center gap-2 py-4">
            <hr className="w-[186px] h-[1px] bg-[#E0E5F2]" />
            <span>or</span>
            <hr className="w-[186px] h-[1px]" />
          </p>
          <div>
            {/* email */}
            <div className="pb-4">
              <p className="pb-2">
                <span>Email</span>
                <span>*</span>
              </p>
              <label>
                <input
                  type="email"
                  placeholder="mail@simmmple.com"
                  className="border-[1px] border-solid border-[#E0E5F2] 
                  focus:outline-none w-full h-[50px] pl-6 text-[14px] rounded-2xl"
                  required
                />
              </label>
            </div>
            {/* password */}
            <div>
              <p className="pb-2">
                <span>Password</span>
                <span>*</span>
              </p>
              <label
                className="flex items-center justify-between border-[1px] border-solid 
                border-[#E0E5F2] focus:outline-none w-full h-[50px] px-6 rounded-2xl"
              >
                <input
                  type="password"
                  placeholder="Min. 8 characters"
                  className=" focus:outline-none text-[14px]"
                  required
                />
                <img src={Eye} alt="" className="cursor-pointer" />
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center py-6">
            <div className="flex gap-2 items-center">
              <input type="checkbox" className="size-[18px]" />
              <p className="text-[14px] text-[#2B3674]">Keep me logged in</p>
            </div>
            <div className="cursor-pointer text-[14px] font-medium text-[#4318FF]">
              Forget password?
            </div>
          </div>
          <button
            className="w-full h-[54px] rounded-2xl flex items-center 
            justify-center text-[14px] font-bold text-white bg-[#4318FF]"
          >
            Sign In
          </button>
          <p className="text-[14px] pt-4">
            <span className="text-[#2B3674]">Not registered yet? </span>
            <span className="text-[#4318FF] font-bold cursor-pointer">
              Create an Account
            </span>
          </p>
        </div>
        <p className="py-8">
          © 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!
        </p>
      </div>
      <div className="bg-[url('images/signin/bg.svg')] h-screen rounded-bl-[200px] flex items-center justify-center">
        <div className="w-[471px] h-[550px] flex flex-col justify-between">
          <div className="flex items-center justify-center">
            <img src={Horizon} alt="" className="w-[280px] h-[375px]" />
          </div>
          <div
            className="w-[471px] h-[134px] rounded-[25px] flex items-center 
            justify-center border-2 border-solid border-white "
          >
            <p className="text-white flex flex-col text-center">
              <span className="text-[20px]">
                Learn more about Horizon UI on
              </span>
              <span className="text-[30px] font-bold">horizon-ui.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
