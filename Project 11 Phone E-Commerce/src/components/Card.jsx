import React from "react";

const Card = ({data}) => {

  return (
    <div className="bg-[#333] m-3 rounded-2xl w-[97%] h-[400px] flex items-center justify-center gap-5">
      <div className=" flex items-center justify-center  h-full w-[20%]">
        <img className="h-[220px]" src={data.image} alt="" />
      </div>
      <div className=" h-full w-[55%] p-2 text-white mt-20 flex  flex-col">
        <h2 className="text-xl">{data.title}</h2>
        <div className="flex gap-1 text-gray-400">
          <p>⭐ {data.rating} | </p>
          <p> {data.reviews}</p>
        </div>
        <div>
          <ul className="text-sm list-disc ml-5 space-y-1 mt-2">
            {data.details.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="text-sm text-green-300 m-7 ">
            <p>{data.offers.exchangeOffer}</p>
            <p>{data.offers.bankOffer}</p>
        </div>
      </div>
      <div className=" h-full w-[20%] flex items-end justify-center flex-col ">
        <p className="text-white text-2xl">{data.price}</p>
        <p className="line-through text-gray-300">{data.originalPrice}</p>
        <p className="text-green-400">{data.discount}</p>
      </div>
    </div>
  );
};

export default Card;
