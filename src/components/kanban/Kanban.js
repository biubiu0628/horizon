import React from "react";
import Header from "../Header";
import Plus from "../../images/kanban/plus.svg";
import Edit from "../../images/kanban/edit.svg";
import Bg1 from "../../images/kanban/cover1.svg";
import Bg2 from "../../images/kanban/cover2.svg";
import Nav from "../Nav";
import Footer from "../Footer";

const Container = ({ name, children }) => (
  <div className="rounded-[20px] bg-white p-5">
    <div className="flex items-center justify-between pb-4">
      <p className="text-[22px] font-bold text-[#2B3674]">{name}</p>
      <button
        className="w-[91px] h-[35px] bg-[#F4F7FE] rounded-xl 
        flex justify-center items-center"
      >
        <img src={Plus} alt="" />
      </button>
    </div>
    <div className="flex flex-col gap-4 pt-4">{children}</div>
  </div>
);

const Card = ({ name, bg, text, image, color, status }) => (
  <div className="p-5 shadow-lg rounded-[15px]">
    <div className="flex items-center justify-between pb-2">
      <p className="text-[18px] font-bold text-[#2B3674]">{name}</p>
      <img src={Edit} alt="" />
    </div>
    <img src={bg} alt="" className="rounded-[15px]" />
    <p className="text-[16px] text-[#A3AED0] py-2">{text}</p>
    <div className="flex items-center pt-3">
      <img src={image} alt="" />
      <button
        className="w-[94px] h-[28px] rounded-[10px] 
        uppercase text-white font-bold text-[10px]"
        style={{ backgroundColor: color }}
      >
        {status}
      </button>
    </div>
  </div>
);

const Kanban = () => {
  return (
    <div className="grid grid-cols-[290px_1580px] bg-[#F4F7FE] gap-5">
      <Nav />
      <div>
        <Header name="Kanban" name2="Kanban" />
        <div className="grid grid-cols-3 gap-4 pt-4">
          <Container name="Backlog">
            <Card
              name='Option to "use local/server version" feature'
              text="It usually displays this message when you close an unsaved page when you do it on 
            purpose, and it's getting frustrated to see this every time."
              color="#3965FF"
              status="updates"
            />
            <Card
              name="Add/modify your own CSS-Selectors"
              bg={Bg1}
              text="Website Design: The ability to add/modify your own CSS-Selectors like its done in Venus."
              color="#FFB547"
              status="pending"
            />
            <Card
              name="Shortcode for templates to display correctly"
              text="When you save some sections as a template and then paste a shortcode to a new page, 
            the layout is broken, some styles are missing - in the editor."
              color="#E31A1A"
              status="errors"
            />
          </Container>
          <Container name="In progress">
            <Card
              name="General ideas to improve 'Edit' workflow"
              text="Currently, I have a few templates in the Local Library and when I 
            want to add them I'm always presented (by default)."
              color="#FFB547"
              status="pending"
            />
            <Card
              name="Shortcode for templates to display correctly"
              text="When you save some sections as a template and then paste a shortcode 
            to a new page, the layout is broken, some styles are missing - in the editor."
              color="#3965FF"
              status="updates"
            />
            <Card
              name="[UX Design] - Set the default Library tab"
              bg={Bg2}
              text="I want to be able to set the default Library tab (or a way to remember the last active tab), 
            especially when I already..."
              color="#E31A1A"
              status="errors"
            />
          </Container>
          <Container name="Done">
            <Card
              name="Copy/Paste elements between pages"
              text="We can only copy/paste elements (or group of elements) in the same page, which is quite limited."
              color="#01B574"
              status="done"
            />
            <Card
              name="Remove Extra DIV for each container added"
              text="I still hope there won't have an extra div for each container we added. 
            It should be something for better styling..."
              color="#01B574"
              status="done"
            />
            <Card
              name="Add Figma files for the Library design blocks"
              text="I want to present my clients the Figma files first, so it would be great 
            if you add those as well, more manual downloads..."
              color="#01B574"
              status="done"
            />
          </Container>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Kanban;
