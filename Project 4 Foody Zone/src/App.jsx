import React, { useState } from "react";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import data from "./data.json";

const App = () => {
  const [filteredItems, setFilteredItems] = useState(data);

  return (
    <div className="bg-[#323232] h-screen">
      <Navbar item={data} onFilter={setFilteredItems} />
      <Heading />
      <div className="flex items-center justify-between">
        <MainContainer data={filteredItems} />
      </div>
    </div>
  );
};

export default App;
