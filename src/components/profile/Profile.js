import React from "react";
import Header from "../Header";
import Avatar from "../../images/profile/avatar.svg";
import BgProfile from "../../images/profile/bgProfile.svg";
import Ellipsis from "../../images/dashboard/ellipsis.svg";
import Cloud from "../../images/profile/cloud.svg";
import Upload from "../../images/profile/upload.svg";
import Edit from "../../images/kanban/edit.svg";
import Project1 from "../../images/profile/project1.svg";
import Project2 from "../../images/profile/project2.svg";
import Project3 from "../../images/profile/project3.svg";
import Nav from "../Nav";
import Footer from "../Footer";

const Project = ({ image, name, id }) => (
  <div
    className="w-full h-[108px] shadow-md flex pl-4 pr-8 
    rounded-2xl my-4 items-center min-[800px]:justify-around justify-between"
  >
    <div className="flex items-center gap-4">
      <img src={image} alt="" />
      <p>
        <span className="text-[16px] font-medium text-[#2B3674]">{name}</span>
        <p>
          <span className="text-[14px] font-medium text-[#A3AED0]">
            Project #{id} • {""}
          </span>
          <span className="text-[14px] font-medium text-[#4318FF] underline">
            See project details
          </span>
        </p>
      </p>
    </div>
    <img src={Edit} alt="Edit" />
  </div>
);

const Info = ({ name, info }) => (
  <div className="shadow-md rounded-2xl pl-4 flex items-center">
    <p className="flex flex-col">
      <span className="text-[14px] font-medium text-[#A3AED0]">{name}</span>
      <span className="text-[16px] text-[#2B3674]">{info}</span>
    </p>
  </div>
);

