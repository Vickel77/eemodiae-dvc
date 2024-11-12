import React from 'react'
import { Link } from 'react-router-dom' 
import HouseJoy from "../assets/Group 8.png";

const SideBar = () => {
  return (
    <div className="  hidden lg:flex flex-col h-screen bg-white">
          <div className="px-11 bg-[#1e2d52] py-5">
            <img src={HouseJoy} className="w-40" alt="" />
          </div>
          <div className="mt-4 \ px-2">
            <Link
              className="w-full block  border-2 border-[#1e2d52] shadow-lg font-[500] px-5 py-4 rounded-[5px]"
              to="/"
            >
              Home
            </Link>

            <Link
              className="w-full block border-2 border-[#1e2d52] shadow-lg  font-[500] px-5 py-4 rounded-[5px] mt-3"
              to="/form"
            >
              Dashboard
            </Link>

            <Link
              className="w-full block border-2 border-[#1e2d52] shadow-lg font-[500] px-5 py-4 rounded-[5px] mt-3"
              to="/slide"
            >
              Slides
            </Link>
          </div>

          <div className="px-11  mt-auto border-t-2 border-gray-400 py-4">
            <p className="text-center quicksand text-gray-500 text-sm">
              &copy; 2023 DVC Global. All rights reserved.
            </p>
          </div>
        </div>

  )
}

export default SideBar
