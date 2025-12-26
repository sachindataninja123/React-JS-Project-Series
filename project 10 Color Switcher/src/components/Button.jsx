import React from "react";

const Button = ({ colorName, setSelectedColor }) => {
  
  function setColor() {
    setSelectedColor(colorName);
  }

  return (
    <div>
      <button
        onClick={setColor}
        style={{
          backgroundColor: `${colorName}`,
        }}
      >
        {colorName}
      </button>
    </div>
  );
};

export default Button;
