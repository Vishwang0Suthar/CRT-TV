import React, { useRef, useState } from "react";
import useSound from "use-sound";
import clsx from "clsx";

type Props = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const Button = ({ isChecked, setIsChecked }: Props) => {
  const [ans, setAns] = useState("OFF");

  const [playOn] = useSound("/sounds/cassette-into.mp3", { volume: 0.65 });
  const [playIn, { stop: stopGlitch }] = useSound("/sounds/tv-glitch.mp3", {
    volume: 0.35,
  });
  const [playMus, { stop: stopMusic }] = useSound(
    "/sounds/fly-to-da-moon.mp3",
    {
      volume: 0.65,
    }
  );
  const [playOff] = useSound("/sounds/cassette-out.mp3", { volume: 0.35 });

  const playInTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const playMusTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    if (!isChecked) {
      setIsChecked(true);
      playOn();
      setAns("ON");

      // Set the timeout and store the timeout IDs in the refs
      playInTimeoutRef.current = setTimeout(() => {
        playIn();
        setTimeout(stopGlitch, 2500); // Stops the sound after 2.5 seconds
      }, 500);

      playMusTimeoutRef.current = setTimeout(() => {
        playMus();
      }, 2500);
    } else {
      setIsChecked(false);
      playOff();
      stopGlitch();
      stopMusic();
      setAns("OFF");

      // Clear the timeouts to prevent them from executing if the state changes
      if (playInTimeoutRef.current) clearTimeout(playInTimeoutRef.current);
      if (playMusTimeoutRef.current) clearTimeout(playMusTimeoutRef.current);
    }
  };

  return (
    <>
      <div
        className={clsx(
          "batan rounded-[25em]  mb-0 lg:mb-4 z-40 relative top-10 border-4 border-black border-opacity-50 overflow-hidden lg:h-24 h-14 w-28 md:h-18 md:w-36 lg:w-48 flex px-2 justify-center items-center transition-all duration-300 shadow-[5px_5px_0px_0px_rgba(0,0,0)] lg:shadow-[8px_8px_0px_0px_rgba(0,0,0)] group ease-in-out ",
          {
            "bg-green-600": isChecked,
            "bg-red-500": !isChecked,
          }
        )}
        onClick={handleClick}
      >
        <div
          className={clsx(
            "lg:h-16 lg:w-16 h-10 absolute left-2 lg:left-2 w-10 shadow-md overflow-hidden grid place-items-center rounded-full duration-500 bg-white",
            {
              "lg:translate-x-24 translate-x-12": isChecked,
            }
          )}
          style={{
            borderRadius: "50%",
            background: "linear-gradient(145deg, #f0f0f0, #cacaca)",
            boxShadow: "5px 5px 10px #00000,-5px -5px 10px #ffffff",
          }}
        >
          <div
            className="lg:h-14 h-6 w-6 lg:w-14"
            style={{
              borderRadius: "127px",
              background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
              boxShadow: "5px 5px 9px #00000,-5px -5px 9px #ffffff",
            }}
          ></div>
        </div>

        <div
          className={clsx(
            "lg:h-4 h-2 w-12 lg:w-24 absolute shadow-inner z-[-1] rounded-3xl duration-500",
            {
              "bg-green-700": isChecked,
              "bg-red-700": !isChecked,
            }
          )}
        ></div>
        <p className="lg:text-xl p-2 z-[-1] drop-shadow-lg text-center text-[0.7rem] text-gray-950 -mb-1 self-end w-20 opacity-40 font-bold font-mono">
          {ans}
        </p>
      </div>
    </>
  );
};

export default Button;
