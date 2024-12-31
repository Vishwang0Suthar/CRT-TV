import React, { useEffect, useState } from "react";
import "./contact.css";
import { contactData } from "@/lib/constData";
import Logospring from "./logoSpring";
import ModeButton from "./buttons/modeButton";

type Props = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  isLargeScreen: boolean;
};

const Contact = ({ isLargeScreen, isDark, setIsDark }: Props) => {
  return (
    <div
      className={`lg:my-0 my-6 relative  contact border-2 ${
        isDark ? "border-gray-800" : "border-gray-400"
      } h-fit flex gap-2 justify-between flex-col w-full `}
    >
      {isLargeScreen ? (
        <ModeButton
          isDark={isDark}
          isLargeScreen={isLargeScreen}
          setIsDark={setIsDark}
        />
      ) : (
        <></>
      )}
      <div
        className={`lg:contact-div  overflow-visible p-8 py-2 flex flex-col divide-y-2 ${
          isDark ? "divide-gray-800" : "divide-gray-400"
        } gap-0`}
      >
        {contactData.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <div
              key={index}
              className="h-fit w-full  lg:px-6 p-5  lg:p-7 justify-between items-center flex gap-6"
            >
              <Icon
                className={`scale-100 fill-current duration-500 ${
                  isDark
                    ? "text-black  lg:hover:text-black md:hover:text-white"
                    : "text-white lg:hover:text-white md:hover:text-black"
                } peer-hover:scale-105`}
              />
              <div
                className={`h-8 peer overflow-hidden ${
                  isLargeScreen ? "contact-text" : ""
                }`}
              >
                <p
                  className={`${isDark ? "lnkx-light" : "lnkx"} ${
                    isLargeScreen ? "" : "hover:text-lightBlue-100"
                  } ${
                    isLargeScreen && isDark ? "" : "hover:text-paleBeige-50"
                  }  text-sm lg:text-lg line-clamp-1 min-w-32 lg:min-w-44  text-end`}
                >
                  <a
                    target="_blank"
                    className="lg:cursor-none"
                    rel="noopener noreferrer"
                    href={contact.url}
                  >
                    {contact.name}
                  </a>
                </p>
                {isLargeScreen ? (
                  <p
                    className={`lnkx-2   text-sm lg:text-lg line-clamp-1 min-w-32 lg:min-w-44  text-end ${
                      isDark ? "lnkx-2-light" : "lnkx-2"
                    }`}
                  >
                    <a
                      target="_blank"
                      className="lg:cursor-none"
                      rel="noopener noreferrer"
                      href={contact.url}
                    >
                      {contact.name}
                    </a>
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      <Logospring isDark={isDark} />
    </div>
  );
};

export default Contact;
