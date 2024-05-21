import { useEffect, useRef } from "react";

const useLogoAnimation = (logoRef) => {
  const imagesRef = useRef([]);

  const getActive = () => document.body.dataset.active === "true";
  const setActiveTo = (active) => (document.body.dataset.active = active);

  const shift = (image, index, rangeX, rangeY) => {
    const active = getActive();
    const translationIntensity = active ? 24 : 4;
    const maxTranslation = translationIntensity * (index + 1);
    const currentTranslation = `${maxTranslation * rangeX}% ${
      maxTranslation * rangeY
    }%`;
    const scale = active ? 1 + index * 0.4 : 1;

    image.animate(
      {
        translate: currentTranslation,
        scale,
      },
      { duration: 750, fill: "forwards", easing: "ease" }
    );
  };

  const shiftAll = (images, rangeX, rangeY) =>
    images.forEach((image, index) => shift(image, index, rangeX, rangeY));

  const shiftLogo = (e) => {
    const rect = logoRef.current.getBoundingClientRect();
    const radius = 1000;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rangeX = (e.clientX - centerX) / radius;
    const rangeY = (e.clientY - centerY) / radius;

    shiftAll(imagesRef.current, rangeX, rangeY);
  };
  console.log("bruh");

  const resetLogo = () => {
    setActiveTo(false);
    shiftAll(imagesRef.current, 0.4, -0.7);
  };

  useEffect(() => {
    const handleMouseMove = (e) => shiftLogo(e);
    const handleMouseLeave = () => {
      if (!getActive()) resetLogo();
    };
    const handleMouseDown = (e) => {
      setActiveTo(true);
      shiftLogo(e);
    };
    const handleMouseUp = (e) => resetLogo();
    // console.log("bruh");
    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return imagesRef;
};

export default useLogoAnimation;
