import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "./Title";
import TextContent from "./TextContent";
import Button from "./Button";
import pastorImg from "../assets/Logo.png";
import HouseJoy from "../assets/Group 8.png";
import vector from "../assets/Vector.png";
import Vector2 from "../assets/Social media 1.png";
import Vector3 from "../assets/youtube 1.png";

const DailyVictory = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleConfession = () => {
    // Navigate to the next page
    navigate("/next-page");
  };

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

      {/* Confession Section */}
      <div className="flex  flex-col">
        <Title
          text="I CONFESS THIS"
          className="text-[24px] font-[600] text-green-400"
        />

        <div className="flex space-x-10">
          <div onClick={handleConfession} className="w-1/2 bg-yellow-700 pointer  space-y-5 mt-4">
            <div className="w-full flex gap-1  max-w-1/2  h-fit ">
              <div className="py-3 px-[3px]  h-fit linear"></div>
              <div>
                <TextContent
                  text="I am highly favoured in Christ Jesus. Everywhere I go, favour awaits me."
                  className="text-[22px]  transition-all ease-in-out duration-200 quicksand font-[300]"
                />
                <TextContent
                  text="Ephesians 1:5-6"
                  className="my-1 text-[18px] linearColor"
                />
              </div>
            </div>
            <div className="w-full flex gap-1  max-w-1/2  h-fit ">
              <div className="py-3 px-[3px]  h-fit linear"></div>
              <div>
                <TextContent
                  text=" Divine favour is my advantage; my reality is shaped by God's favour. "
                  className="text-[22px]  quicksand font-[300]"
                />
                <TextContent
                  text="Malachi 1:2-3, Romans 9:11-13"
                  className="my-1 text-[18px] linearColor"
                />
              </div>
            </div>
            <div className="w-full flex gap-1  max-w-1/2  h-fit ">
              <div className="py-3 px-[3px]  h-fit linear"></div>
              <div>
                <TextContent
                  text=" I enter my next level by God's favour. I scale heights at record speed. "
                  className="text-[22px] quicksand font-[300]"
                />
                <TextContent
                  text="Psalm 44:3"
                  className="my-1 text-[18px] linearColor"
                />
              </div>
            </div>
          </div>

          {/* Prayer Section */}
          <div className="linear w-1/2 px-4 py-4 rounded-[30px] mb-4">
            <Title text="PRAYER" className="text-[16px] px-4 p-2 text-center" />
            <div className="space-y-3">
              <div>
                <TextContent
                  text="~ Lord, I thank you for your favour at work in my life."
                  className="text-[22px] quicksand font-[300]"
                />
                <TextContent
                  text="(Gen 39:21)"
                  className="text-[18px] quicksand"
                />
              </div>

              <div>
                <TextContent
                  text="~ Help me Lord, to lead the life you have chosen me for. "
                  className="text-[22px] quicksand font-[300]"
                />
                <TextContent
                  text="(Col 1:10)"
                  className="text-[18px] quicksand"
                />
              </div>

              <div>
                <TextContent
                  text=" 

~ We rise above every limitations placed on my family in Jesus name. 
"
                  className="text-[22px] quicksand font-[300]"
                />
                <TextContent
                  text="(Zec 1:19-21)"
                  className="text-[18px] quicksand"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counsel Section */}
      <div className="flex gap-10">
        <div className="mb-4 w-1/2">
          <Title
            text="COUNSEL"
            className="text-[25px] quicksand linearColor my-2"
          />
          <TextContent
            text="The thought of being chosen by God should boost your esteem. Commit this to memory and you will never see yourself as inferior. 
(1 Cor 15:2) "
            className="max-w-[350px]  text-[22px] quicksand font-[200]"
          />
        </div>

        {/* Prophecy Section */}
        <div className="linear h-fit p-7 text-center rounded-[30px] w-1/2 mb-4">
          <Title text="PROPHECY" className="" />
          <TextContent text="You are chosen for a marvelous life; no more mediocrity around you!" />
        </div>
      </div>

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
            className="linear rounded-[20px] px-[40px] text-[20px] quicksand py-4 hover:bg-green-500 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default DailyVictory;
