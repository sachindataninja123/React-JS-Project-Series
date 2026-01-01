import React, { useState } from "react";
import "./App.css";
import Popup from "./Popup";

const App = () => {
  const [popup, setPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);

  return (
    <div className="flex">
      <button className="bg-black" onClick={() => setPopup(true)}>
        Delete
      </button>

      <Popup
        popup={popup}
        setPopup={setPopup}
        title={"Confirm"}
        description={"Are You Sure to want to delete this ?"}
      />

      <button className="bg-black" onClick={() => setEditPopup(true)}>
        Edit
      </button>

      <Popup
        popup={editPopup}
        setPopup={setEditPopup}
        title={"Edit"}
        description={"Are you sure You want to Edit this ?"}
      />
    </div>
  );
};

export default App;
