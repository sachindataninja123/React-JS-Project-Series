import React from "react";

const Button = ({text}) => {
  return (
    <div>
      <div className="bg-blue-500 px-6 text-white py-2 rounded-full mt-5 hover:bg-blue-800 transition-0.4s cursor-pointer">
        {text}
      </div>
    </div>
  );
};

export default Button;
