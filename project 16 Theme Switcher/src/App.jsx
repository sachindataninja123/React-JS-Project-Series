import React, { useState } from "react";
import useTheme from "./contexts/Theme";
import Card from "./Card";

const App = () => {
  const { lightTheme, darkTheme } = useTheme();


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-wrap items-center min-h-screen">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <button
              onClick={lightTheme}
              className="mr-2 rounded py-2 px-6 bg-blue-400 active:scale-95"
            >
              Light
            </button>
            <button
              onClick={darkTheme}
              className="rounded py-2 px-6 bg-blue-400 active:scale-95"
            >
              Dark
            </button>
          </div>
  

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


