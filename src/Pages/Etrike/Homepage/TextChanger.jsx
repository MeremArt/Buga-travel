import React, { useState, useEffect } from "react";

function TextChanger() {
  const [text, setText] = useState("from school?");
  const [delay, setDelay] = useState(2000);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text === "from school?") {
        setText("around school?");
        setDelay(2500); // Change delay to 2 seconds after the first change
      } else if (text === "around school?") {
        setText("to school?");
        setDelay(2000); // Change delay to 2 seconds after the second change
      } else if (text === "to school?") {
        setText("from school?");
        setDelay(2000);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  const textStyle = {
    fontFamily: "General Sans",
    fontSize: "70px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "140px",
    letterSpacing: "-0.634px",
  };

  const mainTextColor = {
    color: "#000",
  };

  const variationTextColor = {
    color: "#FFCC2A",
  };

  return (
    <span>
      <span style={{ ...textStyle, ...mainTextColor }}>Need a ride</span>{" "}
      <span style={{ ...textStyle, ...variationTextColor }}>{text}</span>
    </span>
  );
}

export default TextChanger;
