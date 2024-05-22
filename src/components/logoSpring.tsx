import React, { useState, useEffect } from "react";
import Dripy1 from "@/public/svg/Dripy.svg";
import Dripy2 from "@/public/svg/Dripy-4.svg";
import Dripy3 from "@/public/svg/Dripy-1.svg";
import Dripy4 from "@/public/svg/Dripy-3.svg";
import Dripy5 from "@/public/svg/Dripy-2.svg";

type Props = {};

const Logospring = (props: Props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isHovered) {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const getTransformStyle = (depth: number) => {
    if (!isHovered) return {};
    const baseOffset = 0; // Base offset for the bottom logo
    const maxOffsetIncrement = 4; // Maximum increment in offset for the top logo
    const offsetIncrement = (maxOffsetIncrement / 3.5) * (10 - depth); // Calculate offset increment based on depth
    const offset = baseOffset + offsetIncrement; // Calculate offset for the current logo
    const x = ((mousePosition.x * 3) / window.innerWidth - 4) * offset;
    const y = ((mousePosition.y * 1.2) / window.innerHeight - 3) * offset;
    return {
      transform: `translate(${x}px, ${y}px)`,
      scale: 1.1,
    };
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="follow min-w-44 min-h-24 max-h-60 flex-1 group relative gap-4 flex justify-center items-center cr  w-full font-semibold bg-white"
    >
      <p className="crtxt gap-0 items-center text-end">a</p>
      <span className=" relative min-w-10">
        <Dripy1
          className="logo absolute duration-150 -translate-y-1/3"
          style={getTransformStyle(5)}
        />
        <Dripy2
          className="logo absolute duration-150 -translate-y-1/3"
          style={getTransformStyle(4)}
        />
        <Dripy3
          className="logo absolute duration-150 -translate-y-1/3"
          style={getTransformStyle(3)}
        />
        <Dripy4
          className="logo absolute duration-150 -translate-y-1/3"
          style={getTransformStyle(2)}
        />
        <Dripy5
          className="logo absolute duration-150 -translate-y-1/3"
          style={getTransformStyle(1)}
        />
      </span>
      <p className="crtxt min-w-44 ml-4 gap-0 items-center text-end">
        the coder original
      </p>
      <p className="hvr text-sm text-gray-500 animate-pulse absolute group-hover:text-white right-4 bottom-2 lg:flex hidden">
        {" "}
        {"{"}hover-here{"}"}
      </p>
    </div>
  );
};

export default Logospring;
