import { useContext, useRef } from "react";
import InputContext from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import Title from "./Title";
import TextContent from "./TextContent";
import Button from "./Button";
import HouseJoy from "../assets/Group 8.png";
import vector from "../assets/Vector.png";
import Vector2 from "../assets/Social media 1.png";
import Vector3 from "../assets/youtube 1.png";
import SideBar from "./SideBar";
import Header from "./Header";
import { exportComponentAsPNG } from "react-component-export-image";

const DailyVictory = () => {
  const componentRef = useRef();
  const navigate = useNavigate(); // Initialize navigation
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
    // Navigate to the next page
    navigate("/slide");
  };
  function insertLineBreaks(prayer) {
    return `~ ${String(prayer)
      .replace("~", "")
      .split("~")
      .join("<br/ > <br /> ~ ")}`;
  }

  return (
    <div ref={componentRef} className="flex w-full   items-center">
      <SideBar />

      <div className="heroImg text-white p-3 px-8 rounded-lg shadow-lg w-1/2 mx-auto my-auto">
        {/* Header Section */}

        <Header />
        {/* Confession Section */}
        <div className="flex  flex-col">
          <div className="flex justify-between items-center">
            <Title
              text="I CONFESS THIS"
              className="text-[24px] font-[600] text-white"
            />

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
          </div>

          <div className="flex space-x-10">
            <div
              onClick={handleConfession}
              className="w-1/2  pointer  space-y-5 mt-4"
            >
              <div className="w-full flex gap-1  max-w-1/2  h-fit ">
                <div className=" w-[100%] max-w-[100%]">
                  <TextContent
                    text={confession1 || "no default text"}
                    className="text-[22px] w-fit  transition-all ease-in-out duration-200 quicksand font-[300]"
                  />
                  <TextContent
                    text={scripture1 || "no default text"}
                    className="my-1 text-[18px] linearColor"
                  />
                </div>
              </div>
              <div className="w-full flex gap-1  max-w-1/2  h-fit ">
                <div>
                  <TextContent
                    text={confession2 || "no default text"}
                    className="text-[22px]  quicksand font-[300]"
                  />
                  <TextContent
                    text={scripture2 || "no default text"}
                    className="my-1 text-[18px] linearColor"
                  />
                </div>
              </div>
              <div className="w-full flex gap-1   h-fit ">
                <div>
                  <TextContent
                    text={confession3 || "no default text"}
                    className="text-[22px] quicksand font-[300]"
                  />
                  <TextContent
                    text={scripture3 || "no default text"}
                    className="my-1 text-[18px] linearColor"
                  />
                </div>
              </div>
            </div>

            {/* Prayer Section */}
            <div className="linear w-1/2 px-4 py-4 rounded-[30px] mb-4">
              <Title text="PRAYER" className="text-[16px] px-4 text-center" />
              <div className="">
                <div>
                  <TextContent innerHtml={insertLineBreaks(prayer)} />
                </div>

                {/* <div>
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
              </div> */}
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
              text={counsel || "no default text"}
              className="max-w-[350px]  text-[22px] quicksand font-[200]"
            />
          </div>

          {/* Prophecy Section */}
          <div className="linear h-fit p-7 text-center rounded-[30px] w-1/2 mb-4">
            <Title text="PROPHECY" className="" />
            <TextContent text={prophecy || "no default text"} />
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
              className="bg-[#1FF8F2] text-[#000000] font-[700] rounded-[20px] px-[20px] text-[20px] quicksand py-4 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyVictory;
