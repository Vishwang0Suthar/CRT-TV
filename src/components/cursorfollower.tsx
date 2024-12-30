"use client";
import React, { useEffect, useRef } from "react";

const CursorFollower = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateCursorPosition = () => {
      if (cursor) {
        cursor.style.transform = `translate(${mouseX}px, ${mouseY - 35}px)`; // Subtract half the width and height
      }
      requestAnimationFrame(updateCursorPosition);
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "absolute",
        display: "grid",
        placeItems: "center",
        width: "70px",
        height: "70px",
        backgroundColor: "black",
        border: "2px solid white",
        mixBlendMode: "difference",
        filter: "invert(100%)",
        borderRadius: "50%",
        transition: "transform 50ms ease-in-out",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 1000,
      }}
    >
      {/* <div
        ref={cursorRef}
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          backgroundColor: "black",
          border: "2px solid white",
          mixBlendMode: "difference",
          filter: "invert(100%)",
          borderRadius: "50%",
          transition: "transform 200ms ease-in-out",
          //   transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 1000,
        }}
      ></div> */}
    </div>
  );
};

export default CursorFollower;