const Noti = ({ noti }) => (
  <div className="flex items-center gap-4 my-[22px]">
    <div>
      <label class="relative mb-5 cursor-pointer">
        <input type="checkbox" value="" class="peer sr-only" />
        <div
          class="peer h-[18px] w-[36px] rounded-full bg-[#E0E5F2] after:absolute after:top-[2px] 
        after:left-[2px] after:size-[14px] after:rounded-full after:bg-white after:transition-all 
        after:content-[''] peer-checked:bg-[#4318FF] peer-checked:after:translate-x-[18px]"
        ></div>
      </label>
    </div>
    <p className="text-[14px] font-medium text-[#2B3674]">{noti}</p>
  </div>
);

const Profile = () => {
  return (
    <div className="flex">
      <div className="grid min-[800px]:grid-cols-[290px_1580px] gap-5 bg-[#F4F7FE]">
        <Nav />
        <div>
          <Header name="Profile" name2="Profile" />
          <div className="flex flex-col px-4">
            <div className="grid min-[800px]:grid-cols-[552px_381px_617px] min-[800px]:h-[365px] gap-4 my-4">
              {/* container1 */}
              <div className="bg-white rounded-[20px] p-5 flex flex-col items-center">
                <div className="relative">
                  <img src={BgProfile} alt="" />
                  <div
                    className="absolute bottom-[-42px] left-[212.5px] size-[87px] rounded-full 
                    overflow-hidden border-4 border-solid border-white"
                  >
                    <img src={Avatar} alt="Avatar" />
                  </div>
                </div>
                <p className="flex flex-col pt-14">
                  <span className="text-[20px] font-bold text-[#2B3674]">
                    Adela Parkson
                  </span>
                  <span className="text-[14px] font-medium text-[#A3AED0]">
                    Product Designer
                  </span>
                </p>
                <div className="flex gap-10 items-center pt-4">
                  <p className="flex flex-col items-center">
                    <span className="text-[20px] font-bold text-[#2B3674]">
                      17
                    </span>
                    <span className="text-[14px] font-medium text-[#A3AED0]">
                      Posts
                    </span>
                  </p>
                  <p className="flex flex-col items-center">
                    <span className="text-[20px] font-bold text-[#2B3674]">
                      9.7k
                    </span>
                    <span className="text-[14px] font-medium text-[#A3AED0]">
                      Followers
                    </span>
                  </p>
                  <p className="flex flex-col items-center">
                    <span className="text-[20px] font-bold text-[#2B3674]">
                      274
                    </span>
                    <span className="text-[14px] font-medium text-[#A3AED0]">
                      Followers
                    </span>
                  </p>
                </div>
              </div>
              {/* container2 */}
              <div className="bg-white rounded-[20px] p-5 flex flex-col items-center">
                <div
                  className="size-[33px] bg-[#F4F7FE] flex justify-center 
                  items-center rounded-[10px] cursor-pointer self-end"
                >
                  <img src={Ellipsis} alt="" className="size-[24px]" />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="size-[100px] bg-[#F4F7FE] rounded-full flex items-center justify-center">
                    <img src={Cloud} alt="" />
                  </div>
                  <p className="flex flex-col w-[201px] text-center gap-2">
                    <span className="text-[24px] font-bold text-[#2B3674]">
                      Your storage
                    </span>
                    <span className="text-[16px] text-[#A3AED0]">
                      Supervise your drive space in the easiest way
                    </span>
                  </p>
                </div>
                <div className="pt-8">
                  <div className="flex justify-between items-center">
                    <p className="text-[14px] font-medium text-[#A3AED0]">
                      25.6 Gb
                    </p>
                    <p className="text-[14px] font-medium text-[#A3AED0]">
                      50 Gb
                    </p>
                  </div>
                  <div
                    className={`relative w-[341px] h-[8px]  bg-[#EFF4FB] rounded-full`}
                  >
                    <div
                      className="absolute left-0 top-0 h-full bg-[#4318FF] rounded-full"
                      style={{ width: `${(25.6 / 50) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* container3 */}
              <div className="bg-white rounded-[20px] p-5 pr-0 flex items-center gap-8">
                <div
                  className="w-[268px] h-[311px] flex flex-col justify-center items-center gap-6 
                  rounded-[13px] bg-[#FAFCFE] border-[1px] border-dashed border-[#E0E5F2] cursor-pointer"
                >
                  <img src={Upload} alt="" />
                  <p className="flex flex-col items-center gap-2">
                    <span className="text-[20px] font-bold text-[#4318FF]">
                      Upload Files
                    </span>
                    <span className="text-[12px] font-medium text-[#8F9BBA]">
                      PNG, JPG and GIF files are allowed
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-16 w-[250px]">
                  <p className="flex flex-col gap-2">
                    <span className="text-[24px] font-bold text-[#2B3674]">
                      Complete your profile
                    </span>
                    <span className="text-[16px] text-[#A3AED0]">
                      Stay on the pulse of distributed projects with an anline
                      whiteboard to plan, coordinate and discuss
                    </span>
                  </p>
                  <button
                    className="w-[140px] h-[46px] flex items-center justify-center 
              bg-[#4318FF] rounded-2xl text-white"
                  >
                    Publish now
                  </button>
                </div>
              </div>
            </div>
            <div className="grid min-[800px]:grid-cols-[512px_617px_421px] min-[800px]:h-[554px] gap-4">
              {/* container4 */}
              <div className="bg-white rounded-[20px] p-6">
                <p className="flex flex-col">
                  <span className="text-[24px] font-bold text-[#2B3674]">
                    All Projects
                  </span>
                  <span className="text-[16px] text-[#A3AED0] pt-4 pb-4">
                    Here you can find more details about your projects. Keep you
                    user engaged by providing meaningful information.
                  </span>
                </p>
                <Project
                  image={Project1}
                  name="Technology behind the Blockchain"
                  id="1"
                />
                <Project
                  image={Project2}
                  name="Greatest way to a good Economy"
                  id="2"
                />
                <Project
                  image={Project3}
                  name="Most essential tips for Burnout"
                  id="3"
                />
              </div>
              {/* container5 */}
              <div className="bg-white rounded-[20px] p-6">
                <p className="flex flex-col">
                  <span className="text-[24px] font-bold text-[#2B3674]">
                    General Information
                  </span>
                  <span className="text-[16px] text-[#A3AED0] pt-4 pb-4">
                    As we live, our hearts turn colder. Cause pain is what we go
                    through as we become older. We get insulted by others, lose
                    trust for those others. We get back stabbed by friends. It
                    becomes harder for us to give others a hand. We get our
                    heart broken by people we love, even that we give them
                    all...
                  </span>
                </p>
                <div
                  className="grid grid-cols-2 grid-rows-[repeat(3,91px)] 
                  justify-between gap-6"
                >
                  <Info name="Education" info="Stanford University" />
                  <Info name="Languages" info="English, Spanish, Italian" />
                  <Info name="Department" info="Product Design" />
                  <Info name="Work History" info="Google, Facebook" />
                  <Info name="Organization" info="Simmmple Web LLC" />
                  <Info name="Birthday" info="20 July 1986" />
                </div>
              </div>
              {/* container6 */}
              <div className="bg-white rounded-[20px] p-6 pr-0">
                <div className="flex justify-between pb-4">
                  <p className="text-[24px] font-bold text-[#2B3674]">
                    Notifications
                  </p>
                  <div
                    className="size-[33px] bg-[#F4F7FE] flex justify-center 
                    items-center rounded-[10px] cursor-pointer self-end"
                  >
                    <img src={Ellipsis} alt="" className="size-[24px]" />
                  </div>
                </div>
                <Noti noti="Item update notifications" />
                <Noti noti="Item comment notifications" />
                <Noti noti="Buyer review notifications" />
                <Noti noti="Rating reminders notifications" />
                <Noti noti="Meetups near you notifications" />
                <Noti noti="Company news notifications" />
                <Noti noti="New launches and projects" />
                <Noti noti="Monthly product changes" />
                <Noti noti="Subscribe to newsletter" />
                <Noti noti="Email me when someone follows me" />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Profile;
