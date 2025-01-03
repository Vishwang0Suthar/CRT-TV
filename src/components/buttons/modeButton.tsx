import clsx from "clsx";
import React, { useState } from "react";
import Sun from "@/public/icons/sun.svg";
import Moon from "@/public/icons/moon.svg";
import { useTheme } from "next-themes";
import "./modeButton.css";
import useSound from "use-sound";
type Props = {
  isDark: boolean;
  isLargeScreen?: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModeButton = ({ isDark, isLargeScreen, setIsDark }: Props) => {
  //   const [isDark, setIsDark] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [playIn, { stop: stopGlitch }] = useSound("/sounds/tick-1.mp3", {
    volume: 1.2,
  });
  const handleClick = () => {
    setIsDark(!isDark);
    playIn();
  };
  return (
    <>
      <div
        className={`grid shadow-[5px_5px_0px_0px_rgba(0,0,0)]  place-content-center ${
          isDark
            ? "bg-paleBeige-50 border-black"
            : "bg-black border-paleBeige-50"
        }  lg:h-12 p-1 aspect-square h-14 lg:border-2 border-[3px]  rounded-full ${
          isLargeScreen
            ? "absolute translate-x-1/2 -translate-y-1/2 right-0 "
            : "  mb-0 translate-y-10  "
        }`}
        onClick={handleClick}
      >
        {isDark ? (
          <div className="h-8 sun w-8">
            <Sun className="" />
          </div>
        ) : (
          <div className="h-7 moon w-7">
            <Moon className="text-white" />
          </div>
        )}
      </div>
    </>
  );
};

export default ModeButton;
