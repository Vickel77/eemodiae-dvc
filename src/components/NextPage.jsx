import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TabContent from "./TabContent";
import Title from "./Title";
import TextContent from "./TextContent";
import Button from "./Button";
import pastorImg from "../assets/Logo.png";
import HouseJoy from "../assets/Group 8.png";
import vector from "../assets/Vector.png";
import Vector2 from "../assets/Social media 1.png";
import Vector3 from "../assets/youtube 1.png";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";

const tabs = [
  {
    id: 1,
    title: "I CONFESS THIS",
    content: [
      {
        text: "I am filled with the fresh fire of the Holy Spirit, the fire of revival burns in me.",
        reference: "( Matthew 3:11 )",
      },
      {
        text: "Divine favour is my advantage; my reality is shaped by God's favour.",
        reference: " ( Ezekiel 47:9 )",
      },
      {
        text: "From today till I see Jesus, my fire shall never go down.",
        reference: "( Isaiah 10:17 )",
      },
    ],
  },
 
  {
    id: 2,
    title: "COUNSEL",
    content: [
      {
        text: "Give yourself consistently to prayer & study of the word to see more revival fire.",
        reference: "( Acts 2:42 )",
      },
    ],
    title2: "PROPHECY",
    update: [
        {
          text2: "Your fire shall ever be on the increase!",
        },
      ],
  },
  {
    id: 3,
    title: "CONFESSION 3",
    content: [
      {
        text: "~ Lord I thank you, for baptizing me with fire.",
        reference: "( Heb 1:7 )",
      },
      {
        text: "~ Help me Lord, to increase your fire in my life.",
        reference: "( ACTS 4:31 )",
      },
      {
        text: "~ My fire will never go out in Jesus name. ",
        reference: "( Lev 6:12 )",
      },
    ],
  },
];

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const handleTabChange = (activeTab) => {
    if (activeTab === 0) {
      navigate('/');  
    } else {
      navigate('/other');  
    }
}
  return (
    <div className="heroImg text-white p-3 px-8 rounded-lg shadow-lg w-1/2 mx-auto my-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <Title text="DAY 11" />
          <TextContent text="Oct 2024" />
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Title text="Daily Victory Confessions" />
          <Title text="Job 22:28 " className="font-[100] text-[16px]" />
          <Button
            text="I AM FAVOURED"
            className=" linear px-8 hover:bg-green-500 text-white"
          />
        </div>
        <img src={pastorImg} className="w-[12%]" alt="" />
      </div>
      <div className="  w-flex ">
        <div className="flex  items-center mt-8">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`h-1 w-8 mx-1 ${
                index === activeTab ? "bg-green-500" : "bg-gray-400"
              }`}
              style={{
                borderRadius: index === activeTab ? "4px" : "4px",
                height: "4px",
              }}
            />
          ))}
        </div>
        <div className="">
          <TabContent tab={tabs[activeTab]} />
          {/* Page Counter */}
          <div className="flex justify-between items-center mt2">
            <span className="linear rounded-[10px] px-[20px] text-[20px] quicksand py-2 hover:bg-green-500 text-white">
              {activeTab + 1}/{tabs.length}
            </span>
            {/* Navigation Buttons */}
            <div className="space-x-2">
              <button
                className=" rounded-[10px] px-[20px] text-[20px] quicksand py-2  text-white"
                onClick={() => setActiveTab((activeTab - 1) % tabs.length)}
              >
                <IoChevronBackOutline />
              </button>
              <button
                className="rounded-[10px] px-[20px] text-[20px] quicksand py-2  text-white"
                onClick={() => setActiveTab((activeTab + 1) % tabs.length)}
              >
                <IoChevronForwardOutline />
              </button>
            </div>
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
            className="linear rounded-[9px] px-[20px] text-[20px] quicksand py-2 hover:bg-green-500 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
