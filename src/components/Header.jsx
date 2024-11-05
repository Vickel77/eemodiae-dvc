import React from 'react'
import pastorImg from "../assets/Logo.png";
import Title from "./Title";
import TextContent from "./TextContent";
import Button from "./Button";

const Header = () => {
  return (
    <div>
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
            className=" bg-[#000000D4] px-8 hover:bg-green-500 text-white"
          />
        </div>
        <img src={pastorImg} className="w-[12%] grayscale" alt=""/>
      </div>
    </div>
  )
}

export default Header
