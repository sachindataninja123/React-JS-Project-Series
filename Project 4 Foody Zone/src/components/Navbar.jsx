import React from "react";
import { useState } from "react";

const Navbar = ({ item ,onFilter }) => {
  const [filterData, setFilterData] = useState(null);

  const searchFood = (e) => {
    const searchValue = e.target.value.toLowerCase();
    console.log(searchValue);

    if (searchValue === "") {
      setFilterData(null);
       onFilter(item); // ⬅️ send full list back
      return;
    }

    const filtered = item?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilterData(filtered);
    onFilter(filtered); // ⬅️ send filtered data to parent
  };

  return (
    <div className="flex items-center justify-between px-20 py-7">
      <img src="/logo.svg" alt="logo" />
      <input
        className="border-red-500 border text-white rounded-[5px] px-2 py-2 text-[18px] "
        type="text"
        placeholder="Search Food..."
        onChange={searchFood}
      />
    </div>
  );
};

export default Navbar;
