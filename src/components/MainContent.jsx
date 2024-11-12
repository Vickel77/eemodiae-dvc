import React, { useState, useContext, useRef } from "react";
import InputContext from "../contexts/inputContext";
import { useNavigate } from "react-router-dom";
import Title from "./Title";
import TextContent from "./TextContent";
import Button from "./Button";
import pastorImg from "../assets/Logo.png";
import HouseJoy from "../assets/Group 8.png";
import vector from "../assets/Vector.png";
import Vector2 from "../assets/Social media 1.png";
import Vector3 from "../assets/youtube 1.png";
import SideBar from "./SideBar";
import Header from "./Header";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

const DailyVictory = () => {
  const componentRef = useRef();
  const navigate = useNavigate();
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

  const handleConfession = () => {
    navigate("/slide");
  };

  function insertLineBreaks(prayer) {
    return `~ ${String(prayer)
      .replace("~", "")
      .split("~")
      .join("<br/> <br/> ~ ")}`;
  }

  return (
    <div ref={componentRef} className="flex flex-col lg:flex-row w-full items-center px-4 lg:px-8 py-4">
      <SideBar />
      <div className="heroImg text-white p-3 lg:p-8 rounded-lg shadow-lg w-full lg:w-1/2 mx-auto my-auto">
        <Header />

        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <Title text="I CONFESS THIS" className="text-lg lg:text-2xl font-semibold text-white" />
            <p
              className="italic cursor-pointer quicksand linearColor text-sm lg:text-base"
              onClick={() =>
                exportComponentAsPNG(componentRef, {
                  quality: 1,
                  scale: 100,
                  backgroundColor: "#ffffff",
                })
              }
            >
              Export as PNG
            </p>
          </div>

          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10">
            <div onClick={handleConfession} className="lg:w-1/2 space-y-5 mt-4">
              {/** Confession sections with responsive text sizes */}
              <div className="w-full flex flex-col gap-1">
                <TextContent text={confession1 || "no default text"} className="text-base lg:text-lg font-light" />
                <TextContent text={scripture1 || "no default text"} className="my-1 text-sm lg:text-base linearColor" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <TextContent text={confession2 || "no default text"} className="text-base lg:text-lg font-light" />
                <TextContent text={scripture2 || "no default text"} className="my-1 text-sm lg:text-base linearColor" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <TextContent text={confession3 || "no default text"} className="text-base lg:text-lg font-light" />
                <TextContent text={scripture3 || "no default text"} className="my-1 text-sm lg:text-base linearColor" />
              </div>
            </div>

            <div className="linear w-full lg:w-1/2 p-4 rounded-xl mb-4">
              <Title text="PRAYER" className="text-sm lg:text-base text-center" />
              <TextContent innerHtml={insertLineBreaks(prayer)} className="text-base lg:text-lg" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="lg:w-1/2 mb-4">
            <Title text="COUNSEL" className="text-lg lg:text-2xl linearColor my-2" />
            <TextContent text={counsel || "no default text"} className="text-base lg:text-lg font-light" />
          </div>
          <div className="linear p-6 lg:p-7 text-center rounded-xl w-full lg:w-1/2 mb-4">
            <Title text="PROPHECY" className="text-sm lg:text-base" />
            <TextContent text={prophecy || "no default text"} className="text-base lg:text-lg" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center mt-6 gap-4">
          <img src={HouseJoy} className="w-20 lg:w-40" alt="HouseJoy" />
          <div className="flex flex-col items-center text-center">
            <img src={vector} alt="Vector Logo" />
            <h3 className="text-sm lg:text-base">eemodioe.org</h3>
          </div>
          <div className="flex items-center gap-2">
            <img src={Vector2} alt="Social Icon 1" className="w-6 lg:w-8" />
            <img src={Vector3} alt="Social Icon 2" className="w-6 lg:w-8" />
            <h3 className="text-sm lg:text-base">hjcglobal</h3>
          </div>
          <Button
            text="Please Share"
            className="bg-[#1FF8F2] text-black font-bold rounded-lg px-4 lg:px-6 py-2 lg:py-4 text-sm lg:text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default DailyVictory;
