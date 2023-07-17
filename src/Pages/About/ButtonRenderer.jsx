import React, { useState } from "react";
import "./ButtonRenderer.css";
import Rocktets from "./images/Rocket.svg";
function ButtonRenderer() {
  const [output, setOutput] = useState(
    "Empowering the next generation through innovative mobility solutions"
  );
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (text, buttonId) => {
    setOutput(text);
    setActiveButton(buttonId);
  };

  return (
    <>
      <div className="container-about">
        <div className="button-container-about">
          <button
            className={`button-render-about ${
              activeButton === 1 ? "active" : ""
            }`}
            onClick={() =>
              handleClick(
                " Empowering the next generation through innovative mobility solutions",
                1
              )
            }
          >
            Our Vision
          </button>
          <button
            className={`button-render-about ${
              activeButton === 2 ? "active" : ""
            }`}
            onClick={() =>
              handleClick(
                "Our mission is to provide sustainable transportation options that are efficient, cost-effective, and environmentally friendly",
                2
              )
            }
          >
            Our Mission
          </button>
          <button
            className={`button-render-about ${
              activeButton === 3 ? "active" : ""
            }`}
            onClick={() => handleClick("Text for Button 3", 3)}
          >
            Our Team
          </button>
          <button
            className={`button-render-about ${
              activeButton === 4 ? "active" : ""
            }`}
            onClick={() => handleClick("Text for Button 4", 4)}
          >
            Our Values
          </button>
        </div>
        <div id="output" className="output-text-about">
          {output}
        </div>
      </div>
    </>
  );
}

export default ButtonRenderer;
