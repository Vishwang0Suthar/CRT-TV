import clsx from "clsx";
import React from "react";
import "./popup.css";
type Props = {
  checked?: boolean;
  isDark: boolean;
};

const Popup = ({ checked, isDark, ...props }: Props) => {
  return (
    <section className="absolute cursor-none scale-90 lg:scale-100 lg:w-[48rem] left-[50%]  -translate-x-1/2 w-full z-50">
      {checked ? (
        <div
          className={`musicCr relative flex duration-500 opacity-0 flex-col border-2  rounded-full overflow-hidden p-4 ${
            isDark
              ? "bg-lightBeige-100 border-paleBeige-50"
              : "bg-paleBlue-50 border-gray-600"
          } `}
        >
          <div className=" w-full px-2 flex justify-between items-center text-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                className="fill-current text-white"
              >
                <path fill="none" d="M0 0h48v48H0z"></path>
                <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-2 28h-4V16h4v16zm8 0h-4V16h4v16z"></path>
              </svg>
            </div>
            <div className="flex-col lg:text-lg text-sm flex items-center">
              <h1 className=" text-md font-semibold">
                <span
                  className={`font-thin ${
                    isDark ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  Playing
                </span>{" "}
                Fly me to the moon{" "}
              </h1>
              <p className="text-end font-semibold  w-full">
                <span
                  className={`font-thin ${
                    isDark ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  -{" "}
                </span>{" "}
                Juliana chahayed{" "}
              </p>
            </div>
            <div className="aspect-square ">
              <a
                target="_blank"
                className="lg:cursor-none"
                href="https://youtu.be/FRo_9RMm5q8?si=M4hteRjOX8RAEYrW"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,256,256"
                  width="50px"
                  height="50px"
                  className="fill-current text-white hover:text-red-500 duration-300 cursor-none"
                >
                  <g
                    fill-rule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="liti h-2 bg-white absolute bottom-0 w-full"></div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Popup;
