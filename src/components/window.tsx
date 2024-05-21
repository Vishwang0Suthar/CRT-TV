import React from "react";
import "./window.css";
import clsx from "clsx";
import Image from "next/image";
import crt from "./crt.png";
// import Close from "/svg/close.svg";
// import Dash from "/svg/dash.png";
// import Expand from "/svg/expand.png";
type Props = {
  checked?: boolean;
};

const Screen = ({ checked, ...props }: Props) => {
  return (
    <>
      <div className="flex  items-center mt-10  aspect-[16/10] lg:w-[55vw] xl:w-[55vw] flex-col border-4 overflow-hidden border-white border-opacity-50 rounded-3xl">
        <Image
          alt="tv"
          height={600}
          width={860}
          src={crt}
          className="absolute -mt-6 lg:-mt-14  left-1/2 select-none -translate-x-1/2 z-30"
        />
        <div
          className={clsx(
            "h-[10%] w-60dvw hidden border-b-4 border-white p-2 px-4  justify-start items-center   border-opacity-50",
            {
              "bg-black": !checked,
              "bg-white bg-opacity-60": checked,
            }
          )}
        >
          <ul className="flex gap-2">
            <li className="bg-red-500 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </li>
            <li className="bg-yellow-500 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </li>
            <li className="bg-green-500 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </li>
          </ul>
        </div>
        <div className="  relative shadow-inner aspect-[16/10] flex justify-center items-center  flex-1 w-full ">
          {checked ? (
            <div className="pr-screen opacity-70 aspect-[16/10] relative sm:w-[55vw] md:w-[55vw] w-[90vw] lg:w-[55vw] ">
              <div className="screen w-full h-full aspect-[16/10] z-30 absolute"></div>
              <div className="screen-img w-full h-full aspect-[16/10]"></div>
            </div>
          ) : (
            <div className=" flex items-center justify-center bg-black h-full  w-[90vw] aspect-[16/10] lg:w-[55vw]">
              <div className="flex flex-col justify-center items-center opacity-0 screen-off ">
                <h1 className="text-4xl lg:translate-x-0 -translate-x-16 lg:text-6xl text-white text-left  font-semibold w-fit lg:w-80">
                  Dr!py
                </h1>
                <p className="text-gray-400 text-center opacity-80 text-xs lg:text-sm font-extralight">
                  Signing Off
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Screen;
