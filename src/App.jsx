import React, { useState, useRef } from "react";
import InputContext from "./contexts/inputContext.js";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MainContent from "./components/MainContent";
import NextPage from "./components/NextPage.jsx"; // Another page to navigate to
import Form from "./components/Form.jsx";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

const App = () => {
  const [confession1, setConfession1] = useState("");
  const [confession2, setConfession2] = useState("");
  const [confession3, setConfession3] = useState("");
  const [scripture1, setScripture1] = useState("");
  const [scripture2, setScripture2] = useState("");
  const [scripture3, setScripture3] = useState("");
  const [counsel, setCounsel] = useState("");
  const [prayer, setPrayer] = useState([]);
  const [prophecy, setProphecy] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [title, setTitle] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const componentRef = useRef();


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

  return (
    <InputContext.Provider
      value={{
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
        day,
        setDay,
        month,
        setMonth,
        title,
        setTitle,
        setActiveTab,
        activeTab,
        tabs,
        componentRef,
      }}
    >
      <BrowserRouter>
        <div className="bg-slate-800 w-full relative   flex justify-center">
          {/* Define Routes for different components */}
          <Routes>
            {/* Route for the MainContent component (the homepage or default page) */}
            <Route path="/" element={<MainContent />} />

            {/* Route for a different page (e.g., after clicking the Confession div) */}
            <Route path="/form" element={<Form />} />
            <Route path="/slide" element={<NextPage />} />
          </Routes>
          <div className="space-x-2 mt-auto bottom-10 right-5 p-4 flex flex-col items-center justify-center absolute">
            <div>
              <p
                className="italic underline cursor-pointer quicksand linearColor"
                onClick={() =>
                  exportComponentAsPNG(componentRef, {
                    quality: 1,
                    scale: 2, // Increase scale to improve clarity
                    backgroundColor: "#ffffff", // Sets a solid white background to avoid transparency
                  })
                }
              >
                Export as PNG
              </p>
            </div>
            <div className=" space-x-2  p-4 flex ">
              <button
                className=" rounded-[10px] bg-slate-900 border px-[20px] text-[20px] quicksand py-2  text-white"
                onClick={() => {
                  if (activeTab === 0) {
                    window.location.href ='/';
                  } else {
                    setActiveTab((activeTab - 1) % tabs.length);
                  }
                }}
              >
                <IoChevronBackOutline />
              </button>
              <button
                className="rounded-[10px] px-[20px] border bg-slate-900 text-[20px] quicksand py-2  text-white"
                onClick={() => setActiveTab((activeTab + 1) % tabs.length)}
              >
                <IoChevronForwardOutline />
              </button>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </InputContext.Provider>
  );
};

export default App;
