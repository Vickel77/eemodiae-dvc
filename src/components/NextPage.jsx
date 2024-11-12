import React, { useState, useContext, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import TabContent from "./TabContent";
import Title from "./Title";
import TextContent from "./TextContent";
import Button from "./Button";
import pastorImg from "../assets/Logo.png";
import HouseJoy from "../assets/Group 8.png";
import vector from "../assets/Vector.png";
import Vector2 from "../assets/Social media 1.png";
import Vector3 from "../assets/youtube 1.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import InputContext from "../contexts/inputContext";
import SideBar from "./SideBar";
import Header from "./Header";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

const App = () => {
  const {
    confession1,
    confession2,
    confession3,
    scripture1,
    scripture2,
    scripture3,
    setScripture1,
    setScripture2,
    setScripture3,
    setConfession1,
    setConfession2,
    setConfession3,
    counsel,
    prayer,
    setActiveTab,
    activeTab,
    prophecy,
    setProphecy,
    setCounsel,
    setPrayer,
    tabs,
    componentRef,
  } = useContext(InputContext);

 
  
  const navigate = useNavigate();
  const handleTabChange = (activeTab) => {
    if (activeTab === 0) {
      navigate("/");
    } else {
      navigate("/other");
    }
  };
  return (
    <div  className="flex w-full items-center">
      <SideBar />
      <div ref={componentRef} className=" heroImg text-white p-3 px-8 rounded-lg shadow-lg w-1/2 mx-auto my-auto"style={{
          backgroundSize: 'cover'  // Double the size
          }}>
        <Header />
        <div className="  w-flex ">
          <div className="flex justify-between  items-center mt-8">
            <div className="flex  h-full">
              {tabs.map((tab, index) => (
                <div
                  key={tab.id}
                  className={`h-1 w-8 mx-1 ${
                    index === activeTab ? "bg-[#1FF8F2]" : "bg-gray-400"
                  }`}
                  style={{
                    borderRadius: index === activeTab ? "4px" : "4px",
                    height: "4px",
                  }}
                />
              ))}
            </div>

           
          </div>
          <div className="">
            <TabContent tab={tabs[activeTab]} />
            {/* Page Counter */}
            <div className="flex justify-between items-center mt2">
              <span className="linear rounded-[10px] px-[20px] text-[20px] quicksand py-2 hover:bg-green-500 text-white">
                {activeTab + 1}/{tabs.length}
              </span>
              {/* Navigation Buttons */}
            </div>
          </div>
        </div>

        {/* Confession Section */}

        {/* Footer Section */}
        <div className="flex justify-between items-center mt-6">
          <div>
            <img src={HouseJoy} className="w-40" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <img src={vector} alt="" />
            <h3 className="quicksand">eemodioe.org</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex">
              <img src={Vector2} alt="" />
              <img src={Vector3} alt="" />
            </div>
            <h3>hjcglobal</h3>
          </div>
          <div>
            <Button
              text="Please Share"
              className="bg-[#1FF8F2] text-[#000000] font-[700] rounded-[20px] px-[20px] text-[20px] quicksand py-4 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
