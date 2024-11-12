import React, {useContext} from 'react'
import pastorImg from "../assets/Logo.png";
import Title from "./Title";
import TextContent from "./TextContent";
import Button from "./Button";
import InputContext from '../contexts/inputContext';

const Header = () => {
  const {day, month, title} = useContext(InputContext)
  return (
    <div className = "bg-red-400">
       <div className="flex  lg:flex-row w-full justify-between items-center mb-4">
        <div>
          <Title text={`DAY ${day}`} />
          <TextContent text={`${month} 2024` } />
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Title text={title} />
          <Title text="Job 22:28 " className="font-[100] text-[16px]" />
          <Button
            text="I AM FAVOURED"
            className=" bg-[#000000D4] text-[14px] lg:text-[18px] px-8 hover:bg-green-500 text-white"
          />
        </div>
        <img src={pastorImg} className="w-[12%] grayscale" alt=""/>
      </div>
    </div>
  )
}

export default Header
