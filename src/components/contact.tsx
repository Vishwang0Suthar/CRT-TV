import React, { useEffect, useState } from "react";
import "./contact.css";
import { contactData } from "@/lib/constData";
import Logospring from "./logoSpring";

type Props = {};

const Contact = (props: Props) => {
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
    <div className="lg:my-0 my-6 overflow-hidden contact border-2 border-gray-400 h-fit flex gap-2 justify-between flex-col w-full ">
      <div className="lg:contact-div p-8 py-2 flex flex-col divide-y-2 divide-gray-400 gap-0">
        {contactData.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <div
              key={index}
              className="h-fit w-full lg:px-6 p-5 lg:p-7 justify-between items-center flex gap-6"
            >
              <Icon className="scale-100 fill-current text-white duration-500 hover:text-black" />
              <div
                className={`h-8 overflow-hidden ${
                  isLargeScreen ? "contact-text" : ""
                }`}
              >
                <p
                  className={`lnkx ${
                    isLargeScreen ? "" : "hover:text-lightBlue-100"
                  }  text-sm lg:text-lg line-clamp-1 min-w-32 lg:min-w-44  text-end`}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={contact.url}
                  >
                    {contact.name}
                  </a>
                </p>
                {isLargeScreen ? (
                  <p className="lnkx-2  duration-300 text-sm lg:text-lg line-clamp-1 min-w-32 lg:min-w-44  text-end">
                    <a
                      target="_blank"
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
      <Logospring />
    </div>
  );
};

export default Contact;
