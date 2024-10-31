import React, { useContext } from "react";
import { useState } from "react";
import InputContext from "../contexts/inputContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TabContent from "./TabContent";
import Title from "./Title";
import TextContent from "./TextContent";
import Button from "./Button";
import pastorImg from "../assets/Logo.png";
import HouseJoy from "../assets/Group 8.png";
import vector from "../assets/Vector.png";

const Form = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted");
    navigate("/")
    // Submit the form data to the server
    console.log("Form submitted:", inputValue, textAreaValue);
  };

  return (
    <>
      <div className="flex w-full items-center">
        <div className="  flex flex-col h-screen bg-white">
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

        <div className=" w-[97%]">
          <form onSubmit={handleSubmit} action="get">
            <div className="bg-[#D9D9D9] text-black space-y-5 p-4 px-8 rounded-lg shadow-lg w-[60%] mx-auto my-auto">
              {/* Confession 1 */}
              <div className="flex space-x-11 items-end">
                <div className="w-[60%] h-[120px]">
                  <textarea
                    placeholder="Confession 1"
                    value={confession1}
                    onChange={(e) => setConfession1(e.target.value)}
                    className="w-full outline-none text-black p-4 border-2 border-gray-900 rounded-[10px] h-full"
                  />
                </div>
                <div className="w-[40%] h-[60px]">
                  <input
                    type="text"
                    value={scripture1}
                    onChange={ e => setScripture1(e.target.value) }
                    placeholder="Scripture 1"
                    className="rounded-[10px] outline-none text-black px-3 border-2 border-gray-900 w-full h-full"
                  />
                </div>
              </div>

              {/* Confession 2 */}
              <div className="flex space-x-11 items-end">
                <div className="w-[60%] h-[120px]">
                  <textarea
                    value={confession2}
                    onChange={ e => setConfession2(e.target.value)}
                    placeholder="Confession 2"
                    className="w-full outline-none text-black p-4 border-2 border-gray-900 rounded-[10px] h-full"
                  />
                </div>
                <div className="w-[40%] h-[60px]">
                  <input
                    type="text"
                    value={scripture2}
                    onChange={ e => setScripture2(e.target.value) }
                    placeholder="Scripture 2"
                    className="rounded-[10px] outline-none text-black px-3 border-2 border-gray-900 w-full h-full"
                  />
                </div>
              </div>

              {/* Confession 3 */}
              <div className="flex space-x-11 items-end">
                <div className="w-[60%] h-[120px]">
                  <textarea
                  value={confession3}
                  onChange={ e => setConfession3(e.target.value)}
                    placeholder="Confession 3"
                    className="w-full outline-none text-black p-4 border-2 border-gray-900 rounded-[10px] h-full"
                  />
                </div>
                <div className="w-[40%] h-[60px]">
                  <input
                    type="text"
                    value={scripture3}
                    onChange={ e => setScripture3(e.target.value) }
                    placeholder="Scripture 3"
                    className="rounded-[10px] outline-none text-black px-3 border-2 border-gray-900 w-full h-full"
                  />
                </div>
              </div>

              {/* Additional Fields */}
              <div className="flex py-3 space-x-11 items-end">
                <div className="w-[60%] space-y-[10px]">
                  <div className="w-full h-[100px]">
                    <textarea
                      value={counsel}
                      onChange={ e => setCounsel(e.target.value)}
                      placeholder="Counsel"
                      className="w-full outline-none text-black p-4 border-2 border-gray-900 rounded-[10px] h-full"
                    />
                  </div>
                  <div className="w-full h-[100px]">
                    <textarea
                    value={prophecy}
                    onChange={ e => setProphecy(e.target.value)}
                      placeholder="Prophecy"
                      className="w-full outline-none text-black p-4 border-2 border-gray-900 rounded-[10px] h-full"
                    />
                  </div>
                </div>

                <div className="w-[40%] h-[250px]">
                  <textarea
                  value={prayer}
                  onChange={ e => setPrayer(e.target.value)}
                    placeholder="Prayer"
                    className="w-full outline-none text-black p-4 border-2 border-gray-900 rounded-[10px] h-full"
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="w-full flex justify-end">
                <button className="bg-gradient-to-r from-green-400 to-green-600 flex items-center font-[600] p-2 rounded-[10px] text-white px-4">
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
