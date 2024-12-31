"use client";
import React, { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import clsx from "clsx";
import Screen from "@/components/window";
import Contact from "@/components/contact";
import Popup from "@/components/popup";
import CursorFollower from "@/components/cursorfollower";
import Button from "@/components/buttons/button";
import ModeButton from "@/components/buttons/modeButton";

const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Ensure the code only runs in the browser
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1200);
    };

    checkScreenSize(); // Run once on component mount

    // Add event listener for resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  return (
    <>
      <CursorFollower />
      <Popup checked={isChecked} isDark={isDark} />

      <section
        className={`lg:h-screen lg:cursor-none gap-20 w-full flex lg:flex-row flex-col ${
          isDark ? "bg-lightBeige-100" : "bg-paleBlue-50"
        }`}
      >
        {/* // <section className="h-screen gap-20 w-full flex flex-col"> */}
        <div className="lg:gap-8  gap-12 max-w-fit relative  flex justify-center items-center  flex-col">
          <Screen checked={isChecked} />
          <div className="flex items-center gap-8 justify-center">
            <Button isChecked={isChecked} setIsChecked={setIsChecked} />
            {isLargeScreen ? (
              <></>
            ) : (
              <ModeButton isDark={isDark} setIsDark={setIsDark} />
            )}
          </div>
        </div>
        <div className="min-w-fit">
          <Contact
            isLargeScreen={isLargeScreen}
            isDark={isDark}
            setIsDark={setIsDark}
          />
        </div>
      </section>
    </>
  );
};

export default App;
