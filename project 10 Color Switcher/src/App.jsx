import React, { useState } from "react";
import "./App.css";
import ColorBox from "./components/ColorBox";
import Button from "./components/Button";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("transparent");

  const colors = [
    "pink",
    "red",
    "yellow",
    "green",
    "blue",
    "lightseagreen",
    "aqua",
    "bisque",
    "tomato",
    "orange",
  ];

  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <h1>🎨 Color Switcher</h1>
      <div className="flex items-center justify-center gap-5">
        {colors.map((item, idx) => {
          return (
            <div key={idx}>
              <Button colorName={item} setSelectedColor={setSelectedColor} />
            </div>
          );
        })}
        
      </div>
      <ColorBox color={selectedColor} />
    </div>
  );
};

export default App;
