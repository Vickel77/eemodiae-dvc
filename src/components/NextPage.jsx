import { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TabContent from "./TabContent";
import Button from "./Button";
import HouseJoy from "../assets/Group 8.png";
import vector from "../assets/Vector.png";
import Vector2 from "../assets/Social media 1.png";
import Vector3 from "../assets/youtube 1.png";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import InputContext from "../contexts/DataContext";
import SideBar from "./SideBar";
import Header from "./Header";
import { exportComponentAsPNG } from "react-component-export-image";

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
    prophecy,
    setProphecy,
    setCounsel,
    setPrayer,
  } = useContext(InputContext);
  const tabs = [
    {
      id: 1,
      title: "I CONFESS THIS",
      content: [
        {
          text: confession1 || "no default text",
          reference: scripture1 || "no default text",
        },
        {
          text: confession2 || "no default text",
          reference: scripture2 || "no default text",
        },
        {
          text: confession3 || "no default text",
          reference: scripture3 || "no default text",
        },
      ],
    },

    {
      id: 2,
      title: "COUNSEL",
      content: [
        {
          text: counsel || "no counsel yet",
          reference: "",
        },
      ],
      title2: "PROPHECY",
      update: [
        {
          text2: prophecy || "no prophecy yet",
        },
      ],
    },
    {
      id: 3,
      title: "PRAYERS",
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

  const componentRef = useRef();
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const handleTabChange = (activeTab) => {
    if (activeTab === 0) {
      navigate("/");
    } else {
      navigate("/other");
    }
  };
  return (
    <>
    
    

       
    
    <div ref={componentRef} className="flex w-full items-center">
      <SideBar />
      <div className="heroImg text-white p-3 px-8 rounded-lg shadow-lg w-1/2 mx-auto my-auto">
        {/* Header Section */}
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
              <div className="space-x-2">
                <button
                  className=" rounded-[10px] bg-[#033331bb] px-[20px] text-[20px] quicksand py-2  text-white"
                  onClick={() => setActiveTab((activeTab - 1) % tabs.length)}
                >
                  <IoChevronBackOutline />
                </button>
                <button
                  className="rounded-[10px] px-[20px] bg-[#033331bb] text-[20px] quicksand py-2  text-white"
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
              className="bg-[#1FF8F2] text-[#000000] font-[700] rounded-[20px] px-[20px] text-[20px] quicksand py-4 "
            />
          </div>
        </div>
      </div>
    </div>
         <p
              className="italic cursor-pointer quicksand linearColor"
              onClick={() =>
                exportComponentAsPNG(componentRef, {
                  quality: 1,
                  scale: 100, // Increase scale to improve clarity
                  backgroundColor: "#ffffff", // Sets a solid white background to avoid transparency
                })
              }
            >
              Export as PNG
            </p>
    </>
  );
};

export default App;
