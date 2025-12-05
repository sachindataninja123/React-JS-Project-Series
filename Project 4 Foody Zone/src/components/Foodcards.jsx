import React from "react";

const Foodcards = ({ item}) => {
//   console.log(item);

  return (
    <div>
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-4  text-white flex justify-between w-[450px] h-[220px]">
        <div className="flex flex-col items-center justify-between gap-5">
          <img
            className="h-[140px] w-[140px] rounded-full object-cover border-red-400 border"
            src={item.image}
            alt={item.name}
          />
        </div>
        <div className="w-[60%] flex flex-col gap-3">
          <div className="leading-2">
            <h1 className="font-bold text-2xl">{item.name}</h1>
            <p className="font-semibold text-red-400">{item.cuisine}</p>
          </div>
          <p className=" leading-tight">
            {item.description}
          </p>
          <div className="flex items-center justify-between ">
            <div>
              <p className="font-semibold uppercase">{item.foodType}</p>
              <p className="text-red-500 font-semibold text-lg">{item.time}</p>
            </div>
            <div>
              <p className="font-bold text-ms bg-red-400 p-1 text-white rounded-[5px] px-2 whitespace-nowrap">
           ₹{item.averagePrice}
              </p>
              <p>{item.ratingStars}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foodcards;
