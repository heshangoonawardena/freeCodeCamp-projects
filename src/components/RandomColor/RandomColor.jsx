import React, { useEffect, useState } from "react";
import "./RandomColor.css";

const RandomColor = () => {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const generateRandomValue = (length) => Math.floor(Math.random() * length);

  const generateRandomHexColor = () => {
    const hex = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[generateRandomValue(hex.length)];
    }
    setColor(hexColor);
  };

  const generateRandomRgbColor = () => {
    const red = generateRandomValue(255);
    const green = generateRandomValue(255);
    const blue = generateRandomValue(255);

    setColor(`rgb(${red}, ${green}, ${blue})`);
  };
  console.log(`${type} ${color}`);

  useEffect(() => {
    type === "rgb" ? generateRandomRgbColor() : generateRandomHexColor();
  }, [type]);

  return (
    <div
      className="container"
      style={{
        width: "100%",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="buttons"
        style={{
          // background: 'white',
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setType("hex")}>create Hex Color</button>
        <button onClick={() => setType("rgb")}>Create RGB Color</button>
        <button
          onClick={
            type === "hex" ? generateRandomHexColor : generateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          color: "white",
          fontSize: "50px",
          marginTop: "50px",
        }}
      >
        <h3>{`${type === "rgb" ? "RGB" : "HEX"} Color`}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
