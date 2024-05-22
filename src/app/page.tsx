import App from "@/container/home";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={24}
        color="153,217,140"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <App />
    </>
  );
}
