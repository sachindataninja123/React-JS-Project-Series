import React from "react";

const Popup = ({ popup, setPopup, title, description }) => {
  console.log(popup, setPopup, title, description);
  return (
    <div>
      {popup && (
        <div className="w-screen h-screen bg-black/50 absolute top-0 left-0 flex items-center justify-center ">
          <button
            onClick={() => {
              setPopup(false);
            }}
            className="absolute top-3 right-5 bg-gray-800 text-xl"
          >
            ❌
          </button>

          <div className="w-full h-full max-w-140 max-h-80 bg-[#242424] rounded-2xl flex items-center justify-center flex-col gap-6">
            <h2 className="text-3xl">⚠️{title}</h2>
            <p>{description}</p>
            <div>
              <button className="bg-red-400">No</button>
              <button className="bg-green-500">Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
